import { CastTitle } from "components/Cast/Cast.styled";
import { Error } from "components/Error/Error";
import { Loader } from "components/Loader/Loader";
import { STATUS } from "constants";
import { getMovieSimilar } from "helpers/api";
import { useEffect, useState} from "react";
import { useLocation, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { SimilarList } from "./Similar.styled";
import { RecommendationItem } from "components/RecommendationItem/RecommendationItem";

const similarVariants = {
    initial: { opacity: 0 },
    isOn: { opacity: 1, transition: { type: "spring" } },
}

const Similar = () => {
    const { movieId } = useParams();
    const [status, setStatus] = useState(STATUS.IDLE);
    const [recommendation, setRecommendation] = useState([]);
    const location = useLocation();

    useEffect(() => {
        setStatus(STATUS.PENDING);
        async function fetchData() {
            try {
                const list = await getMovieSimilar(movieId);
                setRecommendation(list.results);
                setStatus(STATUS.RESOLVED);
            } catch (e) {
                setStatus(STATUS.REJECTED);
            }
        }
        fetchData()
    }, [movieId]);

    if (status === STATUS.IDLE) {
        return (<CastTitle>Suggestions for you based on current movie</CastTitle>)
    } else if (status === STATUS.RESOLVED) {
        return (<motion.div
            initial={"initial"}
            animate={"isOn"}
            variants={similarVariants}>
            <CastTitle>Suggestions for you based on current movie</CastTitle>
            {recommendation.length > 0 ? <SimilarList>
                {recommendation.map(item => 
                <RecommendationItem 
                film={item} 
                key={item.id} 
                location={location}/>)}
            </SimilarList> : <p>No matches with this film</p>}
        </motion.div>)
    } else if (status === STATUS.REJECTED) {
        return (<Error />);
    } else if (status === STATUS.PENDING) {
        return (<Loader />);
    }
}

export default Similar;
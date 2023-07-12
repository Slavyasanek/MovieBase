import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { STATUS } from "constants";
import { getMovieCollection } from "helpers/api";
import { CastTitle } from "components/Cast/Cast.styled";
import { Error } from "components/Error/Error";
import { Loader } from "components/Loader/Loader";
import { RecommendationList } from "components/RecommendationItem/RecommendationItem.styled";
import { RecommendationItem } from "components/RecommendationItem/RecommendationItem";
import { useSelector } from "react-redux";
import { selectLanguage } from "redux/films/selectors";
import { LANGUAGES } from "redux/films/constants";

const variants = {
    initial: { opacity: 0 },
    isOn: { opacity: 1, transition: { type: "spring" } },
}

const Other = () => {
    const { partsId } = useParams();
    const [status, setStatus] = useState(STATUS.IDLE);
    const [collection, setCollection] = useState([]);
    const language = useSelector(selectLanguage);
    const location = useLocation();

    useEffect(() => {
        setStatus(STATUS.PENDING);
        async function fetchData() {
            try {
                const collection = await getMovieCollection(partsId, language);
                setCollection(collection.parts);
                setStatus(STATUS.RESOLVED);
            } catch (e) {
                setStatus(STATUS.REJECTED);
            }
        }
        fetchData();
    }, [partsId, language])
    if (status === STATUS.IDLE) {
        return (<CastTitle>{language === LANGUAGES.ENG ? 'Other parts' : 'Інші частини'}</CastTitle>)
    } else if (status === STATUS.REJECTED) {
        return (<Error />);
    } else if (status === STATUS.PENDING) {
        return (<Loader />);
    } else if (status === STATUS.RESOLVED) {
        return (<motion.div
            initial={"initial"}
            animate={"isOn"}
            variants={variants}>
               <CastTitle>{language === LANGUAGES.ENG ? 'Other parts' : 'Інші частини'}</CastTitle>
               {collection.length > 0 ? <RecommendationList>
                {collection.map(part => 
                <RecommendationItem
                film={part}
                key={part.id}
                location={location}
                />)}
               </RecommendationList>
               : <p>{language === LANGUAGES.ENG ? 'No other parts' : 'Немає інших частин'}</p>} 
        </motion.div>)
    }
}

export default Other;
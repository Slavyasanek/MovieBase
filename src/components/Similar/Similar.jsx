import { CastTitle } from "components/Cast/Cast.styled";
import { Error } from "components/Error/Error";
import { Loader } from "components/Loader/Loader";
import { STATUS } from "constants";
import { getMovieSimilar } from "helpers/api";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { RecommendationItem } from "components/RecommendationItem/RecommendationItem";
import { RecommendationList } from "components/RecommendationItem/RecommendationItem.styled";
import { useSelector } from "react-redux";
import { selectLanguage } from "redux/films/selectors";
import { LANGUAGES } from "redux/films/constants";

const similarVariants = {
    initial: { opacity: 0 },
    isOn: { opacity: 1, transition: { type: "spring" } },
}

const Similar = () => {
    const { movieId } = useParams();
    const [status, setStatus] = useState(STATUS.IDLE);
    const [recommendation, setRecommendation] = useState([]);
    const language = useSelector(selectLanguage);
    const location = useLocation();

    useEffect(() => {
        setStatus(STATUS.PENDING);
        async function fetchData() {
            try {
                const list = await getMovieSimilar(movieId, language);
                setRecommendation(list.results);
                setStatus(STATUS.RESOLVED);
            } catch (e) {
                setStatus(STATUS.REJECTED);
            }
        }
        fetchData()
    }, [movieId, language]);

    if (status === STATUS.IDLE) {
        return (<CastTitle>{language === LANGUAGES.ENG
            ? 'Suggestions for you based on current movie'
            : 'Пропозиції для Вас основані на цьому фільмі'}</CastTitle>)
    } else if (status === STATUS.RESOLVED) {
        return (<motion.div
            initial={"initial"}
            animate={"isOn"}
            variants={similarVariants}>
            <CastTitle>{language === LANGUAGES.ENG
                ? 'Suggestions for you based on current movie'
                : 'Пропозиції для Вас основані на цьому фільмі'}</CastTitle>
            {recommendation.length > 0 ? <RecommendationList>
                {recommendation.map(item =>
                    <RecommendationItem
                        film={item}
                        key={item.id}
                        location={location} />)}
            </RecommendationList> : <p>{language === LANGUAGES.ENG
                ? 'No matches with this film'
                : 'Немає співпадінь'}</p>}
        </motion.div>)
    } else if (status === STATUS.REJECTED) {
        return (<Error />);
    } else if (status === STATUS.PENDING) {
        return (<Loader />);
    }
}

export default Similar;
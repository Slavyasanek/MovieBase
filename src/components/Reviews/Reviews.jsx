import { CastTitle } from "components/Cast/Cast.styled";
import { Error } from "components/Error/Error";
import { Loader } from "components/Loader/Loader";
import { STATUS } from "constants";
import { getMovieReviews } from "helpers/api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { ReviewsList } from "./Reviews.styled";
import { ReviewItem } from "components/ReviewItem/ReviewItem";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { selectLanguage } from "redux/films/selectors";
import { LANGUAGES } from "redux/films/constants";

const reviewVariants = {
    initial: { opacity: 0 },
    isOn: { opacity: 1, transition: { type: "spring" } },
}

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [status, setStatus] = useState(STATUS.IDLE);
    const language = useSelector(selectLanguage);
    const { movieId } = useParams();

    useEffect(() => {
        setStatus(STATUS.PENDING);
        async function getReviews() {
            try {
                const reviews = await getMovieReviews(movieId, language);
                const results = reviews.results;
                const sortedResults = results.filter((review, index, array) => array.map(review => review.author).indexOf(review.author) === index);
                setReviews(sortedResults);
                setStatus(STATUS.RESOLVED);
            } catch (e) {
                setStatus(STATUS.REJECTED);
            }
        }
        getReviews();
    }, [movieId, language])
    if (status === STATUS.PENDING) {
        return (<Loader />);
    } else if (status === STATUS.REJECTED) {
        return (<Error />);
    } else if (status === STATUS.RESOLVED) {
        return (<motion.div
            initial={"initial"}
            animate={"isOn"}
            variants={reviewVariants}>
            <CastTitle>{language === LANGUAGES.ENG ? 'Reviews' : 'Відгуки'}</CastTitle>
            {reviews.length <= 0 ? (language === LANGUAGES.ENG ?
                <p>No reviews available</p>
                : <p>Немає відгуків українською</p>) : <ReviewsList>
                {reviews.map(review => (<ReviewItem overview={review} key={review.id} />))}
            </ReviewsList>}
        </motion.div>)
    } else if (status === STATUS.IDLE) {
        return (<CastTitle>{language === LANGUAGES.ENG ? 'Reviews' : 'Відгуки'}</CastTitle>)
    }
}

export default Reviews;
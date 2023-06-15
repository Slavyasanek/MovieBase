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

const reviewVariants = {
    initial: { opacity: 0 },
    isOn: { opacity: 1, transition: { type: "spring" } },
}

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [status, setStatus] = useState(STATUS.IDLE);
    const { movieId } = useParams();

    useEffect(() => {
        setStatus(STATUS.PENDING);
        async function getReviews() {
            try {
                const reviews = await getMovieReviews(movieId);
                const results = reviews.results;
                const sortedResults = results.filter((review, index, array) => array.map(review => review.author).indexOf(review.author) === index);
                setReviews(sortedResults);
                setStatus(STATUS.RESOLVED);
            } catch (e) {
                setStatus(STATUS.REJECTED);
            }
        }
        getReviews();
    }, [movieId])
    if (status === STATUS.PENDING) {
        return (<Loader />);
    } else if (status === STATUS.REJECTED) {
        return (<Error />);
    } else if (status === STATUS.RESOLVED || status === STATUS.IDLE) {
        return (<motion.div
            initial={"initial"}
            animate={"isOn"}
            variants={reviewVariants}
        >
            <CastTitle>Reviews</CastTitle>
            {reviews.length <= 0 ? <p>No reviews available</p> : <ReviewsList>
                {reviews.map(review => (<ReviewItem overview={review} key={review.id} />))}
            </ReviewsList>}
        </motion.div>)
    }
}

export default Reviews;
import { CastTitle } from "components/Cast/Cast.styled";
import { getMovieReviews } from "helpers/api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"

export const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const {movieId} = useParams();

    useEffect(() => {
        async function getReviews() {
            try {
                const reviews = await getMovieReviews(movieId);
                setReviews(reviews.results);
            } catch (e) {
                return;
            }
        }
        getReviews();
    }, [movieId])

    return (<>
    <CastTitle>Reviews</CastTitle>
    </>)
}
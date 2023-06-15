import { imagePath } from "constants";
import { Poster, PosterWrapper, Recommandation, Title } from "./RecommendationItem.styled";
import { Rate } from "components/MovieCard/MovieCard.styled";
import { Link } from "react-router-dom";

export const RecommendationItem = ({ film, location }) => {
    const { poster_path, title, vote_average, id } = film;
    return (
    <Recommandation>
        <Link to={`/movies/${id}`} state={{from: location}}>
            <PosterWrapper>
                <Poster src={poster_path ? `${imagePath.default}${poster_path}` : imagePath.sample} />
                <Rate rateType={vote_average > 6 ? 'good' : 'bad'}>{vote_average.toFixed(1)}</Rate>
            </PosterWrapper>
            <Title>{title}</Title>
        </Link>
    </Recommandation>)
}
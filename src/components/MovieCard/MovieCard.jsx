import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import { Card, Title, Rate, Poster, PosterWrapper } from "./MovieCard.styled"
import { imagePath } from "constants";

const cardVariants = {
    initial: { opacity: 0 },
    isOn: { opacity: 1, transition: { type: "spring" } },
}

export const MovieCard = ({ id, poster, title, rate, path }) => {
    return (
        <Card
            initial={"initial"}
            animate={"isOn"}
            variants={cardVariants}>
            <Link to={`/movies/${id}`} state={path}>
                <PosterWrapper>
                    <Poster
                        src={poster 
                            ? `${imagePath.default}${poster}`
                            : imagePath.sample}
                        alt={title} 
                        loading="lazy" />
                    <Rate rateType={rate > 6 ? 'good' : 'bad'}>{rate.toFixed(1)}</Rate>
                </PosterWrapper>
                <Title>{title}</Title>
            </Link>
        </Card>
    )
}

MovieCard.propTypes = {
    id: PropTypes.number,
    poster: PropTypes.string,
    title: PropTypes.string.isRequired,
    rate: PropTypes.number.isRequired
}
import  PropTypes  from "prop-types";
import { Card, Link, Title, Rate, Poster } from "./MovieCard.styled"
import { imagePath } from "constants";

const cardVariants = {
    initial: { opacity: 0},
    isOn: { opacity: 1, transition: { type: "spring" } },
}


export const MovieCard = ({ id, poster, title, rate, path }) => {
    return (
        <Card
        initial={"initial"}
        animate={"isOn"}
        variants={cardVariants}>
            <Link to={`/movies/${id}`} state={path}>
                <Poster 
                src={poster ? `${imagePath.default}${poster}` 
                : imagePath.sample} 
                alt={title} loading="lazy"/>
                <Title>{title}</Title>
                <Rate rateType={rate > 6 ? 'good' : 'bad'}>{rate.toFixed(1)}</Rate>
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
import  PropTypes  from "prop-types";
import { Card, Link, Title, Rate, Poster } from "./MovieCard.styled"

const cardVariants = {
    initial: { opacity: 0},
    isOn: { opacity: 1, transition: { type: "spring" } },
}

export const MovieCard = ({ id, poster, title, rate }) => {
    const posterPath = 'https://image.tmdb.org/t/p/original';
    return (
        <Card
        initial={"initial"}
        animate={"isOn"}
        variants={cardVariants}>
            <Link to={id}>
                <Poster src={`${posterPath}${poster}`} alt={title} loading="lazy" />
                <Title>{title}</Title>
                <Rate rateType={rate > 6 ? 'good' : 'bad'}>{rate.toFixed(1)}</Rate>
            </Link>
        </Card>
    )
}

MovieCard.propTypes = {
    id: PropTypes.number,
    poster: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    rate: PropTypes.number.isRequired
}
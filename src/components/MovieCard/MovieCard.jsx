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
                <Poster src={poster ? `${posterPath}${poster}` : `https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png`} alt={title} loading="lazy" />
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
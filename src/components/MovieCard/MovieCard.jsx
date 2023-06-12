import { Card, Link, Title, Rate, Poster } from "./MovieCard.styled"


export const MovieCard = ({ id, poster, title, rate }) => {
    const posterPath = 'https://image.tmdb.org/t/p/original';
    return (
        <Card>
            <Link to={id}>
                <Poster src={`${posterPath}${poster}`} alt={title} loading="lazy" />
                <Title>{title}</Title>
                <Rate>{rate}</Rate>
            </Link>
        </Card>
    )
}
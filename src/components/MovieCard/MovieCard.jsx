import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import { Card, Title, Rate, Poster, PosterWrapper } from "./MovieCard.styled"
import { imagePath } from "constants";
import { useSelector } from "react-redux";
import { selectLanguage } from "redux/films/selectors";
import { LANGUAGES } from "redux/films/constants";

const cardVariants = {
    initial: { opacity: 0 },
    isOn: { opacity: 1, transition: { type: "spring" } },
}

export const MovieCard = ({ id, poster, title, rate, path }) => {
    const currentLanguage = useSelector(selectLanguage)
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
                        width="140"
                        loading="lazy" />
                    <Rate rateType={rate <= 0 ? 'coming' : rate > 6 ? 'good' : 'bad'}>
                        {rate > 0 ? rate.toFixed(1) 
                        : (currentLanguage === LANGUAGES.ENG ? 'soon' : 'скоро')}</Rate>
                </PosterWrapper>
            </Link>
            <Title>{title}</Title>
        </Card>
    )
}

MovieCard.propTypes = {
    id: PropTypes.number,
    poster: PropTypes.string,
    title: PropTypes.string.isRequired,
    rate: PropTypes.number.isRequired,
    path: PropTypes.object.isRequired
}
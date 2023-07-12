import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { motion } from "framer-motion";
import { getMovieCredits } from "helpers/api"
import { CastList, Actor, ActorCredits, Photo, CastTitle } from "./Cast.styled";
import { imagePath, STATUS } from "constants";
import { MovieDetail } from "components/Movie/Movie.styled";
import { Loader } from "components/Loader/Loader";
import { Error } from "components/Error/Error";
import { useSelector } from "react-redux";
import { selectLanguage } from "redux/films/selectors";
import { LANGUAGES } from "redux/films/constants";

const castVariants = {
    initial: { opacity: 0 },
    isOn: { opacity: 1, transition: { type: "spring" } },
    exit: {opacity: 0}
}

const Cast = () => {
    const [cast, setCast] = useState([]);
    const [status, setStatus] = useState(STATUS.IDLE);
    const language = useSelector(selectLanguage);
    const { movieId } = useParams();

    useEffect(() => {
        setStatus(STATUS.PENDING);
        async function getCast() {
            try {
                const result = await getMovieCredits(movieId, language);
                setStatus(STATUS.RESOLVED);
                setCast(result.cast);
            } catch (e) {
                setStatus(STATUS.REJECTED);
            }
        }
        getCast();
    }, [movieId, language]);
    if (status === STATUS.PENDING) {
        return (<Loader />)
    } else if (status === STATUS.RESOLVED || status === STATUS.IDLE) {
        return (<motion.div
            initial={"initial"}
            animate={"isOn"}
            exit={"exit"}
            variants={castVariants}>
            <CastTitle>{language === LANGUAGES.ENG ? "Cast" : 'Актори'}</CastTitle>
            {cast.length > 0 
            ? <CastList>
                {cast.map(({ id, character, profile_path, name }) => (
                <Actor key={id}>
                    <Photo
                        src={profile_path ? `${imagePath.default}${profile_path}` : imagePath.sample}
                        alt={character}
                        height={150} />
                    {name && <ActorCredits><MovieDetail>{language === LANGUAGES.ENG ? 'Name:' : `Ім\x27я:`}</MovieDetail> {name}</ActorCredits>}
                    {character && <ActorCredits><MovieDetail> {language === LANGUAGES.ENG ? 'Character:' : 'Персонаж:'}</MovieDetail> {character}</ActorCredits>}
                </Actor>))}
            </CastList> : <p>{language === LANGUAGES.ENG ? 'No cast info' : 'Немає інформації'}</p>}
        </motion.div>)
    } else if (status === STATUS.REJECTED) {
        return (<Error />)
    }
}

export default Cast;
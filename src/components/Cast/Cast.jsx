import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { motion } from "framer-motion";
import { getMovieCredits } from "helpers/api"
import { CastList, Actor, ActorCredits, Photo, CastTitle, PhotoWrapper } from "./Cast.styled";
import { imagePath, STATUS } from "constants";
import { MovieDetail } from "components/Movie/Movie.styled";
import { Loader } from "components/Loader/Loader";
import { Error } from "components/Error/Error";

const castVariants = {
    initial: { opacity: 0 },
    isOn: { opacity: 1, transition: { type: "spring" } },
    exit: {opacity: 0}
}

const Cast = () => {
    const [cast, setCast] = useState([]);
    const [status, setStatus] = useState(STATUS.IDLE);
    const { movieId } = useParams();

    useEffect(() => {
        setStatus(STATUS.PENDING);
        async function getCast() {
            try {
                const result = await getMovieCredits(movieId);
                setStatus(STATUS.RESOLVED);
                setCast(result.cast);
            } catch (e) {
                setStatus(STATUS.REJECTED);
            }
        }
        getCast();
    }, [movieId])
    if (status === STATUS.PENDING) {
        return (<Loader />)
    } else if (status === STATUS.RESOLVED || status === STATUS.IDLE) {
        return (<motion.div
            initial={"initial"}
            animate={"isOn"}
            exit={"exit"}
            variants={castVariants}>
            <CastTitle>Cast</CastTitle>
            {cast.length > 0 
            ? <CastList>
                {cast.map(({ id, character, profile_path, name }) => (
                <Actor key={id}>
                    <PhotoWrapper>
                    <Photo
                        src={profile_path ? `${imagePath.default}${profile_path}` : imagePath.sample}
                        alt={character} />
                    </PhotoWrapper>
                    {name && <ActorCredits><MovieDetail>Name:</MovieDetail> {name}</ActorCredits>}
                    {character && <ActorCredits><MovieDetail> Character:</MovieDetail> {character}</ActorCredits>}
                </Actor>))}
            </CastList> : <p>No cast info</p>}
        </motion.div>)
    } else if (status === STATUS.REJECTED) {
        return (<Error />)
    }
}

export default Cast;
import { CastTitle } from "components/Cast/Cast.styled";
import { Error } from "components/Error/Error";
import { Loader } from "components/Loader/Loader";
import { STATUS } from "constants";
import { getMovieVideo } from "helpers/api";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { Video } from "./Trailer.styled";
import { motion } from "framer-motion";

const trailerVariants = {
    initial: { opacity: 0 },
    isOn: { opacity: 1, transition: { type: "spring" } },
}

const Trailer = () => {
    const [trailer, setTrailer] = useState(null);
    const [status, setStatus] = useState(STATUS.IDLE);
    const { movieId } = useParams();
    useEffect(() => {
        setStatus(STATUS.PENDING)
        async function fetchData() {
            try {
                const videos = await getMovieVideo(movieId)
                const trailer = videos.results.find(({ name }) => name.toLowerCase().includes('official trailer'));
                setTrailer(trailer);
                setStatus(STATUS.RESOLVED);
            } catch (e) {
                setStatus(STATUS.REJECTED)
                return;
            }
        }
        fetchData()
    }, [movieId])
    if (status === STATUS.REJECTED) {
        return (<Error />);
    } else if (status === STATUS.PENDING) {
        return (<Loader />);
    } else if (status === STATUS.IDLE) {
        return (<CastTitle>Official Trailer</CastTitle>)
    } else if (status === STATUS.RESOLVED) {
        return (<motion.div
            initial={"initial"}
            animate={"isOn"}
            variants={trailerVariants}>
            <CastTitle>Official Trailer</CastTitle>
            {trailer ?
                <Video
                    src={`https://www.youtube.com/embed/${trailer.key}`}
                    title="Official Trailer"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share"
                    allowFullScreen
                    referrerPolicy="no-referrer"
                ></Video>
                : <p>No trailer available</p>}
        </motion.div>)
    }
}

export default Trailer;
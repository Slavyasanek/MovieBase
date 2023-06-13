import { getMovieCredits } from "helpers/api"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { CastList, Actor, ActorCredits, Photo, CastTitle } from "./Cast.styled";
import { imagePath } from "constants";
import { MovieDetail } from "components/Movie/Movie.styled";

export const Cast = () => {
    const [cast, setCast] = useState([]);
    const {movieId} = useParams();

    useEffect(() => {
        async function getCast() {
            try {
                const result = await getMovieCredits(movieId)
                setCast(result.cast);
            } catch (e) {
                return;
            }
        }
        getCast();
    }, [movieId])

    return (<>
    <CastTitle>Cast</CastTitle>
    {cast.length ? <CastList>
        {cast.map(({id, character, profile_path, name}) => (<Actor key={id}>
            <Photo
            src={profile_path ? `${imagePath.default}${profile_path}` : imagePath.sample} 
            alt={character}/>
            <ActorCredits><MovieDetail>Name:</MovieDetail> {name}</ActorCredits>
            <ActorCredits><MovieDetail> Character:</MovieDetail> {character}</ActorCredits>
            </Actor>))}
        </CastList> : <p>No cast info</p>}
    </>)
}
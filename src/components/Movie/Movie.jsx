import { TypedTitle } from "components/TypedTitle/TypedTitle";
import { MovieWrapper, Poster, MovieData, MovieDetail, Slogan, PosterWrapper } from "./Movie.styled"
import { imagePath } from "constants";

export const Movie = ({ film }) => {
    const { poster_path, genres, overview, title, original_title, production_companies, release_date, tagline } = film;

    const date = new Date(release_date);
    const formatDate = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`

    return (<MovieWrapper>
        <PosterWrapper>
            <Poster src={poster_path ? `${imagePath.default}${poster_path}` : imagePath.sample} />
        </PosterWrapper>
        <MovieData>
            <li key={'title'}>
                <TypedTitle typing={[1000, `${title}`]} />
            </li>
            <Slogan key={'tag'}>
                {tagline}
            </Slogan>
            <li key={original_title}>
                <MovieDetail>Original Title:</MovieDetail> {original_title}
            </li>
            <li key={'genres'}>
                <MovieDetail>Genres:</MovieDetail> {genres.map(genre => genre.name).join(', ')}
            </li>
            <li key={release_date}>
                <MovieDetail>Year:</MovieDetail> {formatDate}
            </li>
            <li key={'production'}>
                <MovieDetail>Production:</MovieDetail> {production_companies.map(company => company.name).join(", ")}
            </li>
            <li key={'description'}>
                <MovieDetail>Description:</MovieDetail> {overview}
            </li>
        </MovieData>
    </MovieWrapper>)
}
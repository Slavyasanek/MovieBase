import { TypedTitle } from "components/TypedTitle/TypedTitle";
import { MovieWrapper, Poster, MovieData, MovieDetail, Slogan, PosterWrapper, Company, CompaniesList } from "./Movie.styled"
import { imagePath } from "constants";

export const Movie = ({ film, background }) => {
    const { poster_path, genres, overview, title, original_title, production_companies, release_date, tagline } = film;
    const date = new Date(release_date);
    const formatDate = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`

    return (<MovieWrapper back={background}>
        <PosterWrapper>
            <Poster src={poster_path ? `${imagePath.default}${poster_path}` : imagePath.sample} alt={title} />
        </PosterWrapper>
        <MovieData>
            <li key={'title'}>
                <TypedTitle typing={[1000, `${title}`]} />
            </li>
            {tagline && <Slogan key={'tag'}>
                {tagline}
            </Slogan>}
            {original_title && <li key={original_title}>
                <MovieDetail>Original Title:</MovieDetail> {original_title}
            </li>}
            {genres.length > 0 && <li key={'genres'}>
                <MovieDetail>Genres:</MovieDetail> {genres.map(genre => genre.name).join(', ')}
            </li>}
            {release_date && <li key={release_date}>
                <MovieDetail>Year:</MovieDetail> {formatDate}
            </li>}
            {overview && <li key={'description'}>
                <MovieDetail>Description:</MovieDetail> {overview}
            </li>}
            {production_companies.length > 0 &&
                <>
                    <li key={'production'}> <MovieDetail>Production:</MovieDetail></li>
                    <li key={'companies'}>
                        <CompaniesList>
                            {production_companies.map(({ logo_path, name, id }) =>
                                <li key={id}>{logo_path && <Company src={`${imagePath.default}${logo_path}`} />}
                                </li>)}</CompaniesList>
                    </li>
                </>}
        </MovieData>
    </MovieWrapper>)
}
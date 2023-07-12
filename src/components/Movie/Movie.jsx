import PropTypes from "prop-types";
import { MovieWrapper, Poster, MovieData, MovieDetail, Slogan, PosterWrapper, Company, CompaniesList, HomepageLink } from "./Movie.styled"
import { imagePath } from "constants";
import { Title } from "components/Title/Title";

export const Movie = ({ film }) => {
    const { poster_path, genres, overview, title, original_title, homepage, production_companies, release_date, tagline, backdrop_path} = film;
    const date = new Date(release_date);
    const formatDate = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`

    return (<MovieWrapper back={backdrop_path}>
        <PosterWrapper>
            <Poster src={poster_path ? `${imagePath.default}${poster_path}` : imagePath.sample} alt={title} />
        </PosterWrapper>
        <MovieData>
            <li key={'title'}>
                <Title sequence={`${title}`} />
            </li>
            {tagline && <Slogan key={'tag'}>
                {tagline}
            </Slogan>}
            {homepage && <li key={'link'}><HomepageLink href={homepage} target="_blank" rel="noreferrer noopener">Official page</HomepageLink></li>}
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
                            {production_companies.map(({ logo_path, id }) =>
                                <li key={id}>{logo_path && <Company src={`${imagePath.default}${logo_path}`} />}
                                </li>)}</CompaniesList>
                    </li>
                </>}
        </MovieData>
    </MovieWrapper>)
}

Movie.propTypes = {
    film: PropTypes.shape({
        poster_path: PropTypes.string,
        genres: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired,
        })),
        overview: PropTypes.string,
        title: PropTypes.string,
        original_title: PropTypes.string,
        homepage: PropTypes.string,
        production_companies: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number,
            poster_path: PropTypes.string,
        })),
        release_date: PropTypes.string,
        tagline: PropTypes.string,
        background: PropTypes.string
    }).isRequired
}
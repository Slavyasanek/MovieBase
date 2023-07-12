import { useRef, useState } from "react"
import { Search, Form, SubmitBtn } from "./SearchBar.styled"
import { MdMovieFilter } from 'react-icons/md'
import { useDispatch, useSelector } from "react-redux";
import { selectLanguage } from "redux/films/selectors";
import { LANGUAGES } from "redux/films/constants";
import { useNavigate } from "react-router-dom";
import { setQuery } from "redux/films/filmsSlice";

export const SearchBar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const currentLanguage = useSelector(selectLanguage);
    const [query, setQuerySearch] = useState('')
    const queryRef = useRef(query);

    const handleChange = ({ target: { value } }) => {
        setQuerySearch(value);
    }

    const handleSubmit = (e) => {
        if (query === '') {
            return;
        }
        if (query === queryRef.current) {
            return;
        }
        e.preventDefault();
        queryRef.current = query;
        dispatch(setQuery(query));
        navigate("/search");
        setQuerySearch('');
    }

    return (<Form onSubmit={handleSubmit}>
        <Search type="text" onChange={handleChange} value={query} />
        <SubmitBtn>{currentLanguage === LANGUAGES.ENG ? 'Search' : 'Пошук'} <MdMovieFilter /></SubmitBtn>
    </Form>);
}
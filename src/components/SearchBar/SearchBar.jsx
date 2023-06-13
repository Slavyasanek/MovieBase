import { useState } from "react"
import  PropTypes  from "prop-types";
import { Search, Form, SubmitBtn } from "./SearchBar.styled"
import { MdMovieFilter } from 'react-icons/md'

export const SearchBar = ({ searchFunc }) => {
    const [query, setValue] = useState('');

    const handleChange = ({ target: { value } }) => {
        setValue(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        searchFunc(query);
        setValue('')
    }

    return (<Form onSubmit={handleSubmit}>
        <Search type="text" onChange={handleChange} value={query} />
        <SubmitBtn>Search <MdMovieFilter /></SubmitBtn>
    </Form>);
}

SearchBar.propTypes = {
    searchFunc: PropTypes.func
}
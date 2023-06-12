import { Search, Form, SubmitBtn } from "./SearchBar.styled"
import {MdMovieFilter} from 'react-icons/md'

export const SearchBar = () => {
    return (<Form>
        <Search />
        <SubmitBtn>Search <MdMovieFilter/></SubmitBtn>
    </Form>)
}
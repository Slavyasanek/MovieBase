import { useSelector } from "react-redux"
import { BtnBack } from "./BackLink.styled"
import { IoReturnUpBackOutline } from 'react-icons/io5'
import { selectLanguage } from "redux/films/selectors"
import { LANGUAGES } from "redux/films/constants"

export const BackLink = ({ to, onClick }) => {
    const language = useSelector(selectLanguage)
    return (<>
        <BtnBack to={to} onClick={onClick}> <IoReturnUpBackOutline/>
        {language === LANGUAGES.ENG ? 'Back' : 'Назад'}</BtnBack>
    </>)
}
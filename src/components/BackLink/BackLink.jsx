import { BtnBack } from "./BackLink.styled"
import { IoReturnUpBackOutline } from 'react-icons/io5'

export const BackLink = ({ to, onClick }) => {
    return (<>
        <BtnBack to={to} onClick={onClick}> <IoReturnUpBackOutline/> Back</BtnBack>
    </>)
}
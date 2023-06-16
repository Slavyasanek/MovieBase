import { BtnBack } from "./BackLink.styled"
import { IoReturnUpBackOutline } from 'react-icons/io5'

export const BackLink = ({ to }) => {
    return (<>
        <BtnBack to={to}> <IoReturnUpBackOutline/> Back</BtnBack>
    </>)
}
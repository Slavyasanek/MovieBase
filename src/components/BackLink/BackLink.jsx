import PropTypes from "prop-types";
import { BtnBack } from "./BackLink.styled"
import { IoReturnUpBackOutline } from 'react-icons/io5'

export const BackLink = ({ to }) => {
    return (<>
        <BtnBack to={to}> <IoReturnUpBackOutline/> Back</BtnBack>
    </>)
}

BackLink.propTypes = {
    to: PropTypes.object
}
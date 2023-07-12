import PropTypes from "prop-types";
import { Result } from "./Title.styled";

export const Title = ({sequence}) => {
    return (<>
        <Result>{sequence}</Result>
    </>)
};

Title.propTypes = {
    sequence: PropTypes.string.isRequired
}

import  PropTypes  from "prop-types";
import { TypingThing } from './TypedTitle.styled';

export const TypedTitle = ({ typing }) => {

    return (<>
        <TypingThing
            sequence={typing}
            wrapper='h1'
        />
    </>
    )
}

TypedTitle.propTypes = {
    typing: PropTypes.array.isRequired
}
import { TypeAnimation } from 'react-type-animation';
import  PropTypes  from "prop-types";

export const TypedTitle = ({ typing }) => {
    return (<>
        <TypeAnimation
            sequence={typing}
            wrapper='h1'
            style={
                {
                    marginBottom: '10px',
                    color: '#440700',
                    fontSize: '26px'
                }
            }
        />
    </>
    )
}

TypedTitle.propTypes = {
    typing: PropTypes.array.isRequired
}
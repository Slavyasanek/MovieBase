import { TypeAnimation } from 'react-type-animation';

export const TypedTitle = ({ typing }) => {
    return (<>
        <TypeAnimation
            sequence={typing}
            wrapper='h1'
            style={
                {
                    marginBottom: '20px',
                    color: '#440700',
                    fontSize: '26px'
                }
            }
        />
    </>
    )
}
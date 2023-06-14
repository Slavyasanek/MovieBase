import {TbError404} from 'react-icons/tb'
import { ErrorMessage, ErrorWrapper } from './Error.styled'

export const Error = () => {
    return (<ErrorWrapper>
    <TbError404/><ErrorMessage>Something went wrong</ErrorMessage>
    </ErrorWrapper>)
}
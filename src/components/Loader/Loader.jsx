import { InfinitySpin } from "react-loader-spinner"
import { LoaderWrapper } from "./Loader.styled"

export const Loader = () => {
    return (
        <LoaderWrapper>
            <InfinitySpin
                width='200'
                color="#440700"
            />
        </LoaderWrapper>
    )
}
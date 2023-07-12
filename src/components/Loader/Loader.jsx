import { InfinitySpin } from "react-loader-spinner"
import { LoaderWrapper } from "./Loader.styled"
import { useSelector } from "react-redux"
import { selectTheme } from "redux/theme/selectors"
import { THEME } from "redux/theme/constants"

export const Loader = () => {
    const theme = useSelector(selectTheme);

    return (
        <LoaderWrapper>
            <InfinitySpin
                width='200'
                color={theme === THEME.LIGHT ? "#440700" : '#443C68'}
            />
        </LoaderWrapper>
    )
}
import { OptionList, OptionTitle, Option } from "./OddInfo.styled"

export const OddInfo = () => {
    return (
        <>
        <OptionTitle>View additional information</OptionTitle>
        <OptionList>
            <Option to="cast">Cast</Option>
            <Option to="reviews">Reviews</Option>
        </OptionList>
        </>
    )
}
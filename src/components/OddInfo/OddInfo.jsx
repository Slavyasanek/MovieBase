import { OptionList, OptionTitle, Option, OddWrapper } from "./OddInfo.styled"
import { BiCommentDots } from 'react-icons/bi';
import { VscAccount } from 'react-icons/vsc';

export const OddInfo = () => {
    return (
        <OddWrapper>
            <OptionTitle>View additional information</OptionTitle>
            <OptionList>
                <Option to="cast"><VscAccount/> Cast</Option>
                <Option to="reviews"><BiCommentDots/> Reviews</Option>
            </OptionList>
        </OddWrapper>
    )
}
import { OptionList, OptionTitle, Option, OddWrapper } from "./OddInfo.styled"
import { BiCommentDots } from 'react-icons/bi';
import { VscAccount } from 'react-icons/vsc';
import { GoDeviceCameraVideo} from 'react-icons/go';

export const OddInfo = () => {
    return (
        <OddWrapper>
            <OptionTitle>View additional information</OptionTitle>
            <OptionList>
                <Option to="cast"><VscAccount /> Cast</Option>
                <Option to="reviews"><BiCommentDots /> Reviews</Option>
                <Option to="trailer"><GoDeviceCameraVideo/>Trailer</Option>
            </OptionList>
        </OddWrapper>
    )
}
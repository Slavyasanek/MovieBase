import { OptionList, OptionTitle, Option, OddWrapper } from "./OddInfo.styled"
import { BiCommentDots } from 'react-icons/bi';
import { VscAccount } from 'react-icons/vsc';
import { GoDeviceCameraVideo} from 'react-icons/go';
import {RiUserHeartLine} from 'react-icons/ri';

export const OddInfo = () => {
    return (
        <OddWrapper>
            <OptionTitle>View additional information</OptionTitle>
            <OptionList>
                <Option to="cast"><VscAccount /> Cast</Option>
                <Option to="reviews"><BiCommentDots /> Reviews</Option>
                <Option to="trailer"><GoDeviceCameraVideo/>Trailer</Option>
                <Option to="similar"><RiUserHeartLine/>You may also like</Option>
            </OptionList>
        </OddWrapper>
    )
}
import { OptionList, OptionTitle, Option, OddWrapper } from "./OddInfo.styled"
import { BiCommentDots } from 'react-icons/bi';
import { VscAccount } from 'react-icons/vsc';
import { GoDeviceCameraVideo } from 'react-icons/go';
import { RiUserHeartLine } from 'react-icons/ri';
import { AiOutlineApartment } from 'react-icons/ai';
import { useSelector } from "react-redux";
import { selectLanguage } from "redux/films/selectors";
import { LANGUAGES } from "redux/films/constants";

export const OddInfo = ({ other }) => {
    const language = useSelector(selectLanguage);
    return (
        <OddWrapper>
            <OptionTitle>{language === LANGUAGES.ENG
                ? 'View additional information'
                : 'Переглянути додаткову інформацію'}</OptionTitle>
            <OptionList>
                <Option to="cast"><VscAccount /> {language === LANGUAGES.ENG
                    ? 'Cast'
                    : 'Актори'}</Option>
                <Option to="reviews"><BiCommentDots /> {language === LANGUAGES.ENG
                    ? 'Reviews'
                    : 'Відгуки'}</Option>
                <Option to="trailer"><GoDeviceCameraVideo />{language === LANGUAGES.ENG
                    ? 'Trailer'
                    : 'Трейлер'}</Option>
                {other && <Option to={`parts/${other.id}`} ><AiOutlineApartment />{language === LANGUAGES.ENG
                    ? 'Other parts'
                    : 'Інші частини'}</Option>}
                <Option to="similar"><RiUserHeartLine />{language === LANGUAGES.ENG
                    ? 'You may also like'
                    : 'Схоже'}</Option>
            </OptionList>
        </OddWrapper>
    )
}
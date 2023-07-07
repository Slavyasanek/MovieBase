import { useDispatch, useSelector } from 'react-redux';
import { selectLanguage } from 'redux/films/selectors';
import { LanguageWrapper, StyledFlag } from './LanguageSwitcher.styled';
import { setLanguage } from 'redux/films/filmsSlice';
import { LANGUAGES } from 'redux/films/constants';

export const LanguageSwitcher = () => {
    const currentLanguage = useSelector(selectLanguage);
    const dispatch = useDispatch();

    const setUA = () => dispatch(setLanguage(LANGUAGES.UA));

    const setEng = () => dispatch(setLanguage(LANGUAGES.ENG));

    return (<LanguageWrapper>
        <StyledFlag country='UA'
            size={25}
            role='button'
            onClick={setUA}
            className={currentLanguage === LANGUAGES.UA && 'selected'} />
        <StyledFlag
            country='GB'
            size={25}
            role='button'
            onClick={setEng} 
            className={currentLanguage === LANGUAGES.ENG && 'selected'} />
    </LanguageWrapper>)
};

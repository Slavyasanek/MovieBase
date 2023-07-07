import { genresEng } from "constants/genresEng";
import { ButtonClose, FilterButton, FilterColumn, FilterContainer, FilterList, FilterTitle, Genre, MobileBackdrop, PopularButton } from "./Filters.styled";
import { useEffect, useState } from "react";
import { AiOutlineClose } from 'react-icons/ai';
import { AnimatePresence } from "framer-motion";
import { useMediaQuery } from "hooks/useMediaQuery";
import { useDispatch, useSelector } from "react-redux";
import { deleteAllGenres, toggleGenre } from "redux/films/filmsSlice";
import { selectGenres, selectLanguage } from "redux/films/selectors";
import { LANGUAGES } from "redux/films/constants";
import { genresUA } from "constants/genresUa";

const filterVariants = {
    initial: { x: '-100%' },
    isOn: { x: '0%' },
    exit: { x: '-100%' }
}

export const backdropVariants = {
    initial: { opacity: 0 },
    isOn: { opacity: 1 },
    exit: { opacity: 0 }
}

export const Filter = () => {
    const [isShow, setIsShow] = useState(false);
    const isNotDesktop = useMediaQuery("(max-width: 1199px)");

    const dispatch = useDispatch();
    const existingGenres = useSelector(selectGenres);
    const currentLanguage = useSelector(selectLanguage);
    const genres = currentLanguage === LANGUAGES.UA ? genresUA : genresEng;

    const handleOpen = () => {
        setIsShow(!isShow);
    };

    useEffect(() => {
        isShow === true && isNotDesktop === true && document.body.classList.add('lock');
        (isShow === false || isNotDesktop === false) && document.body.classList.remove('lock');
    }, [isShow, isNotDesktop])

    const addFilterGenre = e => {
        if (e.target.nodeName !== 'LI') return;
        const genre = e.target.dataset.filter;
        dispatch(toggleGenre(Number(genre)));
    }

    const getPopular = () => {
        dispatch(deleteAllGenres());
    }

    useEffect(() => {
        if (!isNotDesktop) {
            setIsShow(true);
        }
    }, [setIsShow, isNotDesktop])

    return (<FilterColumn>
        {isNotDesktop && <FilterButton onClick={handleOpen}>{currentLanguage === LANGUAGES.UA ? 'Фільтри': 'Filters'}</FilterButton>}
        <AnimatePresence>
            {isShow && <MobileBackdrop
                initial={"initial"}
                animate={"isOn"}
                exit={"exit"}
                variants={backdropVariants}
            >
                <FilterContainer
                    initial={"initial"}
                    animate={"isOn"}
                    exit={"exit"}
                    variants={filterVariants}
                >
                    {isNotDesktop && <ButtonClose onClick={handleOpen}><AiOutlineClose /></ButtonClose>}
                    <PopularButton onClick={getPopular}>
                        {currentLanguage === LANGUAGES.UA ? 'Сьогодні у тренді': 'Trending today'}</PopularButton>
                    <FilterTitle>{currentLanguage === LANGUAGES.UA ? 'Жанри': 'Genres'}</FilterTitle>
                    <FilterList onClick={addFilterGenre}>
                        {genres.map(genre =>
                            <Genre key={genre.id}
                                data-filter={genre.id}
                                className={existingGenres.includes(genre.id) && 'selected'}>
                                {genre.name}</Genre>)}
                    </FilterList>
                    <FilterTitle>{currentLanguage === LANGUAGES.UA ? 'Рік': 'Year'}</FilterTitle>
                </FilterContainer>
            </MobileBackdrop>}
        </AnimatePresence>
    </FilterColumn>)
};

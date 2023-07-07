import { HeaderWrapper, Logo, LogoTitle, HeaderFlex, Nav, Link, NavContainer, Features, MobileButton, Settings, SettingsOpen } from "./Header.styled";
import { Container } from "components/Container/Container.styled"
import { LanguageSwitcher } from "components/LanguageSwitcher/LanguageSwitcher";
import { MobileMenu } from "components/MobileMenu/MobileMenu";
import { SearchBar } from "components/SearchBar/SearchBar";
import { ThemeSwitcher } from "components/ThemeSwitcher/ThemeSwitcher";
import { AnimatePresence } from "framer-motion";
import { useMediaQuery } from "hooks/useMediaQuery";
import { useState } from "react";
import { BiMoviePlay } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi'
import { RxHamburgerMenu } from 'react-icons/rx';

const SettingAppearance = {
    initial: { opacity: 0 },
    isOn: { opacity: 1 },
    exit: { opacity: 0 }
}

export const Header = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const matches = useMediaQuery("(max-width: 767px)");
    const [isOpenSettings, setIsOpenSettings] = useState(false);
    const handleOpen = () => setIsOpenMenu(!isOpenMenu);
    const handleSettings = () => setIsOpenSettings(!isOpenSettings);

    return (
        <>
            <HeaderWrapper>
                <Container>
                    <HeaderFlex>
                        <NavContainer>
                            <Logo to="/">
                                <BiMoviePlay />
                                <LogoTitle>MovieBase</LogoTitle>
                            </Logo>
                            {matches && <MobileButton onClick={handleOpen} disabled={isOpenMenu ? true : false}><RxHamburgerMenu /></MobileButton>}
                            {!matches && <Nav>
                                <Link to="/">Home</Link>
                                <Link to="/movies">Popular</Link>
                                <Link to>Actors</Link>
                            </Nav>}
                        </NavContainer>
                        <Features>
                            <SearchBar />
                            {!matches && <SettingsOpen onClick={handleSettings}>
                                <FiSettings />
                            </SettingsOpen>}
                            <AnimatePresence>
                                {!matches && isOpenSettings &&
                                    <Settings
                                        initial={"initial"}
                                        animate={"isOn"}
                                        exit={"exit"}
                                        variants={SettingAppearance}>
                                        <ThemeSwitcher />
                                        <LanguageSwitcher />
                                    </Settings>}
                            </AnimatePresence>
                        </Features>
                    </HeaderFlex>
                </Container>
            </HeaderWrapper>
            <AnimatePresence>{isOpenMenu && <MobileMenu handleOpen={handleOpen} />}</AnimatePresence>
        </>
    )
}
import { HeaderWrapper, Logo, LogoTitle, HeaderFlex, Nav, Link, NavContainer, Features, MobileButton } from "./Header.styled";
import { Container } from "components/Container/Container.styled"
import { LanguageSwitcher } from "components/LanguageSwitcher/LanguageSwitcher";
import { MobileMenu } from "components/MobileMenu/MobileMenu";
import { SearchBar } from "components/SearchBar/SearchBar";
import { ThemeSwitcher } from "components/ThemeSwitcher/ThemeSwitcher";
import { useMediaQuery } from "hooks/useMediaQuery";
import { useState } from "react";
import { BiMoviePlay } from 'react-icons/bi';
// import { FiSettings } from 'react-icons/fi'
import { RxHamburgerMenu } from 'react-icons/rx';

export const Header = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const matches = useMediaQuery("(max-width: 767px)");
    const handleOpen = () => setIsOpenMenu(!isOpenMenu);

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
                            {/* {!matches && <FiSettings />} */}
                            {!matches && <ThemeSwitcher/>}
                            {!matches && <LanguageSwitcher/>}
                        </Features>
                    </HeaderFlex>
                </Container>
            </HeaderWrapper>
            {isOpenMenu && <MobileMenu handleOpen={handleOpen}/>}
        </>
    )
}
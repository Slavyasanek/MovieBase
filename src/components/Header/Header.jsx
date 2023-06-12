import { HeaderWrapper, Logo, LogoTitle, HeaderFlex, Nav, Link } from "./Header.styled";
import { Container } from "components/Container/Container.styled"
import { BiMoviePlay } from 'react-icons/bi';

export const Header = () => {
    return (
        <HeaderWrapper>
            <Container>
                <HeaderFlex>
                    <Logo to='/'>
                        <BiMoviePlay />
                        <LogoTitle>MovieBase</LogoTitle>
                    </Logo>
                    <Nav>
                        <Link to="/">Home</Link>
                        <Link to="/movies">Movies</Link>
                    </Nav>
                </HeaderFlex>
            </Container>
        </HeaderWrapper>
    )
}
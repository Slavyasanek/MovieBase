import { Link } from "components/Header/Header.styled"
import { CloseButton, Links, Menu } from "./MobileMenu.styled"
import { AiOutlineClose } from 'react-icons/ai';
import { ThemeSwitcher } from "components/ThemeSwitcher/ThemeSwitcher";
import { MobileBackdrop } from "components/Filters/Filters.styled";
import { backdropVariants } from "components/Filters/Filters";
import { useEffect } from "react";
import { LanguageSwitcher } from "components/LanguageSwitcher/LanguageSwitcher";

const menuAppearance = {
    initial: { x: '100%' },
    isOn: { x: '0%' },
    exit: { x: '100%' },
}

export const MobileMenu = ({ handleOpen }) => {
    useEffect(() => {
        document.body.classList.add('lock');
        return () => document.body.classList.remove('lock');
    }, []);


    return (<MobileBackdrop
            initial={"initial"}
            animate={"isOn"}
            exit={"exit"}
            variants={backdropVariants}>
            <Menu
                initial={"initial"}
                animate={"isOn"}
                exit={"exit"}
                variants={menuAppearance}
            >
                <CloseButton onClick={handleOpen}><AiOutlineClose /></CloseButton>
                <Links>
                    <Link to="/">Home</Link>
                    <Link>Popular</Link>
                    <Link to="/movies">Movies</Link>
                </Links>
                <ThemeSwitcher />
                <LanguageSwitcher/>
            </Menu>
        </MobileBackdrop>)
}

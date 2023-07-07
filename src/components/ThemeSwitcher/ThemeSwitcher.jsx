import { useEffect, useState } from "react";
import { SwitcherButton, SwitcherInput, SwitcherTrack } from "./ThemeSwitcher.styled";
import {BsSun, BsMoonStars} from 'react-icons/bs';
import { THEME, setTheme } from "redux/theme/slice";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme } from "redux/theme/selectors";

export const ThemeSwitcher = () => {
    const currentTheme = useSelector(selectTheme);
    const [checked, setChecked] = useState(currentTheme === THEME.LIGHT ? false : true);
    const dispatch = useDispatch();

    const handleCheck = () => {
        setChecked(!checked);
    }

    useEffect(() => {
        !checked ? dispatch(setTheme(THEME.LIGHT)) : dispatch(setTheme(THEME.DARK));
    }, [checked, dispatch])

    return (<SwitcherTrack>
        <SwitcherButton className={checked && 'checked'}>
            <SwitcherInput type="checkbox" checked={checked} onChange={handleCheck}/>
            {checked ? <BsMoonStars/> : <BsSun/>}
        </SwitcherButton>
    </SwitcherTrack>)
};

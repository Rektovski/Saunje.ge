import {useContext} from "react";
import ThemeContext from "../../context/ThemeContext";

export default function Footer(){
    const {theme} = useContext(ThemeContext);

    return (
        <div style={{height: '3.5vh'}} className={`text-center bg-${theme} text-${theme === 'dark' ? 'light' : 'dark'} rounded`}>
            All rights reserved 2022 - Saunje.ge
        </div>
    )
}
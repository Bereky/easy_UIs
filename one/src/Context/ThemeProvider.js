import { useContext, useState } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemeProvider = ({children}) => {
    const [ darkmode, setDarkMode ] = useState()

    const toggleDarkmode = () => {
        setDarkMode(!darkmode)
    }

    const themeCtx = {
        darkMode: darkmode,
        toggleDarkMode: toggleDarkmode
    }
    return ( 
            <ThemeContext.Provider value={themeCtx}>
                {children}
            </ThemeContext.Provider>
        );
}
 
export default ThemeProvider;
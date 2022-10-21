import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const HeroText = () => {
    const theme = useContext(ThemeContext)

    return ( 
        <div class={`mt-8 py-8 flex items-center justify-center flex-col ${theme.darkMode && 'text-darkModeText'}`}>
            <h1 class="font-bold text-sxlg text-center mx-4">Getting started with Blockchain</h1>
            <p class="text-lg text-center mx-4">A few resources to learn about blockchain and cryptocurrencies</p>
        </div>
     );
}
 
export default HeroText;
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import Cards from "./Cards";
import HeroText from "./HeroText";

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Content = () => {

    const theme = useContext(ThemeContext);

    return ( 
        <section class={`flex flex-col col-auto ${theme.darkMode && 'bg-darkModeBody'} `}>
            <HeroText />
            <Cards />
        </section>
     );
}
 
export default Content;
import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";

import AOS from 'aos';
import 'aos/dist/aos.css';

const HeroText = () => {
    const theme = useContext(ThemeContext)

    return ( 
        <div class={`mt-8 py-8 flex items-center justify-center flex-col ${theme.darkMode && 'text-darkModeText'}`} >
            <h1 class="font-bold text-sxlg text-center mx-4" data-aos="fade-up" data-aos-duration="1800">Getting started with Blockchain</h1>
            <div class="text-lg text-center mx-4" data-aos="fade-up" data-aos-duration="1300" data-aos-delay="500">A few resources to learn about blockchain and cryptocurrencies</div>
        </div>
     );
}
 
export default HeroText;
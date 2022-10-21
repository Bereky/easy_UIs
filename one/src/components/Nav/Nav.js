import moon from '../../asset/moon.svg';
import sun from '../../asset/sun.svg';

import { useContext, useState } from 'react'
import { ThemeContext } from '../Context/ThemeContext';

const Nav = () => {

    const [ darkTheme, setDarkTheme ] = useState(false)

    const theme = useContext(ThemeContext)

    const toggleTheme = () => {
        if(!darkTheme){
            setDarkTheme(true)
            theme.toggleDarkMode()
        }        
        else {
            setDarkTheme(false)
            theme.toggleDarkMode(false)
        }
    }

    return ( 
        <nav class={`relative h-20 flex justify-between flex-row shadow w-full ${theme.darkMode && 'bg-darkModeBody'} `}>
            <div class="flex flex-row h-full px-8 my-auto items-center">
                <svg class="h-12 fill-purpleParent"  version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 122.88 122.88" space="preserve"><g><path d="M72.05,8.26c7.28,1.44,14.03,4.34,19.94,8.38c4.09-2.53,9.53-2.02,13.08,1.53c3.57,3.57,4.07,9.06,1.48,13.17 c3.98,5.95,6.81,12.73,8.18,20.02c4.68,1.11,8.16,5.31,8.16,10.33c0,5.05-3.53,9.28-8.26,10.35c-1.44,7.28-4.34,14.03-8.38,19.94 c2.53,4.09,2.02,9.53-1.53,13.08c-3.57,3.57-9.06,4.07-13.17,1.48c-5.95,3.98-12.73,6.81-20.02,8.18 c-1.11,4.68-5.31,8.16-10.33,8.16c-5.05,0-9.28-3.53-10.35-8.26c-7.28-1.44-14.03-4.34-19.94-8.38c-4.09,2.53-9.53,2.01-13.08-1.53 c-3.57-3.57-4.07-9.06-1.48-13.17c-3.98-5.95-6.81-12.73-8.18-20.02C3.48,70.4,0,66.2,0,61.19c0-5.05,3.53-9.28,8.26-10.35 c1.44-7.28,4.34-14.03,8.38-19.94c-2.53-4.09-2.01-9.53,1.53-13.08c3.57-3.57,9.06-4.07,13.17-1.48 c5.95-3.98,12.73-6.81,20.02-8.18C52.47,3.48,56.68,0,61.69,0C66.75,0,70.98,3.53,72.05,8.26L72.05,8.26z M101.24,35.64 c-3.77,1.39-8.17,0.58-11.19-2.45c-3.05-3.05-3.86-7.5-2.41-11.29c-4.87-3.23-10.38-5.59-16.29-6.85 c-1.68,3.65-5.37,6.19-9.65,6.19c-4.32,0-8.04-2.58-9.69-6.28c-5.93,1.2-11.46,3.5-16.36,6.68c1.39,3.77,0.58,8.17-2.45,11.19 c-3.05,3.05-7.5,3.86-11.29,2.41c-3.23,4.87-5.59,10.38-6.85,16.29c3.65,1.68,6.19,5.37,6.19,9.65c0,4.32-2.58,8.04-6.28,9.69 c1.2,5.93,3.5,11.46,6.69,16.36c3.77-1.39,8.17-0.58,11.19,2.45c3.05,3.05,3.86,7.5,2.41,11.29c4.87,3.23,10.38,5.59,16.29,6.85 c1.68-3.65,5.37-6.19,9.65-6.19c4.32,0,8.04,2.58,9.69,6.28c5.93-1.2,11.46-3.5,16.36-6.69c-1.39-3.77-0.58-8.17,2.45-11.19 c3.05-3.05,7.5-3.86,11.29-2.41c3.23-4.87,5.59-10.38,6.85-16.29c-3.65-1.68-6.19-5.37-6.19-9.65c0-4.32,2.58-8.04,6.28-9.69 C106.73,46.07,104.43,40.54,101.24,35.64L101.24,35.64z M84.82,49.32l0.12,26.1c0.01,1.26-0.78,2.34-1.91,2.79l0,0.01l-20.9,8.45 c-0.38,0.15-0.78,0.23-1.19,0.23c-0.04,0-0.09-0.01-0.13,0c-0.18,0.02-0.36,0.05-0.54,0.05c-0.4,0-0.81-0.08-1.18-0.24l-19.26-8.1 l0-0.01c-1.11-0.47-1.89-1.58-1.89-2.87l0.11-25.8c-0.01-0.25,0-0.51,0.05-0.76c0.01-0.36,0.08-0.72,0.22-1.05 c0.32-0.78,0.95-1.36,1.69-1.66l0,0l20.11-8.09c0.82-0.33,1.7-0.29,2.45,0.03l20.07,7.26c1.2,0.43,1.96,1.51,2.01,2.68 C84.76,48.65,84.82,48.99,84.82,49.32L84.82,49.32z M57.64,81.67l0.15-23l-16.1-6.96L41.35,74.8L57.64,81.67L57.64,81.67z M81.38,51.71L63.4,58.67l0.14,22.98l17.95-6.71L81.38,51.71L81.38,51.71L81.38,51.71z"/></g></svg>           
                <p class={`px-1 font-extrabold text-lg ${theme.darkMode && 'text-darkModeText'}`}>Decentral</p>
            </div>
            <div class="flex flex-row items-center space-x-3 justify-end pr-10">
                {!darkTheme &&<img src={moon} alt="moon" class="h-8 cursor-pointer" onClick={toggleTheme}/>}
                {darkTheme && <img src={sun} alt="moon" class="h-8 cursor-pointer" onClick={toggleTheme}/>}
                <a href="https://github.com/Bereky" alt="github_link" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" class={`h-8 cursor-pointer fill-purpleParent ${theme.darkMode && 'fill-darkModeText'}`}  width="64" height="64" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 640 640"><path d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 8.516 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988l-.023.107z"/></svg>
                </a>
            </div>
        </nav>
     );
}
 
export default Nav;
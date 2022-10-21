import { useContext } from "react";
import Content from "../Content";
import { ThemeContext } from "../Context/ThemeContext";
import ThemeProvider from "../Context/ThemeProvider";
import Nav from "../Nav/Nav";

const App = () => {
    const theme = useContext(ThemeContext)

    return ( 
            <div className={`h-screen min-h-full ${theme.darkMode && 'bg-darkModeBody'}`}>
                <Nav />
                <Content />
            </div>
     );
}
 
export default App;
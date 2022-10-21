import Content from "../Content";
import ThemeProvider from "../Context/ThemeProvider";
import Nav from "../Nav/Nav";

const App = () => {
    return ( 
        <ThemeProvider>
            <Nav />
            <Content />
        </ThemeProvider>
     );
}
 
export default App;
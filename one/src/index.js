import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import ThemeProvider from './Context/ThemeProvider';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('_app'));
root.render(
    <ThemeProvider>
        <App />
    </ThemeProvider>
);
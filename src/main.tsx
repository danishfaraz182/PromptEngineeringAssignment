import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import { ThemeProvider } from './hooks/useTheme';
import './styles/index.css';

// HashRouter (not BrowserRouter) is used deliberately: it makes the site work
// correctly as a static deployment on GitHub Pages (or any static host with no
// server-side rewrite rules), since every route resolves client-side against
// a single index.html — no server configuration required. URLs look like
// https://you.github.io/dfiu/#/admissions instead of /admissions.
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </HashRouter>
  </React.StrictMode>,
);

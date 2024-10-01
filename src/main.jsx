import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/index.css';

import { BrowserRouter } from 'react-router-dom';
import Store from './store.js';

const store = new Store();

export const Context = createContext({
    store,
});

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Context.Provider value={{ store }}>
                <App />
            </Context.Provider>
        </BrowserRouter>
    </React.StrictMode>
);
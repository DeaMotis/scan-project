import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/index.css';

import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}> {/* Оборачиваем App в Provider */}
                <App />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);
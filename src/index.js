import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import App from './App';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error("Root element not found. Make sure there is an element with id 'root' in your index.html.");
}

const root = ReactDOM.createRoot(rootElement);


root.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    </React.StrictMode>
);

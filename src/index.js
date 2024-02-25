import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/scss/style.scss';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <link
            href="https://cdn.jsdelivr.net/npm/remixicon@4.1.0/fonts/remixicon.css"
            rel="stylesheet"
        />
        <App />
    </React.StrictMode>
);
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './components/App';

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("app");
const root = createRoot(rootElement as HTMLElement);

root.render(
    <StrictMode>
        <App />
    </StrictMode>
);
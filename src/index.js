import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import { BrowserRouter, Router } from "react-router-dom"
import App from "./App"

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, 
    document.getElementById('root') 
);


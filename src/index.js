import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import { BrowserRouter, Router } from "react-router-dom"
import App from "./App"

// imported BrowserRouter and surrounded
// the whole application with it
ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, 
    document.getElementById('root') 
);


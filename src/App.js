import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from "./NavBar"
import Home from "./Home"
import Info from "./Info"
import MountainList from "./MountainList"
import MountainCard from "./MountainCard"


// added routes to each component
function App() {
    return  (
        <div>
            <NavBar />
            <Route exact path = "/">
                <Home />
            </Route>
            <Route path = "/mountainlist">
                <MountainList />
            </Route>
            <Route path = "/info">
                <Info />
            </Route>
        </div>
    );
}

export default App

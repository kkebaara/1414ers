import React, {useState} from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from "./NavBar"
import Home from "./Home"
import Info from "./Info"
import MountainList from "./MountainList"
import MountainCard from "./MountainCard"
import Review from "./Review"


// added routes to each component
function App() {
    const [reviews, setReviews] = useState([]);

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
            <Route path = "/review">
                <Review reviews =  {reviews} setReviews = {setReviews}/>
            </Route>
        </div>
    );
}

export default App

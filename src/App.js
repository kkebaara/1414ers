import React, {useState} from "react";
import { Route } from "react-router-dom";
import NavBar from "./NavBar"
import Home from "./Home"
import Info from "./Info"
import MountainList from "./MountainList"
import Review from "./Review"

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

import React, { useState, useEffect } from "react"

const BASE_URL = "http://localhost:3000/reviews"

function Review({setReviews, reviews}) {

    const [nameInput, setNameInput] = useState("")
    const [mountainInput, setMountainInput] = useState("")
    const [descriptionInput, setDescriptionInput] = useState("")

    function handleSubmit(event){
        event.preventDefault();
        let newReview = {}
        newReview.name = nameInput;
        newReview.mountain = mountainInput;
        newReview.description = descriptionInput;
        postReview(newReview)
        setNameInput("")
        setMountainInput("")
        setDescriptionInput("")
    }

    function postReview(newReview){
        fetch(BASE_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newReview)
        })
        .then(r => r.json())
        .then(newReview=> updateReviews(newReview))
    }    

    useEffect(()=>{
        fetch(BASE_URL)
        .then(r=>r.json())
        .then(data=> setReviews(data))
    },[])
   
    function updateReviews(newReview){
        const updatedReviewArry = [...reviews, newReview]
        setReviews(updatedReviewArry)
    }
    
    const renderReviews = reviews.map(review => (
        <li>
            <p>Name: {review.name}</p>
            <p>Mountain: {review.mountain}</p>
            <p>Review: {review.description}</p>
        </li>
    ))

    return (
        <div>
            <form onSubmit = {handleSubmit}>
                <input
                    id="review-name"
                    type="text"
                    name="name"
                    placeholder="name..."
                    value={nameInput}
                    onChange={e=> setNameInput(e.target.value)}
                />
                <select id="review-mountains" onChange={e=> setMountainInput(e.target.value)}>
                    <option value="Select">Select</option>
                    <option value="Mount Bierstadt">Mount Bierstadt</option>
                    <option value="Torreys Peak">Torreys Peak</option>
                    <option value="Mount Sherman">Mount Sherman</option>
                    <option value="Mount Bross">Mount Bross</option>
                    <option value="Grays Peak">Grays Peak</option>
                    <option value="Mount Elbert">Mount Elbert</option>
                    <option value="Quandary Peak">Quandary Peak</option>
                    <option value="Mount Democrat">Mount Democrat</option>
                    <option value="Mount Massive">Mount Massive</option>
                    <option value="Mount Belford">Mount Belford</option>
                    <option value="Pikes Peak">Pikes Peak</option>
                    <option value="Longs Peak">Longs Peak</option>
                    <option value="Mount Evans">Mount Evans</option>
                    <option value="Mount Lincoln">Mount Lincoln</option>
                </select>

                <input
                    id="review-description"
                    type="text"
                    name="description"
                    placeholder="review..."
                    value={descriptionInput}
                    onChange={e=> setDescriptionInput(e.target.value)}
                />
                <button>Review!</button>
            </form>
            <ul className = "reviews">
            {renderReviews}
            </ul>
        </div>
    )
}

export default Review;
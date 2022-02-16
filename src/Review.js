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
                <input
                    id="review-mountain"
                    type="text"
                    name="mountain"
                    placeholder="mountain..."
                    value={mountainInput}
                    onChange={e=> setMountainInput(e.target.value)}
                />
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
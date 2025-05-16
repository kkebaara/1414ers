import React, { useState, useEffect } from 'react';
import './Review.css';

const BASE_URL = 'http://localhost:3000/reviews';

function Review({ setReviews, reviews }) {
	const [nameInput, setNameInput] = useState('');
	const [mountainInput, setMountainInput] = useState('');
	const [descriptionInput, setDescriptionInput] = useState('');
	const [rating, setRating] = useState(5);
	const [error, setError] = useState('');
	const [success, setSuccess] = useState('');

	function handleSubmit(event) {
		event.preventDefault();
		setError('');
		setSuccess('');

		// Validation
		if (!nameInput.trim()) {
			setError('Please enter your name');
			return;
		}
		if (mountainInput === 'Select') {
			setError('Please select a mountain');
			return;
		}
		if (!descriptionInput.trim()) {
			setError('Please enter a review');
			return;
		}

		const newReview = {
			name: nameInput,
			mountain: mountainInput,
			description: descriptionInput,
			rating: rating,
			date: new Date().toLocaleDateString()
		};

		postReview(newReview);
		setNameInput('');
		setMountainInput('Select');
		setDescriptionInput('');
		setRating(5);
		setSuccess('Review submitted successfully!');
	}

	function postReview(newReview) {
		fetch(BASE_URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newReview),
		})
			.then((r) => r.json())
			.then((newReview) => {
				updateReviews(newReview);
				setSuccess('Review submitted successfully!');
			})
			.catch(error => {
				setError('Failed to submit review. Please try again.');
			});
	}

	useEffect(() => {
		fetch(BASE_URL)
			.then((r) => r.json())
			.then((data) => setReviews(data))
			.catch(error => {
				setError('Failed to load reviews. Please refresh the page.');
			});
	}, []);

	function updateReviews(newReview) {
		const updatedReviewArray = [...reviews, newReview];
		setReviews(updatedReviewArray);
	}

	const renderReviews = reviews.map((review) => (
		<div key={review.id} className="review-card">
			<div className="review-header">
				<h3>{review.mountain}</h3>
				<div className="rating">
					{'★'.repeat(review.rating || 5)}
					{'☆'.repeat(5 - (review.rating || 5))}
				</div>
			</div>
			<p className="review-description">{review.description}</p>
			<div className="review-footer">
				<span className="reviewer">By: {review.name}</span>
				<span className="review-date">{review.date}</span>
			</div>
		</div>
	));

	return (
		<div className="review-section">
			<h2>Share Your Experience</h2>
			{error && <div className="error-message">{error}</div>}
			{success && <div className="success-message">{success}</div>}
			
			<form onSubmit={handleSubmit} className="review-form">
				<div className="form-group">
					<label htmlFor="review-name">Your Name:</label>
					<input
						id="review-name"
						type="text"
						name="name"
						placeholder="Enter your name..."
						value={nameInput}
						onChange={(e) => setNameInput(e.target.value)}
					/>
				</div>

				<div className="form-group">
					<label htmlFor="review-mountains">Select Mountain:</label>
					<select
						id="review-mountains"
						value={mountainInput}
						onChange={(e) => setMountainInput(e.target.value)}
					>
						<option value="Select">Select a mountain...</option>
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
				</div>

				<div className="form-group">
					<label>Rating:</label>
					<div className="rating-input">
						{[1, 2, 3, 4, 5].map((star) => (
							<span
								key={star}
								className="star"
								onClick={() => setRating(star)}
								style={{ color: star <= rating ? '#ffd700' : '#ccc' }}
							>
								★
							</span>
						))}
					</div>
				</div>

				<div className="form-group">
					<label htmlFor="review-description">Your Review:</label>
					<textarea
						id="review-description"
						name="description"
						placeholder="Share your experience..."
						value={descriptionInput}
						onChange={(e) => setDescriptionInput(e.target.value)}
						rows="4"
					/>
				</div>

				<button type="submit" className="submit-button">Submit Review</button>
			</form>

			<div className="reviews-container">
				<h2>Recent Reviews</h2>
				<div className="reviews-grid">
					{renderReviews}
				</div>
			</div>
		</div>
	);
}

export default Review;

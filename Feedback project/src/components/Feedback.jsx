  import React, { useState } from "react";
  import "./feedback.css";

  const Feedback = () => {
    const [review, setReview] = useState([]);
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [rating, setRating] = useState("");

    const handlesubmit = (e) => {
      e.preventDefault();

      if (!name || !message || !rating) {
        alert("Please fill all fields");
        return;
      }

      const newReview = {
        id: review.length + 1,
        name,
        message,
        rating,
      };

      setReview([...review, newReview]);

      setName("");
      setMessage("");
      setRating("");
    };

    return (
      <div className="review-container">

        <h1 className="title">Product Review</h1>

        <form onSubmit={handlesubmit} className="review-form">

          <div className="form-group">
            <label>Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Your Review</label>
            <textarea
              placeholder="Write your review..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          <div className="form-group">
            <label>Rating</label>
            <select
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            >
              <option value="">Select rating</option>
              <option value="⭐">⭐</option>
              <option value="⭐⭐">⭐⭐</option>
              <option value="⭐⭐⭐">⭐⭐⭐</option>
              <option value="⭐⭐⭐⭐">⭐⭐⭐⭐</option>
              <option value="⭐⭐⭐⭐⭐">⭐⭐⭐⭐⭐</option>
            </select>
          </div>

          <button type="submit" className="submit-btn">
            Submit Review
          </button>
        </form>

        {review.length === 0 ? (
          <h2 className="no-review">No Reviews Yet</h2>
        ) : (
          <div className="review-list">
            {review.map((item) => (
              <div className="review-card" key={item.id}>
                <h3>{item.name}</h3>
                <span>{item.rating}</span>
                <p>{item.message}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  export default Feedback;
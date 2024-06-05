import React, { useState, useContext } from 'react';
import ReviewsContext from '../context/ReviewsContext';

const ReviewForm = ({ dishId, closeModal }) => {
  const { addReview } = useContext(ReviewsContext);
  const [name, setName] = useState('');
  const [rating, setRating] = useState(1);
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addReview(dishId, { name, rating, comment });
    setName('');
    setRating(1);
    setComment('');
    closeModal();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Leave a Review</h2>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Rating:</label>
        <select value={rating} onChange={(e) => setRating(e.target.value)} required>
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>{num}</option>
          ))}
        </select>
      </div>
     
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewForm;

import React, { useContext } from 'react';
import ReviewsContext from '../context/ReviewsContext';
import Star from '../images/star.svg'

const ReviewsList = ({ dishId }) => {
  const { reviews } = useContext(ReviewsContext);
  const dishReviews = reviews[dishId] || [];

  let averageRating = 0;
  if (dishReviews.length > 0) {
    const totalRating = dishReviews.reduce((sum, review) => {
      const ratingValue = parseFloat(review.rating);
      return sum + ratingValue;
    }, 0);
    averageRating = totalRating / dishReviews.length;
  }

  return (
    <div>
        <strong>Average Rating: {averageRating.toFixed(1)} <img width={15} src={Star} alt="Star" /></strong>
    </div>
  );
};

export default ReviewsList;

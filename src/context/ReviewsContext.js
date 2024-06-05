import React, { createContext, useState } from 'react';

const ReviewsContext = createContext();

export const ReviewsProvider = ({ children }) => {
  const [reviews, setReviews] = useState({});

  const addReview = (dishId, review) => {
    setReviews((prevReviews) => ({
      ...prevReviews,
      [dishId]: [...(prevReviews[dishId] || []), review],
    }));
  };

  return (
    <ReviewsContext.Provider value={{ reviews, addReview }}>
      {children}
    </ReviewsContext.Provider>
  );
};

export default ReviewsContext;

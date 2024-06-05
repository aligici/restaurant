import React, { useState } from 'react';
import Modal from './Modal';
import OrderForm from './OrderForm';
import ReviewForm from './ReviewForm';
import ReviewsList from './ReviewsList';
import './MenuCategory.css';

const MenuCategory = ({ category }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [reviewingItem, setReviewingItem] = useState(null);

  return (
    <div className="menu-category">
      <h2>{category.category}</h2>
      <ul className="menu-items">
        {category.items.map((item, index) => (
          <li key={index} className="menu-item">
            <img src={item.imageUrl} alt={item.name} className="menu-item-image" />
            <div className="menu-item-details">
              <h3>{item.name}</h3>
              <p>{item.price}</p>
              <div className="menu-item-buttons">
                <button onClick={() => setSelectedItem(item)}>Order</button>
                <button onClick={() => setReviewingItem(item)}>Review</button>
              </div>
              <ReviewsList dishId={item.name} />
            </div>
          </li>
        ))}
      </ul>
      <Modal isOpen={!!selectedItem} onClose={() => setSelectedItem(null)}>
        {selectedItem && (
          <OrderForm item={selectedItem} closeModal={() => setSelectedItem(null)} />
        )}
      </Modal>
      <Modal isOpen={!!reviewingItem} onClose={() => setReviewingItem(null)}>
        {reviewingItem && (
          <ReviewForm dishId={reviewingItem.name} closeModal={() => setReviewingItem(null)} />
        )}
      </Modal>
    </div>
  );
};

export default MenuCategory;

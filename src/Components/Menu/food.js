import React from 'react';
import { Link } from 'react-router-dom';

const FoodList = ({ foodData, onDelete, onEdit }) => {
  const handleEdit = (foodItem) => {
    onEdit(foodItem);
  };

  return (
    <div className="food-list">
      <ul>
        {foodData.map((foodItem) => (
          <li key={foodItem.Product_ID}>
            <h3>{foodItem.Product_Name}</h3>
            <div className="food-image">
              <img src={foodItem.Product_Image} alt={foodItem.Product_Name} />
            </div>
            <p>{foodItem.Product_Description}</p>
            <span>Price: ${foodItem.Product_Price}</span>
            <div className="buttons">
              <button onClick={() => onDelete(foodItem.Product_ID)}>Delete</button>
              <button onClick={() => handleEdit(foodItem)}>Edit</button>
            </div>
          </li>
        ))}
      </ul>
      <Link to="/add-food" className="add-food-button">
        <h1 style={{ color: 'black' }}>Add Food Details ➕</h1>
      </Link>
    </div>
  );
};

export default FoodList;

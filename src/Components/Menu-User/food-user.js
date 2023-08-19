import React from 'react';

const Food = ({ foodData }) => {
  return (
    <div className="food-list">
      <ul>
        {foodData.map((foodItem) => (
          <li key={foodItem.id}>
            <h3>{foodItem.name}</h3>
            <div className="food-image">
              <img src={foodItem.Image} alt={foodItem.name} />
            </div>
            <p>{foodItem.description}</p>
            <span>Price: ${foodItem.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Food;

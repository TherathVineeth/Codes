import React, { useState, useEffect } from 'react';
import Food from './food-user'; // Import the FoodList component
import './menu-user.css'; // Import your CSS if needed

const MenuPage = () => {
  const [foodData, setFoodData] = useState([]);

  useEffect(() => {
    // Fetch food data from API here and update the state
    // For demonstration, let's assume foodData is an array of objects
    const fetchedFoodData = [
      { id: 1, name: 'Burger', description: 'Delicious burger with cheese and veggies.', price: 10.99,Image:'https://www.pixelstalk.net/wp-content/uploads/2016/08/Desktop-Food-HD-Wallpapers-Free-Download.jpg' },
      { id: 2, name: 'Pizza', description: 'Classic pepperoni pizza.', price: 12.99,Image:'https://www.pixelstalk.net/wp-content/uploads/2016/08/Desktop-Food-HD-Wallpapers-Free-Download.jpg' },
      { id: 3, name: 'Burger', description: 'Delicious burger with cheese and veggies.', price: 10.99,Image:'https://www.pixelstalk.net/wp-content/uploads/2016/08/Desktop-Food-HD-Wallpapers-Free-Download.jpg' },
      { id: 4, name: 'Pizza', description: 'Classic pepperoni pizza.', price: 12.99,Image:'https://www.pixelstalk.net/wp-content/uploads/2016/08/Desktop-Food-HD-Wallpapers-Free-Download.jpg' },
      { id: 5, name: 'Burger', description: 'Delicious burger with cheese and veggies.', price: 10.99,Image:'https://www.pixelstalk.net/wp-content/uploads/2016/08/Desktop-Food-HD-Wallpapers-Free-Download.jpg' },
      { id: 6, name: 'Pizza', description: 'Classic pepperoni pizza.', price: 12.99,Image:'https://www.pixelstalk.net/wp-content/uploads/2016/08/Desktop-Food-HD-Wallpapers-Free-Download.jpg' },
      { id: 7, name: 'Burger', description: 'Delicious burger with cheese and veggies.', price: 10.99,Image:'https://www.pixelstalk.net/wp-content/uploads/2016/08/Desktop-Food-HD-Wallpapers-Free-Download.jpg' },
      { id: 8, name: 'Pizza', description: 'Classic pepperoni pizza.', price: 12.99,Image:'https://www.pixelstalk.net/wp-content/uploads/2016/08/Desktop-Food-HD-Wallpapers-Free-Download.jpg' },
    
    
    
      // ... more food items
    ];
    
    setFoodData(fetchedFoodData);
  }, []);

  return (
    <div className="menu-page">
    <div className="food-list">
      {foodData.map((foodItem) => (
        <div className="food-card" key={foodItem.id}>
          <h3>{foodItem.name}</h3>
          <div className="food-image">
              <img src={foodItem.Image} alt={foodItem.name} />
            </div>
          <p>{foodItem.description}</p>
          <span>Price: ${foodItem.price}</span>
        </div>
      ))}
    </div>
  </div>
  );
};

export default MenuPage;

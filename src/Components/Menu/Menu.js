import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './menu.css';

const MenuPage = () => {
  const [foodData, setFoodData] = useState([]);
   
  const getApiData = async () => {
    try {
      const response = await fetch(
        "https://localhost:44384/api/Menu"
      ).then((response) => response.json()).then(data =>{
        setFoodData(data);
        console.log(data);

      })
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  const handleEdit = async (foodItemId, updatedData) => {
    console.log('Editing food item:', foodItemId);
    try {
      const response = await fetch(`https://localhost:44384/api/Menu/${foodItemId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });
      const editedData = await response.json();
  
      const updatedFoodData = foodData.map((foodItem) =>
        foodItem.Product_ID === foodItemId ? editedData : foodItem
      );
      setFoodData(updatedFoodData);
    } catch (error) {
      console.error('Error editing food data:', error);
    }
  };
  
  const handleDelete = async (foodItemId) => {
    console.log('Deleting food item:', foodItemId);

    try {
      await fetch(`https://localhost:44384/api/Menu/${foodItemId}`, {
        method: 'DELETE',
      });
  
      const updatedFoodData = foodData.filter(
        (foodItem) => foodItem.Product_ID !== foodItemId
      );
      setFoodData(updatedFoodData);
    } catch (error) {
      console.error('Error deleting food data:', error);
    }
  };
  
  
  return (
    <div className="menu-page">
      <div className="food-list">
        {foodData.map((user) => (
          <div className="food-card" key={user.Product_ID}>
            <h1>{user.product_Name}</h1>
          
          {/* <h1>{user.product_ID}</h1> */}
          <p>Category: {user.product_Category}</p>
          <p>Rating: {user.product_Rating}</p>
          <p>Price: {user.product_Price}</p>
          <p>Quantity: {user.product_Quantity}</p>
          <p>Image :{user.pr}</p>
        {/* <div classuserName="food-image">
              <img src={user.Product_Image} alt={user.Product_Price} />
            </div>
            <p>{user.Product_Image}</p> */}
          
           
          <div className="buttons">
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => handleEdit(user.Product_ID, user)} // Pass the correct arguments
      >
        Edit
      </button>
      <button
  type="button"
  className="btn btn-danger"
  onClick={() => handleDelete(user.Product_ID)}
>
  Delete
</button>

    </div>
          </div>
        ))}
        <Link to="/add-food" className="add-food-button">
          <h1 style={{ color: 'black' }}>Add Food Details ➕</h1>
        </Link>
      </div>
    </div>
  );
};

export default MenuPage;

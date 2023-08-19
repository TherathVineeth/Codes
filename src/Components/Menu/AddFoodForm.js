import React, { useState } from 'react';
import './AddFoodForm.css';

const AddFoodForm = ({ onAddFood }) => {
  const [newFoodData, setNewFoodData] = useState({
    Product_Name: '',
    Product_Description: '',
    Product_Category: '',
    Product_Rating: 0,
    Product_Price: 0,
    Product_Quantity: 0,
    Product_Image: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewFoodData({
      ...newFoodData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Call the onAddFood prop function to add the new food data
   // onAddFood(newFoodData);

    // Clear the form fields after submission
    setNewFoodData({
      Product_Name: '',
      Product_Description: '',
      Product_Category: '',
      Product_Rating: 0,
      Product_Price: 0,
      Product_Quantity: 0,
      Product_Image: '',
    });
  };

  const handleAddFood = () => {
    fetch('https://localhost:44384/api/Menu', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFoodData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Log the response data, which should include the newly added food data
        console.log('New food data added:', data);
      })
      .catch((error) => {
        // Here you can handle any error actions if needed
        console.error('Error adding food data:', error);
      });
  };

  return (
    <div className="add-food-form">
      <h2>Add Food</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="Product_Name">Name</label>
          <input
            type="text"
            id="Product_Name"
            name="Product_Name"
            value={newFoodData.Product_Name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="Product_Description">Description</label>
          <textarea
            id="Product_Description"
            name="Product_Description"
            value={newFoodData.Product_Description}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="Product_Category">Category</label>
          <input
            type="text"
            id="Product_Category"
            name="Product_Category"
            value={newFoodData.Product_Category}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="Product_Rating">Rating</label>
          <input
            type="number"
            id="Product_Rating"
            name="Product_Rating"
            value={newFoodData.Product_Rating}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="Product_Price">Price</label>
          <input
            type="number"
            id="Product_Price"
            name="Product_Price"
            value={newFoodData.Product_Price}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="Product_Quantity">Quantity</label>
          <input
            type="number"
            id="Product_Quantity"
            name="Product_Quantity"
            value={newFoodData.Product_Quantity}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="Product_Image">Image URL</label>
          <input
            type="text"
            id="Product_Image"
            name="Product_Image"
            value={newFoodData.Product_Image}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" onClick={handleAddFood}>Add Food</button>
      </form>
    </div>
  );
};

export default AddFoodForm;

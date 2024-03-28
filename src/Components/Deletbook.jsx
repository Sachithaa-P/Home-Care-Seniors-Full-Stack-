import { useState } from 'react';
import axios from 'axios';
import './Deletebook.css';

const App = () => {
  const [formData, setFormData] = useState({
    username: '', // Assuming the input is for username
    serviceName: '',
    serviceProvider: '',
    description: '',
    charges: '',
    timing: '',
  });

  const [isDeleted, setIsDeleted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSearch = async () => {
    try {
      // Retrieve token from local storage
      const token = localStorage.getItem('token');
      console.log('Token:', token);

      // Make sure token is available
      if (!token) {
        console.error('Token not found. Please log in again.');
        return;
      }

      // Send a DELETE request to delete the booking by username
      await axios.delete(`http://localhost:8080/booking/${formData.username}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      console.log('Booking deleted successfully');
      setIsDeleted(true); // Set deletion status to true
    } catch (error) {
      console.error('Error deleting booking:', error);
    }
  };

  return (
    <div className="bg-container">
      <div className='overlay'></div>

      <div className="form-container">
        <h2>DELETE BOOKING FORM</h2>

        {/* Search Input */}
        <div className="search">
          <input
            type="text"
            placeholder="Enter User Name"
            onChange={handleChange}
            value={formData.username}
            name="username" // Assuming the input is for username
            className="search-input"
          />
          {!isDeleted ? (
            <button type="button" className='delete-button' onClick={handleSearch}>
              Delete
            </button>
          ) : (
            <button type="button" className='delete-button' disabled>
              Deleted
            </button>
          )}
        </div>

      </div>
    </div>
  );
};

export default App;

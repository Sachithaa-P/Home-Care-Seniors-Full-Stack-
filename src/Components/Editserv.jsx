import { useState, useEffect } from 'react';
import axios from 'axios';
import './Editserv.css';

const Postserv = () => {
  const [formData, setFormData] = useState({
    name: '',
    provider: '',
    description: '',
    charges: '',
    timing: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check for empty fields
    for (const key in formData) {
      if (!formData[key]) {
        console.error(`Field '${key}' cannot be empty.`);
        // Handle the empty field, e.g., display an error message
        return;
      }
    }

    try {
      // Retrieve token from local storage
      const token = localStorage.getItem('token');
      console.log('Token:', token);

      // Make sure token is available
      if (!token) {
        console.error('Token not found. Please log in again.');
        return;
      }

      // Send a PUT request to update the service by name
      await axios.put(`http://localhost:8080/services/${formData.name}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      console.log('Service updated successfully');
      setIsSubmitted(true); // Set edit status to true

    } catch (error) {
      console.error('Error updating service:', error);
    }
  };

  useEffect(() => {
    if (formData.name) {
      const fetchData = async () => {
        try {
          // Retrieve token from local storage
          const token = localStorage.getItem('token');
          console.log('Token:', token);

          // Make sure token is available
          if (!token) {
            console.error('Token not found. Please log in again.');
            return;
          }

          // Send a GET request to fetch service details by name
          const response = await axios.get(`http://localhost:8080/services/${formData.name}`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });

          // Populate form fields with retrieved data
          setFormData(prevData => ({
            ...prevData,
            provider: response.data.provider,
            description: response.data.description,
            charges: response.data.charges,
            timing: response.data.timing
          }));

          console.log('Service details retrieved successfully:', response.data);
        } catch (error) {
          console.error('Error fetching service details:', error);
        }
      };

      fetchData();
    }
  }, [formData.name]);

  return (
    <div className="background">
      <div className='overlay8'></div>
      <div className="booking-form">
        <h2>EDIT SERVICE FORM</h2>
        <form onSubmit={handleSubmit}>
          {/* New fields for service */}
          <label htmlFor="name">Service Name</label>
          <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required />

          <label htmlFor="provider">Service Provider</label>
          <input type="text" name="provider" id="provider" value={formData.provider} onChange={handleChange} required />

          <label htmlFor="description">Service Description</label>
          <textarea name="description" id="description" value={formData.description} onChange={handleChange} required />

          <label htmlFor="charges">Charges</label>
          <input type="number" name="charges" id="charges" value={formData.charges} onChange={handleChange} required />

          <label htmlFor="timing">Timing</label>
          <input type="text" name="timing" id="timing" value={formData.timing} onChange={handleChange} required />

          {/* Conditional rendering of the button based on submission status */}
          {isSubmitted ? (
            <button type="button" disabled>Edited</button>
          ) : (
            <button type="submit">Edit Service</button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Postserv;

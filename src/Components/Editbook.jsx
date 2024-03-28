import { useState } from 'react';
import axios from 'axios';
import './Postserv.css';

const Postserv = () => {
  const [formData, setFormData] = useState({
    username: '',
    age: '',
    email: '',
    mobile: '',
    serviceName: '',
    paymentMethod: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Fetch user data when the username field changes
    if (name === 'username') {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`http://localhost:8080/booking/${value}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        const userData = response.data;
        setFormData((prevData) => ({
          ...prevData,
          age: userData.age,
          email: userData.email,
          mobile: userData.mobile,
          serviceName: userData.serviceName,
          paymentMethod: userData.paymentMethod,
        }));
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('Token not found. Please log in again.');
        return;
      }

      const response = await axios.put(`http://localhost:8080/booking/${formData.username}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      console.log('Booking updated successfully:', response.data);

      setFormData({
        username: '',
        age: '',
        email: '',
        mobile: '',
        serviceName: '',
        paymentMethod: '',
      });

      setIsSubmitted(true);
    } catch (error) {
      console.error('Form submission failed:', error);
    }
  };

  return (
    <div className="background">
      <div className='overlay8'></div>
      <div className="booking-form">
        <h2>EDIT BOOKING FORM</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">User Name</label>
          <input type="text" name="username" id="username" value={formData.username} onChange={handleChange} required />

          <label htmlFor="age">Age</label>
          <input type="number" name="age" id="age" value={formData.age} onChange={handleChange} required />

          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required />

          <label htmlFor="mobile">Mobile Number</label>
          <input type="text" name="mobile" id="mobile" value={formData.mobile} onChange={handleChange} required />

          <label htmlFor="serviceName">Service Name</label>
          <select name="serviceName" id="serviceName" value={formData.serviceName} onChange={handleChange} required>
            <option value="">Select a service</option>
            <option value="Medical Care">Medical Care</option>
            <option value="Emotional Support">Emotional Support</option>
            <option value="Physical Therapy">Physical Therapy</option>
            <option value="Care Coordination">Care Coordination</option>
            <option value="Home Safety">Home Safety</option>
            <option value="Daily Assistance">Daily Assistance</option>
            <option value="Technology Integration">Technology Integration</option>
            <option value="Nutritional Guidance">Nutritional Guidance</option>
            <option value="Specialized Program">Specialized Program</option>
            <option value="Rehabilitation Services">Rehabilitation Services</option>
          </select>

          <label htmlFor="paymentMethod">Payment Method</label>
          <select name="paymentMethod" id="paymentMethod" value={formData.paymentMethod} onChange={handleChange} required>
            <option value="">Select a payment method</option>
            <option value="Credit Card">Credit Card</option>
            <option value="Cash">Cash</option>
            <option value="GPay">GPay</option>
            <option value="PhonePe">PhonePe</option>
            <option value="Amazon Pay">Amazon Pay</option>
            <option value="Other UPI">Other UPI</option>
          </select>

          {/* Conditional rendering of the button based on submission status */}
          {isSubmitted ? (
            <button type="button" disabled>Edited</button>
          ) : (
            <button type="submit">Edit Booking</button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Postserv;

// import { useState } from 'react';
// import './Postserv.css';

// const App = () => {
//   const [formData, setFormData] = useState({
//     userName: '',
//     userAge: '',
//     userEmail: '',
//     userMobileNumber: '',
//     serviceName: '',
//     paymentMethod: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log('Form submitted!', formData);
//     // Add logic to handle the form data, e.g., send it to a backend server
//   };

//   const handleAddService = () => {
//     // Add logic to handle adding a service, e.g., push the service data to an array
//     console.log('Service added!', formData);
//   };

//   return (
//     <div className="background">
//       <div className='overlay8'></div>

//       <div className="booking-form">
//         <h2>SERVICE BOOKING FORM</h2>
//         <form onSubmit={handleSubmit}>

//           <label htmlFor="userName">User Name</label>
//           <input type="text" name="userName" id="userName" onChange={handleChange} required />

//           <label htmlFor="userAge">User Age</label>
//           <input type="number" name="userAge" id="userAge" onChange={handleChange} required />

//           <label htmlFor="userEmail">User Email</label>
//           <input type="email" name="userEmail" id="userEmail" onChange={handleChange} required />

//           <label htmlFor="userMobileNumber">User Mobile Number</label>
//           <input type="text" name="userMobileNumber" id="userMobileNumber" onChange={handleChange} required />

//           <label htmlFor="serviceName">Service Name</label>
//           <select name="serviceName" id="serviceName" onChange={handleChange} required style={{ fontSize: '16px', marginTop: '8px' }}>
//           <option value="" disabled selected>Select a service</option>
//             <option value="medical care">Medical Care</option>
//             <option value="emotional support">Emotional Support</option>
//             <option value="physical therapy">Physical Therapy</option>
//             <option value="care coordination">Care Coordination</option>
//             <option value="home safety">Home Safety</option>
//             <option value="daily assistance">Daily Assistance</option>
//             <option value="technology integration">Technology Integration</option>
//             <option value="nutritional guidance">Nutritional Guidance</option>
//             <option value="specialized program">Specialized Program</option>
//             <option value="rehabilitation services">Rehabilitation Services</option>
//           </select>
//           <label htmlFor="paymentMethod">Payment Method</label>
//           <select name="paymentMethod" id="paymentMethod" onChange={handleChange} required style={{ fontSize: '16px', marginTop: '8px' }}>
//           <option value="" disabled selected>Select a payment mode</option>
//             <option value="credit_card">Credit Card</option>
//             <option value="cash">Cash</option>
//             <option value="gpay">GPay</option>
//             <option value="phonepe">PhonePe</option>
//             <option value="amazon_pay">Amazon Pay</option>
//             <option value="other_upi">Other UPI</option>
//           </select>

//           <br></br>
//         <button  className="but" type="button" onClick={handleAddService}>Book Service</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default App;
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
      console.log('Token:', token); // Log the token to verify its value

      // Make sure token is available
      if (!token) {
        console.error('Token not found. Please log in again.');
        // Handle the absence of token, e.g., redirect to login page
        return;
      }

      const response = await axios.post('http://localhost:8080/booking', formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log('Form submitted!', response.data);
      // Handle the response data as needed, e.g., show a success message

      // Clear form data after submission
      setFormData({
        username: '',
        age: '',
        email: '',
        mobile: '',
        serviceName: '',
        paymentMethod: '',
      });

      // Set submission status to true
      setIsSubmitted(true);
    } catch (error) {
      console.error('Form submission failed:', error);
      // Handle the error, e.g., show an error message
    }
  };

  return (
    <div className="background">
      <div className='overlay8'></div>
      <div className="booking-form">
        <h2>BOOK SERVICE FORM</h2>
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
          <select name="serviceName" id="serviceName" onChange={handleChange} required>
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
          <select name="paymentMethod" id="paymentMethod" onChange={handleChange} required>
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
            <button type="button" disabled>Booked</button>
          ) : (
            <button type="submit">Book Service</button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Postserv;

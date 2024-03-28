// // src/App.jsx
// import { useState } from 'react';
// import './Postserv.css';

// const App = () => {
//   const [formData, setFormData] = useState({
//     serviceName: '',
//     serviceProvider: '',
//     description: '',
//     charges: '',
//     timing: '',
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
//         <h2>ADD SERVICE FORM</h2>
//         <form onSubmit={handleSubmit}>
//           {/* New fields for service */}
//           <label htmlFor="serviceName">Service Name</label>
//           <input type="text" name="serviceName" id="serviceName" onChange={handleChange} required />

//           <label htmlFor="serviceProvider">Service Provider</label>
//           <input type="text" name="serviceProvider" id="serviceProvider" onChange={handleChange} required />

//           <label htmlFor="description">Service Description</label>
//           <textarea name="description" id="description" onChange={handleChange} required />

//           <label htmlFor="charges">Charges</label>
//           <input type="number" name="charges" id="charges" onChange={handleChange} required />

//           <label htmlFor="timing">Timing</label>
//           <input type="text" name="timing" id="timing" onChange={handleChange} required />
//         </form>

//         <button type="button" onClick={handleAddService}>Add Service</button>
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
      const token = localStorage.getItem('token');
      console.log('Token:', token); // Log the token to verify its value

      // Make sure token is available
      if (!token) {
        console.error('Token not found. Please log in again.');
        // Handle the absence of token, e.g., redirect to login page
        return;
      }

      const response = await axios.post('http://localhost:8080/services', formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log('Form submitted!', response.data);
      // Handle the response data as needed, e.g., show a success message

      // Clear form data after submission
      setFormData({
        name: '',
        provider: '',
        description: '',
        charges: '',
        timing: '',
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
        <h2>ADD SERVICE FORM</h2>
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
            <button type="button" disabled>Added</button>
          ) : (
            <button type="submit">Add Service</button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Postserv;


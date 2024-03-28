// import './Viewserv.css';

// function View() {
//   return (
//     <div className="background">
//       <div className='overlay8'></div>

//       <div className="booking-form">
//         <h2>VIEW SERVICE FORM</h2>
//         <div className="table-container">
//           <div className="table-row form-title">
//           <div className="header-cell">Service ID</div>
//             <div className="header-cell">Service Name</div>
//             <div className="header-cell">Service Provider</div>
//             <div className="header-cell">Description</div>
//             <div className="header-cell">Charges</div>
//             <div className="header-cell">Timing</div>
//           </div>
          
//         </div>
//       </div>
//     </div>
//   );
// }

// export default View;
import { useState, useEffect } from 'react';
import axios from 'axios';
import './Viewserv.css';

function View() {
  const [serviceData, setServiceData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  const fetchData = async () => {
    try {
      const token = localStorage.getItem('token');
      console.log('Token:',token);
      // Make sure token is available
      if (!token) {
        console.error('Token not found. Please log in again.');
        // Handle the absence of token, e.g., redirect to login page
        return;
      }

      const response = await axios.get('http://localhost:8080/services', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log('Data fetched:', response.data);
      setServiceData(response.data); // Set the fetched data to the state
    } catch (error) {
      console.error('Failed to fetch data:', error);
      // Handle the error, e.g., show an error message
    }
  };

  return (
    <div className="background">
      <div className='overlay8'></div>

      <div className="booking-form">
        <h2>VIEW SERVICE FORM</h2>
        <div className="table-container">
          <div className="table-row form-title">
            <div className="header-cell">Service ID</div>
            <div className="header-cell">Service Name</div>
            <div className="header-cell">Service Provider</div>
            <div className="header-cell">Description</div>
            <div className="header-cell">Charges</div>
            <div className="header-cell">Timing</div>
          </div>
          {serviceData.map(service => (
            <div key={service.id} className="table-row">
              <div className="cell">{service.id}</div>
              <div className="cell">{service.name}</div>
              <div className="cell">{service.provider}</div>
              <div className="cell">{service.description}</div>
              <div className="cell">{service.charges}</div>
              <div className="cell">{service.timing}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default View;

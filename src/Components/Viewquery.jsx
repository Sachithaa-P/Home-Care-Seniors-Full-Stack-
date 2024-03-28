// import './Viewserv.css';

// function View() {
//   return (
//     <div className="background">
//       <div className='overlay8'></div>

//       <div className="booking-form">
//         <h2>VIEW SERVICE FORM</h2>
//         <div className="table-container">
//           <div className="table-row form-title">
//             <div className="header-cell">User ID</div>
//             <div className="header-cell">User Name</div>
//             <div className="header-cell">Query</div>
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
  const [feedbackData, setFeedbackData] = useState([]);

  useEffect(() => {
    fetchFeedbackData();
  }, []); // Fetch feedback data once when the component mounts

  const fetchFeedbackData = async () => {
    try {
      const token = localStorage.getItem('token'); // Retrieve token from localStorage
      console.log('Token:', token);

      const response = await axios.get('http://localhost:8080/feedback', {
        headers: {
          Authorization: `Bearer ${token}`, // Include token in the request headers
        },
      });
      
      console.log('Feedback data:', response.data);
      setFeedbackData(response.data); // Update state with feedback data
    } catch (error) {
      console.error('Error fetching feedback data:', error);
    }
  };

  return (
    <div className="background">
      <div className='overlay8'></div>

      <div className="booking-form">
        <h2>VIEW QUERY FORM</h2>
        <div className="table-container">
          <div className="table-row form-title">
            <div className="header-cell">User ID</div>
            <div className="header-cell">User Name</div>
            <div className="header-cell">Query</div>
          </div>
          
          {/* Render each feedback entry in the table */}
          {feedbackData.map((feedback) => (
            <div className="table-row" key={feedback.id}>
              <div className="data-cell">{feedback.id}</div>
              <div className="data-cell">{feedback.username}</div>
              <div className="data-cell">{feedback.query}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default View;


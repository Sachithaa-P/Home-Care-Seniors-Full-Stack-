// import './Viewserv.css';

// function View() {
//   return (
//     <div className="background">
//       <div className='overlay8'></div>

//       <div className="booking-form">
//         <h2>VIEW BOOKING FORM</h2>
//         <div className="table-container">
//           <div className="table-row form-title">
//             <div className="header-cell">Booking ID</div>
//             {/* <div className="header-cell">User ID</div> */}
//             <div className="header-cell">User Name</div>
//             <div className="header-cell">User Age</div>
//             <div className="header-cell">User Email</div>
//             <div className="header-cell">User Mobile Number</div>
//             <div className="header-cell">Service Name</div>
//             <div className="header-cell">Payment Method</div>
//             {/* <div className="header-cell">Booking Status</div> */}
//           </div>
          
//         </div>
//       </div>
//     </div>
//   );
// }

// export default View;
import { useEffect, useState } from 'react';
import axios from 'axios';
import './Viewbook.css';

function View() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        // Retrieve the token from localStorage
        const token = localStorage.getItem('token');
        console.log('Token:', token);

        // Make sure token is available
        if (!token) {
          console.error('Token not found. Please log in again.');
          // Handle the absence of token, e.g., redirect to login page
          return;
        }

        // Include the token in the headers of the GET request
        const response = await axios.get('http://localhost:8080/booking', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // Display the bookings data in the console
        console.log('Bookings:', response.data);
        setBookings(response.data);
      } catch (error) {
        console.error('Error fetching bookings:', error);
        // Handle error, e.g., show an error message
      }
    };

    fetchBookings();
  }, []); // Empty dependency array to ensure useEffect runs only once

  return (
    <div className="background">
      <div className='overlay8'></div>

      <div className="booking-form">
        <h2>VIEW BOOKING FORM</h2>
        <div className="table-container">
          <div className="table-row form-title">
            <div className="header-cell">Booking ID</div>
            <div className="header-cell">User Name</div>
            <div className="header-cell">User Age</div>
            <div className="header-cell">User Email</div>
            <div className="header-cell">User Mobile Number</div>
            <div className="header-cell">Service Name</div>
            <div className="header-cell">Payment Method</div>
          </div>
          {/* Render booking data */}
          {bookings.map(booking => (
            <div className="table-row" key={booking.id}>
              <div className="data-cell">{booking.id}</div>
              <div className="data-cell">{booking.username}</div>
              <div className="data-cell">{booking.age}</div>
              <div className="data-cell">{booking.email}</div>
              <div className="data-cell">{booking.mobile}</div>
              <div className="data-cell">{booking.serviceName}</div>
              <div className="data-cell">{booking.paymentMethod}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default View;

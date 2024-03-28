// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import QRCode from 'qrcode';
// import './Viewbook.css';

// function View() {
//   const [bookings, setBookings] = useState([]);
//   const [selectedBookings, setSelectedBookings] = useState([]);
//   const [totalAmount, setTotalAmount] = useState(0);

//   useEffect(() => {
//     const fetchBookings = async () => {
//       try {
//         // Retrieve the token from localStorage
//         const token = localStorage.getItem('token');
//         console.log('Token:', token);

//         // Make sure token is available
//         if (!token) {
//           console.error('Token not found. Please log in again.');
//           // Handle the absence of token, e.g., redirect to login page
//           return;
//         }

//         // Include the token in the headers of the GET request
//         const response = await axios.get('http://localhost:8080/booking', {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         // Display the bookings data in the console
//         console.log('Bookings:', response.data);
//         setBookings(response.data);
//       } catch (error) {
//         console.error('Error fetching bookings:', error);
//         // Handle error, e.g., show an error message
//       }
//     };

//     fetchBookings();
//   }, []); // Empty dependency array to ensure useEffect runs only once

//   useEffect(() => {
//     // Generate QR code image when total amount changes
//     generateQRCode(totalAmount);
//   }, [totalAmount]);

//   const handleCheckboxChange = (bookingId, serviceName) => {
//     // Check if bookingId is already in selectedBookings
//     if (selectedBookings.includes(bookingId)) {
//       // Deselect the booking
//       setSelectedBookings(selectedBookings.filter(id => id !== bookingId));
//       // Calculate the rate to decrease the amount
//       const rate = getRate(serviceName);
//       // Decrease the total amount by the rate
//       setTotalAmount(prevAmount => prevAmount - rate);
//     } else {
//       // Select the booking
//       setSelectedBookings([...selectedBookings, bookingId]);
//       // Generate a random rate between 500 and 2500
//       const rate = getRate(serviceName);
//       // Increase the total amount by the rate
//       setTotalAmount(prevAmount => prevAmount + rate);
//     }
//   };

//   const getRate = (serviceName) => {
//     // Adjust this function based on your actual rates for different services
//     switch (serviceName) {
//       case 'Emotional Support':
//         return 2000;
//       case 'Physical Therapy':
//         return 1500;
//       case 'Care Coordination':
//         return 1800;
//       case 'Home Safety':
//         return 3000;
//       case 'Daily Assistance':
//         return 2000;
//       case 'Technology Integration':
//         return 5000;
//       case 'Nutritional Guidance':
//         return 1600;
//       case 'Specialized Program':
//         return 2000;
//       case 'Rehabilitation Services':
//         return 2500;
//       default:
//         return 1000; // Default rate
//     }
//   };

//   const generateQRCode = async (amount) => {
//     try {
//       // Generate QR code with the amount
//       const qrCodeImage = await QRCode.toDataURL(`Amount: ₹ ${amount} `);
//       // Display QR code image below the table
//       document.getElementById('qrCode').src = qrCodeImage;
//     } catch (error) {
//       console.error('Error generating QR code:', error);
//     }
//   };

//   return (
//     <div className="background">
//       <div className='overlay8'></div>

//       <div className="booking-form">
//         <h2>MAKE PAYMENT FORM</h2>
//         <div className="table-container">
//           <div className="table-row form-title">
//             <div className="header-cell">Booking ID</div>
//             <div className="header-cell">User Name</div>
//             <div className="header-cell">User Age</div>
//             <div className="header-cell">User Email</div>
//             <div className="header-cell">User Mobile Number</div>
//             <div className="header-cell">Service Name</div>
//             <div className="header-cell">Payment Method</div>
//             <div className="header-cell">Select</div> {/* Add Select column */}
//           </div>
//           {/* Render booking data */}
//           {bookings.map(booking => (
//             <div className="table-row" key={booking.id}>
//               <div className="data-cell">{booking.id}</div>
//               <div className="data-cell">{booking.username}</div>
//               <div className="data-cell">{booking.age}</div>
//               <div className="data-cell">{booking.email}</div>
//               <div className="data-cell">{booking.mobile}</div>
//               <div className="data-cell">{booking.serviceName}</div>
//               <div className="data-cell">{booking.paymentMethod}</div>
//               <div className="data-cell">
//                 <input
//                   type="checkbox"
//                   onChange={() => handleCheckboxChange(booking.id, booking.serviceName)}
//                   checked={selectedBookings.includes(booking.id)}
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//         <div style={{ color: 'black' }}>
//           Total Amount: ₹ {totalAmount} 
//         </div>
//         {/* Display QR code image */}
//         <div>
//           <img id="qrCode" alt="QR Code" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default View;

import gif from './Source/gif.gif'; 
import { useEffect, useState } from 'react';
import axios from 'axios';
import QRCode from 'qrcode';
import './Viewbook.css';

function View() {
  const [bookings, setBookings] = useState([]);
  const [selectedBookings, setSelectedBookings] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          console.error('Token not found. Please log in again.');
          return;
        }

        const response = await axios.get('http://localhost:8080/booking', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log('Bookings:', response.data);
        setBookings(response.data);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };

    fetchBookings();
  }, []);

  useEffect(() => {
    generateQRCode(totalAmount);
  }, [totalAmount]);

  const handleCheckboxChange = (bookingId, serviceName) => {
    if (selectedBookings.includes(bookingId)) {
      setSelectedBookings(selectedBookings.filter(id => id !== bookingId));
      const rate = getRate(serviceName);
      setTotalAmount(prevAmount => prevAmount - rate);
    } else {
      setSelectedBookings([...selectedBookings, bookingId]);
      const rate = getRate(serviceName);
      setTotalAmount(prevAmount => prevAmount + rate);
    }
  };

  const getRate = (serviceName) => {
    switch (serviceName) {
      case 'Emotional Support':
        return 2000;
      case 'Physical Therapy':
        return 1500;
      case 'Care Coordination':
        return 1800;
      case 'Home Safety':
        return 3000;
      case 'Daily Assistance':
        return 2000;
      case 'Technology Integration':
        return 5000;
      case 'Nutritional Guidance':
        return 1600;
      case 'Specialized Program':
        return 2000;
      case 'Rehabilitation Services':
        return 2500;
      default:
        return 1000;
    }
  };

  const generateQRCode = async (amount) => {
    try {
      const qrCodeImage = await QRCode.toDataURL(`Amount: ₹ ${amount} `);
      document.getElementById('qrCode').src = qrCodeImage;
    } catch (error) {
      console.error('Error generating QR code:', error);
    }
  };

  return (
    <div className="background">
      <div className='overlay8'></div>

      <div className="booking-form">
        <h2>MAKE PAYMENT FORM</h2>
        <div className="table-container">
          <div className="table-row form-title">
            <div className="header-cell">Booking ID</div>
            <div className="header-cell">User Name</div>
            <div className="header-cell">User Age</div>
            <div className="header-cell">User Email</div>
            <div className="header-cell">User Mobile Number</div>
            <div className="header-cell">Service Name</div>
            <div className="header-cell">Payment Method</div>
            <div className="header-cell">Select</div>
          </div>
          {bookings.map(booking => (
            <div className="table-row" key={booking.id}>
              <div className="data-cell">{booking.id}</div>
              <div className="data-cell">{booking.username}</div>
              <div className="data-cell">{booking.age}</div>
              <div className="data-cell">{booking.email}</div>
              <div className="data-cell">{booking.mobile}</div>
              <div className="data-cell">{booking.serviceName}</div>
              <div className="data-cell">{booking.paymentMethod}</div>
              <div className="data-cell">
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange(booking.id, booking.serviceName)}
                  checked={selectedBookings.includes(booking.id)}
                />
              </div>
            </div>
          ))}
        </div>
        <div style={{ color: 'black' }}>
          Total Amount: ₹ {totalAmount} 
        </div>
        <div>
        <a href={gif} target="_blank" rel="noreferrer" >
            <img  id="qrCode" alt="QR Code" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default View;

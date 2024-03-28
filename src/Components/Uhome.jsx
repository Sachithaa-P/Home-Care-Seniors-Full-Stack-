// import './Ahome.css'
// import { Link } from "react-router-dom";
// import '@fortawesome/fontawesome-free/css/all.min.css'; 
// import logo from './Source/logo.png'; 
// import img1 from './Source/FAQ.png';
// import img2 from './Source/Policy.png';
// import img3 from './Source/Terms.png';
// import Chat from './Chat';
// function Front() {
//   return (
//     <div>
//       <header>
//     <h2><img src={logo} alt='Logo' className='elogo' /></h2>
//     <nav >
//       <li><a  className="list" href="#home">Home</a></li>
//       <li><a className="list" href="#gallery">Services</a></li>
//       <li><a className="list" href="#providers">Providers</a></li>
//       <li><a className="list" href="#about">About</a></li>
//       <li><a className="list" href="#feed">Testimonials</a></li>
//       <li><a className="list" href="#contact">Contact</a></li>
//       <li><a href='./calender'className="list">Calender</a></li>
//       <li><a href='./Login'className="list">Logout</a></li>

//     </nav>
//   </header>
//   <div id="home"> 
//   <section className="hero">
//   <div className='overlay4'></div>
//     <div className="background-image"></div>
//     <div className="hero-content-area">
//       <h1>Empowering Aging Gracefully: Your Home, Your Health, Our Care</h1>
//       <h3>Tailored Home Care Solutions for Every Senior Journey</h3>
//       <p className='heading'>SERVICES</p>
//       <Link to="/viewserv"><a  className="btn">VIEW SERVICES</a></Link>   
//       <Link to="/bookserv"><a  className="btn">BOOK SERVICES</a></Link>
//       <br></br>
//       <p className='heading1'>BOOKINGS</p>
//       <Link to="/viewbook"><a  className="btn">VIEW BOOKINGS </a></Link>
//       <Link to="/editbook"><a  className="btn">EDIT BOOKING</a></Link>
//       <Link to="/deletebook"><a  className="btn">DELETE BOOKING</a></Link>
//     </div>
//   </section>
// </div>
// <div id="gallery">
//   <section className="destinations">
//     <h3 className="title">Our Services</h3>
//     <p>At the intersection of technology and compassion, we bring you a suite of home care services for seniors, ensuring they receive specialized attention, maintain dignity, and age with grace in the place they cherish the most – their home sweet home</p>
//     <hr/>
//     <br></br>

//     <ul className="grid">
//       <li className="small image-1"><div className="text-block">
//       <Link
//   to={{
//     pathname: "/bookserv",
//     state: { serviceName: "Medical Care" }
//   }}
//   style={{ color: 'white' }} 
// >
// <h4>Medical Care</h4>
//     <p> - Regular Health Checkups</p>
//    <p>- Medication Management</p>
//    <p>- Chronic Disease Monitoring</p></Link>
//   </div></li>
//       <li className="large image-2"><div className="text-block">
//       <Link
//   to={{
//     pathname: "/bookserv",
//     state: { serviceName: "Emotional Support" }
//   }}
//   style={{ color: 'white' }} 
// >
//     <h4>Emotional Support</h4>
//     <p> - Companionship</p>
//    <p> - Mental Health Counseling</p>
//    <p>- Social Engagement Activities</p></Link>  </div></li>
//       <li className="large image-3"><div className="text-block">
//       <Link
//   to={{
//     pathname: "/bookserv",
//     state: { serviceName: "Physical Therapy" }
//   }}
//   style={{ color: 'white' }} 
// >    
//     <h4>Physical Therapy</h4>
//     <p>- Targeted Exercise Programs</p>
//    <p>- Pain Management Techniques</p>
//    <p>- Functional Improvement</p> </Link> </div></li>
//       <li className="small image-4"><div className="text-block">
//       <Link
//   to={{
//     pathname: "/bookserv",
//     state: { serviceName: "Care Coordination" }
//   }}
//   style={{ color: 'white' }} 
// >    
//       <h4>Care Coordination</h4>
//     <p> - Appointment Scheduling</p>
//    <p>- Communication with Healthcare Providers</p>
//    <p>- Service Coordination</p></Link>
//     </div></li>
//       <li className="small image-5"><div className="text-block">
//       <Link
//   to={{
//     pathname: "/bookserv",
//     state: { serviceName: "Home Safety" }
//   }}
//   style={{ color: 'white' }} 
// >   
//     <h4>Home Safety</h4>
//     <p>- Fall Prevention Measures</p>
//    <p>- Home Environment Assessment</p>
//    <p>- Emergency Response Systems</p>  </Link></div></li>
//       <li className="large image-6"><div className="text-block">
//       <Link
//   to={{
//     pathname: "/bookserv",
//     state: { serviceName: "Daily Assistance" }
//   }}
//   style={{ color: 'white' }} 
// >   
//       <h4>Daily Assistance</h4>
//     <p>- Meal Preparation</p>
//    <p>- Personal Hygiene Assistance</p>
//    <p>- Mobility Support</p>  </Link></div></li>
//       <li className="large image-7"><div className="text-block">
//       <Link
//   to={{
//     pathname: "/bookserv",
//     state: { serviceName: "Technology Integration" }
//   }}
//   style={{ color: 'white' }} 
// >   
//     <h4>Technology Integration</h4>
//     <p> - Telehealth Services</p>
//    <p>- Remote Health Monitoring</p>
//    <p>- Digital Communication Platforms</p> </Link> </div></li>
//       <li className="small image-8"><div className="text-block">
//       <Link
//   to={{
//     pathname: "/bookserv",
//     state: { serviceName: "Nutritional Guidance" }
//   }}
//   style={{ color: 'white' }} 
// > 
//     <h4>Nutritional Guidance</h4>
//     <p> - Dietary Planning</p>
//    <p>- Nutrition Education</p>
//    <p>- Meal Planning for Health Conditions</p> </Link> </div></li>
//       <li className="large image-9"><div className="text-block">
//       <Link
//   to={{
//     pathname: "/bookserv",
//     state: { serviceName: "Specialized Programs" }
//   }}
//   style={{ color: 'white' }} 
// > 
//     <h4>Specialized Programs</h4>
//     <p> - Memory Care Programs</p>
//    <p>- Palliative Care</p>
//    <p>- End-of-Life Care</p> </Link> </div></li>
//       <li className="small image-10"><div className="text-block">
//       <Link
//   to={{
//     pathname: "/bookserv",
//     state: { serviceName: "Rehabilitation Services" }
//   }}
//   style={{ color: 'white' }} 
// >
//     <h4>Rehabilitation Services</h4>
//     <p> - Physical Therapy</p>
//    <p>- Occupational Therapy</p>
//    <p>- Speech Therapy</p></Link>  </div></li>

//     </ul>
//   </section>
//   </div>
//   <div id="providers">
//   <section className="destinations">
//     <h3 className="title1">Our Providers</h3>
//     <p>Discover a dedicated team of qualified caregivers, including registered nurses, certified nursing assistants, therapists, and companions, ready to provide personalized and compassionate home care services for seniors</p>
//     <hr/>
// <br></br>
//     <ul className="grid">
//       <li className="small image-11">
//         <div className="text-block">
//     <h4>Registered Nurses</h4>
//   </div>
//   </li>
//       <li className="small image-12"><div className="text-block">
//     <h4>Home Health Aides</h4>
//   </div></li>
//       <li className="small image-13"><div className="text-block">
//     <h4>Physical Therapists</h4>
//   </div></li>
//       <li className="small image-14"><div className="text-block">
//     <h4>Companionship Services</h4>
//   </div></li>
//       <li className="small image-15"><div className="text-block">
//     <h4>Medical Social Workers</h4>
//   </div></li>
//       <li className="small image-16"><div className="text-block">
//     <h4>Specialized Care Providers</h4>
//   </div></li>

//     </ul>
//   </section>
//   </div>
//   <div id="about">
//   <section className="packages">
//     <h3 className="title3">About Us</h3>
//     <p>Elevating senior living with compassionate care, ElderlyEasy provides a comprehensive range of services designed to enhance well-being and foster a supportive community for our cherished seniors</p>
//     <hr/>

//     <ul className="grid">
//       <li>
//         <i className="fas fa-compass fa-4x"></i>
//         <h4>User-Friendly Interface</h4>
//         <p>Our app boasts an intuitive and easy-to-navigate interface, ensuring seniors and their caregivers can effortlessly access and utilize the platform</p>
//       </li>
//       <li>
//         <i className="fas fa-camera-retro fa-4x"></i>
//         <h4>Diverse Service Catalog</h4>
//         <p>Offering a diverse service catalog ranging from medical assistance and home nursing to companionship and daily chores, ensuring seniors can tailor their care plans to meet their unique needs and preferences.</p>
//       </li>
//       <li className='next'>
//       <i className="fas fa-solid fa-heart fa-4x"></i>
//               <h4>Care Provider Matching</h4>
//         <p>Utilize advanced algorithms to match seniors with qualified and compatible healthcare providers, ensuring personalized and effective care based on individual needs</p>
//       </li>
//       <li className='next'>
//       <i className="fas fa-solid fa-clock-rotate-left fa-4x"></i> 
//               <h4>24/7 Support</h4>
//         <p>Providing round-the-clock support to seniors and their caregivers, offering assistance and guidance whenever needed for a seamless and reassuring experience</p>
//       </li>
//       <li className='next'>
//         <i className="fas fa-lock fa-4x"></i>
//         <h4>Secure Data Management</h4>
//         <p>Prioritize the confidentiality and security of sensitive health data, implementing robust measures to safeguard personal information and medical records</p>
//       </li>
//       <li className='next'>
//       <i className="fas fa-calendar-alt fa-4x"></i>  
//             <h4>Seamless Appointment Scheduling</h4>
//         <p>With our seamless appointment scheduling, seniors and caregivers can effortlessly book and manage appointments with healthcare providers, ensuring timely and convenient access to essential services</p>
//       </li>
//     </ul>
//   </section>
// </div>
// <div id="feed" className='test'>
//   <section className="testimonials">
//     <h3 className="title">Testimonials</h3>
//     <hr/>
//     <p className="quote">The app has been a game-changer for my family. The ease of scheduling appointments and the quick response from support make it a reliable companion for our elderly loved ones</p>
//     <p className="author">- Mary Jane</p>
//     <p className="quote">Navigating through the app is intuitive, and the diverse range of services meets all our healthcare needs. The 24/7 support adds an extra layer of reassurance, making it a standout choice for senior care</p>
//     <p className="author">- Sharon Rejoice</p>
//     <p className="quote">I appreciate the user-friendly interface and the attention to detail in service coordination. The app has truly simplified the process of managing healthcare for our aging family members</p>
//     <p className="author">- Luis Paul</p>
//     <p className="quote">The diverse service catalog ensures that we can find the right support for our unique requirements. It is a comprehensive solution that brings peace of mind to both seniors and caregivers</p>
//     <p className="author">- Alesh Jones</p>
//     <p className="quote">Elderly Easy provides a seamless experience for seniors. The app features, especially the appointment scheduling and real-time communication, have significantly improved our ability to care for our elderly family members</p>
//     <p className="author">- Philip Mathews</p>
//   </section>
//   </div>
//   <div id="contact" className='con'>
//   <section className="contact">
//     <h3 className="title">Contact Us</h3>
//     <p>Got questions or feedback? Reach out to us anytime! Stay updated on the latest features and events by subscribing to our newsletter. No unnecessary emails—only the ones that keep you informed and energized. Join us on this journey of caring for your loved ones</p>
//     <hr/>
//     <form>
//     <input type="text" placeholder="Enter your name"/>
//       <input type="text" placeholder="Enter your query"/>
//       <a  href='./uhome'className="btn">Send</a>
//     </form>
//   </section>
//   <Chat></Chat>
//   <footer>
//         <div className="footer">
//           <div className="row">
//           <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
//           <a href="https://www.facebook.com/" target="blank" className="custom-icon fa fa-facebook "></a>
// <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Flogin%3Flang%3Den" target="blank" className="custom-icon fa fa-twitter"></a>
// <a href="https://www.google.com/" target="blank" className="custom-icon fa fa-google "></a>
// <a href="https://www.linkedin.com/" target="blank" className="custom-icon fa fa-linkedin "></a>
// <a href="https://www.youtube.com/" target="blank" className="custom-icon fa fa-youtube "></a>
// <a href="https://www.instagram.com/" target="blank" className="custom-icon fa fa-instagram "></a>
     
//           </div>

//           <div className="row">
//             <ul>
//               <li><a href={img2} target="blank">Privacy Policy</a></li>
//               <li><a href={img3} target="blank">Terms & Conditions</a></li>
//               <li><a href={img1} target="blank">FAQ</a></li>
//             </ul>
//           </div>

//           <div className="row">
//             Elderly Ease Copyright © 2024 ALMITHA DENCY -
//             All rights reserved || Designed By: ALCY
//           </div>
//         </div>
//       </footer>
//   </div>
//     </div>
//   )
// }

// export default Front


import { useState } from 'react';
import axios from 'axios';
import './Ahome.css';
import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import logo from './Source/logo.png'; 
import img1 from './Source/FAQ.png';
import img2 from './Source/Policy.png';
import img3 from './Source/Terms.png';
import Chat from './Chat';

function Front() {
  const [formData, setFormData] = useState({
    username: '',
    query: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      console.log('Token:', token);
      // Send feedback data to backend
      const response = await axios.post('http://localhost:8080/feedback', formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      console.log('Feedback sent:', response.data);
      // Reset form data after submission
      setFormData({
        username: '',
        query: ''
      });
      // Optionally, show a success message to the user
    } catch (error) {
      console.error('Error sending feedback:', error);
      // Optionally, show an error message to the user
    }
  };
  // Function to get the bearer token from local storage and display it in the console

  return (
    <div>
      <header>
    <h2><img src={logo} alt='Logo' className='elogo' /></h2>
    <nav >
      <li><a  className="list" href="#home">Home</a></li>
      <li><a className="list" href="#gallery">Services</a></li>
      <li><a className="list" href="#providers">Providers</a></li>
      <li><a className="list" href="#about">About</a></li>
      <li><a className="list" href="#feed">Testimonials</a></li>
      <li><a className="list" href="#contact">Contact</a></li>
      <li><a href='./calender'className="list">Calender</a></li>
      <li><a href='./Login'className="list">Logout</a></li>

    </nav>
  </header>
  <div id="home"> 
  <section className="hero">
  <div className='overlay4'></div>
    <div className="background-image"></div>
    <div className="hero-content-area">
      <h1>Empowering Aging Gracefully: Your Home, Your Health, Our Care</h1>
      <h3>Tailored Home Care Solutions for Every Senior Journey</h3>
      <p className='heading'>SERVICES</p>
      <Link to="/viewserv"><a  className="btn">VIEW SERVICES</a></Link>   
      <Link to="/bookserv"><a  className="btn">BOOK SERVICES</a></Link>
      <br></br>
      <p className='heading1'>BOOKINGS</p>
      <Link to="/viewbook"><a  className="btn">VIEW BOOKINGS </a></Link>
      <Link to="/editbook"><a  className="btn">EDIT BOOKING</a></Link>
      <Link to="/deletebook"><a  className="btn">DELETE BOOKING</a></Link>
      <Link to="/payment"><a  className="btn">MAKE PAYMENT</a></Link>

    </div>
  </section>
</div>
<div id="gallery">
  <section className="destinations">
    <h3 className="title">Our Services</h3>
    <p>At the intersection of technology and compassion, we bring you a suite of home care services for seniors, ensuring they receive specialized attention, maintain dignity, and age with grace in the place they cherish the most – their home sweet home</p>
    <hr/>
    <br></br>

    <ul className="grid">
      <li className="small image-1"><div className="text-block">
      <Link
  to={{
    pathname: "/bookserv",
    state: { serviceName: "Medical Care" }
  }}
  style={{ color: 'white' }} 
>
<h4>Medical Care</h4>
    <p> - Regular Health Checkups</p>
   <p>- Medication Management</p>
   <p>- Chronic Disease Monitoring</p></Link>
  </div></li>
      <li className="large image-2"><div className="text-block">
      <Link
  to={{
    pathname: "/bookserv",
    state: { serviceName: "Emotional Support" }
  }}
  style={{ color: 'white' }} 
>
    <h4>Emotional Support</h4>
    <p> - Companionship</p>
   <p> - Mental Health Counseling</p>
   <p>- Social Engagement Activities</p></Link>  </div></li>
      <li className="large image-3"><div className="text-block">
      <Link
  to={{
    pathname: "/bookserv",
    state: { serviceName: "Physical Therapy" }
  }}
  style={{ color: 'white' }} 
>    
    <h4>Physical Therapy</h4>
    <p>- Targeted Exercise Programs</p>
   <p>- Pain Management Techniques</p>
   <p>- Functional Improvement</p> </Link> </div></li>
      <li className="small image-4"><div className="text-block">
      <Link
  to={{
    pathname: "/bookserv",
    state: { serviceName: "Care Coordination" }
  }}
  style={{ color: 'white' }} 
>    
      <h4>Care Coordination</h4>
    <p> - Appointment Scheduling</p>
   <p>- Communication with Healthcare Providers</p>
   <p>- Service Coordination</p></Link>
    </div></li>
      <li className="small image-5"><div className="text-block">
      <Link
  to={{
    pathname: "/bookserv",
    state: { serviceName: "Home Safety" }
  }}
  style={{ color: 'white' }} 
>   
    <h4>Home Safety</h4>
    <p>- Fall Prevention Measures</p>
   <p>- Home Environment Assessment</p>
   <p>- Emergency Response Systems</p>  </Link></div></li>
      <li className="large image-6"><div className="text-block">
      <Link
  to={{
    pathname: "/bookserv",
    state: { serviceName: "Daily Assistance" }
  }}
  style={{ color: 'white' }} 
>   
      <h4>Daily Assistance</h4>
    <p>- Meal Preparation</p>
   <p>- Personal Hygiene Assistance</p>
   <p>- Mobility Support</p>  </Link></div></li>
      <li className="large image-7"><div className="text-block">
      <Link
  to={{
    pathname: "/bookserv",
    state: { serviceName: "Technology Integration" }
  }}
  style={{ color: 'white' }} 
>   
    <h4>Technology Integration</h4>
    <p> - Telehealth Services</p>
   <p>- Remote Health Monitoring</p>
   <p>- Digital Communication Platforms</p> </Link> </div></li>
      <li className="small image-8"><div className="text-block">
      <Link
  to={{
    pathname: "/bookserv",
    state: { serviceName: "Nutritional Guidance" }
  }}
  style={{ color: 'white' }} 
> 
    <h4>Nutritional Guidance</h4>
    <p> - Dietary Planning</p>
   <p>- Nutrition Education</p>
   <p>- Meal Planning for Health Conditions</p> </Link> </div></li>
      <li className="large image-9"><div className="text-block">
      <Link
  to={{
    pathname: "/bookserv",
    state: { serviceName: "Specialized Programs" }
  }}
  style={{ color: 'white' }} 
> 
    <h4>Specialized Programs</h4>
    <p> - Memory Care Programs</p>
   <p>- Palliative Care</p>
   <p>- End-of-Life Care</p> </Link> </div></li>
      <li className="small image-10"><div className="text-block">
      <Link
  to={{
    pathname: "/bookserv",
    state: { serviceName: "Rehabilitation Services" }
  }}
  style={{ color: 'white' }} 
>
    <h4>Rehabilitation Services</h4>
    <p> - Physical Therapy</p>
   <p>- Occupational Therapy</p>
   <p>- Speech Therapy</p></Link>  </div></li>

    </ul>
  </section>
  </div>
  <div id="providers">
  <section className="destinations">
    <h3 className="title1">Our Providers</h3>
    <p>Discover a dedicated team of qualified caregivers, including registered nurses, certified nursing assistants, therapists, and companions, ready to provide personalized and compassionate home care services for seniors</p>
    <hr/>
<br></br>
    <ul className="grid">
      <li className="small image-11">
        <div className="text-block">
    <h4>Registered Nurses</h4>
  </div>
  </li>
      <li className="small image-12"><div className="text-block">
    <h4>Home Health Aides</h4>
  </div></li>
      <li className="small image-13"><div className="text-block">
    <h4>Physical Therapists</h4>
  </div></li>
      <li className="small image-14"><div className="text-block">
    <h4>Companionship Services</h4>
  </div></li>
      <li className="small image-15"><div className="text-block">
    <h4>Medical Social Workers</h4>
  </div></li>
      <li className="small image-16"><div className="text-block">
    <h4>Specialized Care Providers</h4>
  </div></li>

    </ul>
  </section>
  </div>
  <div id="about">
  <section className="packages">
    <h3 className="title3">About Us</h3>
    <p>Elevating senior living with compassionate care, ElderlyEasy provides a comprehensive range of services designed to enhance well-being and foster a supportive community for our cherished seniors</p>
    <hr/>

    <ul className="grid">
      <li>
        <i className="fas fa-compass fa-4x"></i>
        <h4>User-Friendly Interface</h4>
        <p>Our app boasts an intuitive and easy-to-navigate interface, ensuring seniors and their caregivers can effortlessly access and utilize the platform</p>
      </li>
      <li>
        <i className="fas fa-camera-retro fa-4x"></i>
        <h4>Diverse Service Catalog</h4>
        <p>Offering a diverse service catalog ranging from medical assistance and home nursing to companionship and daily chores, ensuring seniors can tailor their care plans to meet their unique needs and preferences.</p>
      </li>
      <li className='next'>
      <i className="fas fa-solid fa-heart fa-4x"></i>
              <h4>Care Provider Matching</h4>
        <p>Utilize advanced algorithms to match seniors with qualified and compatible healthcare providers, ensuring personalized and effective care based on individual needs</p>
      </li>
      <li className='next'>
      <i className="fas fa-solid fa-clock-rotate-left fa-4x"></i> 
              <h4>24/7 Support</h4>
        <p>Providing round-the-clock support to seniors and their caregivers, offering assistance and guidance whenever needed for a seamless and reassuring experience</p>
      </li>
      <li className='next'>
        <i className="fas fa-lock fa-4x"></i>
        <h4>Secure Data Management</h4>
        <p>Prioritize the confidentiality and security of sensitive health data, implementing robust measures to safeguard personal information and medical records</p>
      </li>
      <li className='next'>
      <i className="fas fa-calendar-alt fa-4x"></i>  
            <h4>Seamless Appointment Scheduling</h4>
        <p>With our seamless appointment scheduling, seniors and caregivers can effortlessly book and manage appointments with healthcare providers, ensuring timely and convenient access to essential services</p>
      </li>
    </ul>
  </section>
</div>
<div id="feed" className='test'>
  <section className="testimonials">
    <h3 className="title">Testimonials</h3>
    <hr/>
    <p className="quote">The app has been a game-changer for my family. The ease of scheduling appointments and the quick response from support make it a reliable companion for our elderly loved ones</p>
    <p className="author">- Mary Jane</p>
    <p className="quote">Navigating through the app is intuitive, and the diverse range of services meets all our healthcare needs. The 24/7 support adds an extra layer of reassurance, making it a standout choice for senior care</p>
    <p className="author">- Sharon Rejoice</p>
    <p className="quote">I appreciate the user-friendly interface and the attention to detail in service coordination. The app has truly simplified the process of managing healthcare for our aging family members</p>
    <p className="author">- Luis Paul</p>
    <p className="quote">The diverse service catalog ensures that we can find the right support for our unique requirements. It is a comprehensive solution that brings peace of mind to both seniors and caregivers</p>
    <p className="author">- Alesh Jones</p>
    <p className="quote">Elderly Easy provides a seamless experience for seniors. The app features, especially the appointment scheduling and real-time communication, have significantly improved our ability to care for our elderly family members</p>
    <p className="author">- Philip Mathews</p>
  </section>
  </div>
  <div id="contact" className='con'>
  <section className="contact">
    <h3 className="title">Contact Us</h3>
    <p>Got questions or feedback? Reach out to us anytime! Stay updated on the latest features and events by subscribing to our newsletter. No unnecessary emails—only the ones that keep you informed and energized. Join us on this journey of caring for your loved ones</p>
    <hr/>
    <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter your name" name="username" value={formData.username} onChange={handleChange} />
            <input type="text" placeholder="Enter your query" name="query" value={formData.query} onChange={handleChange} />
            <button type="submit" className="btn">Send</button>
          </form>
  </section>
  <Chat></Chat>
  <footer>
        <div className="footer">
          <div className="row">
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
          <a href="https://www.facebook.com/" target="blank" className="custom-icon fa fa-facebook "></a>
<a href="https://twitter.com/i/flow/login?redirect_after_login=%2Flogin%3Flang%3Den" target="blank" className="custom-icon fa fa-twitter"></a>
<a href="https://www.google.com/" target="blank" className="custom-icon fa fa-google "></a>
<a href="https://www.linkedin.com/" target="blank" className="custom-icon fa fa-linkedin "></a>
<a href="https://www.youtube.com/" target="blank" className="custom-icon fa fa-youtube "></a>
<a href="https://www.instagram.com/" target="blank" className="custom-icon fa fa-instagram "></a>
     
          </div>

          <div className="row">
            <ul>
              <li><a href={img2} target="blank">Privacy Policy</a></li>
              <li><a href={img3} target="blank">Terms & Conditions</a></li>
              <li><a href={img1} target="blank">FAQ</a></li>
            </ul>
          </div>

          <div className="row">
            Elderly Ease Copyright © 2024 ALMITHA DENCY -
            All rights reserved || Designed By: ALCY
          </div>
        </div>
      </footer>
  </div>
    </div>
  )
}

export default Front
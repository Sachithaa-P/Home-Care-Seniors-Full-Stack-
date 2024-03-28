import video from './Source/vid.mp4';
import './Main.css'; 
import logo from './Source/logo.png'; 
import { Link } from 'react-router-dom';

const Main = () => {
  
  return (
    <div className='vid-container'>
      <div className='overlay'></div>
      <video src={video} muted loop autoPlay className='vid'></video>
      <div className='content-container'>
        <div className='logo-container'>
          <img src={logo} alt='Logo' className='logo' />
          <p className='logo-text'><h1>Elevating Lives, Enriching Moments: </h1>
          <h3>Your Trusted Partner in Senior Home Care</h3></p>
          <Link to='/welcome' className='slider-button'>
            <div id="arrowAnim">
              <div className="arrowSliding">
                <div className="arrow"></div>
              </div>
              <div className="arrowSliding delay1">
                <div className="arrow"></div>
              </div>
              <div className="arrowSliding delay2">
                <div className="arrow"></div>
              </div>
              <div className="arrowSliding delay3">
                <div className="arrow"></div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Main;



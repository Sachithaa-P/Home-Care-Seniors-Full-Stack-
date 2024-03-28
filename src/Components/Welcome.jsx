import { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import './Welcome.css';

const RoleSelector = ({ onSelectRole, selectedRole }) => {
  const navigate = useNavigate();

  const handleRoleSelection = (role) => {
    onSelectRole(role);

    // Adding a delay of 5 seconds before navigating to the login page
    setTimeout(() => {
      navigate('/login');
    }, 1500);
  };

  return (
    <div className='bg'>
      
    <div className='overlay1'></div>
    <div className={`app-selector ${selectedRole ? 'expanded' : ''}`}>
      <h2>Select Your Role</h2>
      <div className="role-buttons">
        <button onClick={() => handleRoleSelection('user')} className={selectedRole === 'user' ? 'custom-button active' : 'custom-button'}>
        <i className="fa fa-users" aria-hidden="true">  
        <span style={{ fontSize: '15px', fontWeight: 'normal',fontFamily:'serif' }}>  User</span>
        </i>


        </button>
        <button onClick={() => handleRoleSelection('admin')} className={selectedRole === 'admin' ? 'custom-button active' : 'custom-button'}>
        <i className="fa fa-user" aria-hidden="true" >  
        <span style={{ fontSize: '15px', fontWeight: 'normal' ,fontFamily:'serif'}}>  Admin</span>
        </i>
        </button>
      </div>
      {selectedRole && (
        <p className={`welcome-message ${selectedRole}`}>
          {selectedRole === 'user' ? 'Welcome, 🧑‍💻 User!' : 'Welcome, 👑 Admin!'}
        </p>
      )}
    </div></div>
  );
};

RoleSelector.propTypes = {
  onSelectRole: PropTypes.func.isRequired,
  selectedRole: PropTypes.string
};

const Welcome = () => {
  const [selectedRole, setSelectedRole] = useState(null);

  return (
    <div className="app">
      <RoleSelector onSelectRole={setSelectedRole} selectedRole={selectedRole} />
    </div>
  );
};

export default Welcome;


// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './Login.css';

// const LoginSignupForm = () => {
//   const [activeForm, setActiveForm] = useState('login');
//   const [loginEmail, setLoginEmail] = useState('');
//   const [loginPassword, setLoginPassword] = useState('');
//   const [signupName, setSignupName] = useState('');
//   const [signupEmail, setSignupEmail] = useState('');
//   const [signupPassword, setSignupPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [passwordMatchError, setPasswordMatchError] = useState(false);
//   const [passwordRequirements, setPasswordRequirements] = useState({
//     length: false,
//     number: false,
//     lowercase: false,
//     specialSymbol: false,
//     uppercase: false,
//   });
//   const navigate = useNavigate();

//   const switchForm = (form) => {
//     setActiveForm(form);
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     if (!loginEmail || !loginPassword) {
//       alert('Please enter both email and password.');
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:8080/api/v1/auth/login', {
//         email: loginEmail,
//         password: loginPassword
//       });
      
//       console.log(response.data); // Handle the response data appropriately
//       if (loginEmail === 'admin@gmail.com' && loginPassword === 'Admin@123') {
//         navigate('/ahome');
//       } else if (response.data.role === 'ADMIN') { 
//         navigate('/ahome');
//       } else {
//         navigate('/uhome');
//       }
//     } catch (error) {
//       console.error('Login failed:', error);
//       alert('Login failed. Please check your credentials and try again.');
//     }
//   };

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     if (signupPassword !== confirmPassword) {
//       setPasswordMatchError(true);
//       return;
//     } else {
//       setPasswordMatchError(false);
//     }

//     try {
//       const response = await axios.post('http://localhost:8080/api/v1/auth/register', {
//         name: signupName,
//         email: signupEmail,
//         password: signupPassword,
//         confirmPassword: confirmPassword // Add confirmPassword field
//       });

//       console.log(response.data); // Handle the response data appropriately
//       navigate('/login');
//       window.location.reload(); // Reload the page after successful sign-up
//     } catch (error) {
//       console.error('Signup failed:', error);
//       alert('Signup failed. Please try again later.');
//     }
//   };

//   const updatePasswordRequirements = (password) => {
//     const requirements = {
//       length: password.length >= 8 && password.length <= 16,
//       number: /[0-9]/.test(password),
//       lowercase: /[a-z]/.test(password),
//       specialSymbol: /[@$!%*?&]/.test(password),
//       uppercase: /[A-Z]/.test(password),
//     };
//     setPasswordRequirements(requirements);
//   };

//   const handlePasswordChange = (e) => {
//     const newPassword = e.target.value;
//     setSignupPassword(newPassword);
//     updatePasswordRequirements(newPassword);
//   };

//   const handleConfirmPasswordChange = (e) => {
//     const confirmPasswordValue = e.target.value;
//     setConfirmPassword(confirmPasswordValue);
//     if (signupPassword === confirmPasswordValue) {
//       setPasswordMatchError(false);
//     } else {
//       setPasswordMatchError(true);
//     }
//   };

//   return (
//     <div className='bo'>
//       <section className="forms-section">
//         <div className='overlay2'></div>
//         <div className="forms">
//           <div className={`form-wrapper ${activeForm === 'login' ? 'is-active fade-in' : ''}`}>
//             <button type="button" style={{ outline: "none" }} className="switcher switcher-login" onClick={() => switchForm('login')}>
//               Login
//               <span className="underline"></span>
//             </button>
//             <form className={`form form-login ${activeForm === 'login' ? 'fade-in' : ''}`} onSubmit={handleLogin}>
//               <fieldset>
//                 <legend>Please, enter your email and password for login.</legend>
//                 <div className="input-block">
//                   <label htmlFor="login-email">E-mail</label>
//                   <input
//                     id="login-email"
//                     type="email"
//                     required
//                     value={loginEmail}
//                     onChange={(e) => setLoginEmail(e.target.value)}
//                   />
//                 </div>
//                 <div className="input-block">
//                   <label htmlFor="login-password">Password</label>
//                   <input
//                     id="login-password"
//                     type="password"
//                     required
//                     value={loginPassword}
//                     onChange={(e) => setLoginPassword(e.target.value)}
//                   />
//                 </div>
//               </fieldset>
//               <button type="submit" className="btn-login">
//                 Login
//               </button>
//             </form>
//           </div>
//           <div className={`form-wrapper ${activeForm === 'signup' ? 'is-active fade-in' : ''}`}>
//             <button type="button" style={{ outline: "none" }} className="switcher switcher-signup" onClick={() => switchForm('signup')}>
//               Sign Up
//               <span className="underline"></span>
//             </button>
//             <form className={`form form-signup ${activeForm === 'signup' ? 'fade-in' : ''}`} onSubmit={handleSignup}>
//               <fieldset>
//                 <legend>Please, enter your name, email, password, and confirm password for sign up.</legend>
//                 <div className="input-block">
//                   <label htmlFor="signup-name">Name</label>
//                   <input
//                     id="signup-name"
//                     type="text"
//                     required
//                     value={signupName}
//                     onChange={(e) => setSignupName(e.target.value)}
//                   />
//                 </div>
//                 <div className="input-block">
//                   <label htmlFor="signup-email">E-mail</label>
//                   <input
//                     id="signup-email"
//                     type="email"
//                     required
//                     value={signupEmail}
//                     onChange={(e) => setSignupEmail(e.target.value)}
//                   />
//                 </div>
//                 <div className="input-block">
//                   <label htmlFor="signup-password">Password</label>
//                   <input
//                     id="signup-password"
//                     type="password"
//                     required
//                     value={signupPassword}
//                     onChange={handlePasswordChange}
//                   />
//                   <ul className="requirement-list">
//                     <li style={{ display: passwordRequirements.length ? 'none' : 'block' }}>
//                       <i className="fa-solid fa-circle"></i>
//                       <span>At least 8 characters length</span>
//                     </li>
//                     <li style={{ display: passwordRequirements.number ? 'none' : 'block' }}>
//                       <i className="fa-solid fa-circle"></i>
//                       <span>At least 1 number (0...9)</span>
//                     </li>
//                     <li style={{ display: passwordRequirements.lowercase ? 'none' : 'block' }}>
//                       <i className="fa-solid fa-circle"></i>
//                       <span>At least 1 lowercase letter (a...z)</span>
//                     </li>
//                     <li style={{ display: passwordRequirements.specialSymbol ? 'none' : 'block' }}>
//                       <i className="fa-solid fa-circle"></i>
//                       <span>At least 1 special symbol (!...$)</span>
//                     </li>
//                     <li style={{ display: passwordRequirements.uppercase ? 'none' : 'block' }}>
//                       <i className="fa-solid fa-circle"></i>
//                       <span>At least 1 uppercase letter (A...Z)</span>
//                     </li>
//                   </ul>
//                 </div>
//                 <br></br>
//                 <div className="input-block">
//                   <label htmlFor="confirm-password">Confirm Password</label>
//                   <input
//                     id="confirm-password"
//                     type="password"
//                     required
//                     value={confirmPassword}
//                     onChange={handleConfirmPasswordChange}
//                   />
//                 </div>
//                 {passwordMatchError && (
//                   <div className="password-match-error">Passwords Do Not Match</div>
//                 )}
//               </fieldset>
//               <button type="submit" className="btn-signup">
//                 Sign Up
//               </button>
//             </form>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default LoginSignupForm;

// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './Login.css';

// const LoginSignupForm = () => {
//   const [activeForm, setActiveForm] = useState('login');
//   const [loginEmail, setLoginEmail] = useState('');
//   const [loginPassword, setLoginPassword] = useState('');
//   const [signupName, setSignupName] = useState('');
//   const [signupEmail, setSignupEmail] = useState('');
//   const [signupPassword, setSignupPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [passwordMatchError, setPasswordMatchError] = useState(false);
//   const [passwordRequirements, setPasswordRequirements] = useState({
//     length: false,
//     number: false,
//     lowercase: false,
//     specialSymbol: false,
//     uppercase: false,
//   });
//   const navigate = useNavigate();

//   const switchForm = (form) => {
//     setActiveForm(form);
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     if (!loginEmail || !loginPassword) {
//       alert('Please enter both email and password.');
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:8080/api/v1/auth/login', {
//         email: loginEmail,
//         password: loginPassword
//       });
      
//       console.log(response.data); // Handle the response data appropriately
//       const token = response.data.token; // Extract the token from the response
//       console.log('Token:', token); // Log the token to the console
//       localStorage.setItem('token', token);
//       if (loginEmail === 'admin@gmail.com' && loginPassword === 'Admin@123') {
//         navigate('/ahome');
//       } else if (response.data.role === 'ADMIN') { 
//         navigate('/ahome');
//       } else {
//         navigate('/uhome');
//       }
//     } catch (error) {
//       console.error('Login failed:', error);
//       alert('Login failed. Please check your credentials and try again.');
//     }
//   };

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     if (signupPassword !== confirmPassword) {
//       setPasswordMatchError(true);
//       return;
//     } else {
//       setPasswordMatchError(false);
//     }

//     try {
//       const response = await axios.post('http://localhost:8080/api/v1/auth/register', {
//         name: signupName,
//         email: signupEmail,
//         password: signupPassword,
//         confirmPassword: confirmPassword // Add confirmPassword field
//       });

//       console.log(response.data); // Handle the response data appropriately
//       navigate('/login');
//       window.location.reload(); // Reload the page after successful sign-up
//     } catch (error) {
//       console.error('Signup failed:', error);
//       alert('Signup failed. Please try again later.');
//     }
//   };

//   const updatePasswordRequirements = (password) => {
//     const requirements = {
//       length: password.length >= 8 && password.length <= 16,
//       number: /[0-9]/.test(password),
//       lowercase: /[a-z]/.test(password),
//       specialSymbol: /[@$!%*?&]/.test(password),
//       uppercase: /[A-Z]/.test(password),
//     };
//     setPasswordRequirements(requirements);
//   };

//   const handlePasswordChange = (e) => {
//     const newPassword = e.target.value;
//     setSignupPassword(newPassword);
//     updatePasswordRequirements(newPassword);
//   };

//   const handleConfirmPasswordChange = (e) => {
//     const confirmPasswordValue = e.target.value;
//     setConfirmPassword(confirmPasswordValue);
//     if (signupPassword === confirmPasswordValue) {
//       setPasswordMatchError(false);
//     } else {
//       setPasswordMatchError(true);
//     }
//   };

//   return (
//     <div className='bo'>
//       <section className="forms-section">
//         <div className='overlay2'></div>
//         <div className="forms">
//           <div className={`form-wrapper ${activeForm === 'login' ? 'is-active fade-in' : ''}`}>
//             <button type="button" style={{ outline: "none" }} className="switcher switcher-login" onClick={() => switchForm('login')}>
//               Login
//               <span className="underline"></span>
//             </button>
//             <form className={`form form-login ${activeForm === 'login' ? 'fade-in' : ''}`} onSubmit={handleLogin}>
//               <fieldset>
//                 <legend>Please, enter your email and password for login.</legend>
//                 <div className="input-block">
//                   <label htmlFor="login-email">E-mail</label>
//                   <input
//                     id="login-email"
//                     type="email"
//                     required
//                     value={loginEmail}
//                     onChange={(e) => setLoginEmail(e.target.value)}
//                   />
//                 </div>
//                 <div className="input-block">
//                   <label htmlFor="login-password">Password</label>
//                   <input
//                     id="login-password"
//                     type="password"
//                     required
//                     value={loginPassword}
//                     onChange={(e) => setLoginPassword(e.target.value)}
//                   />
//                 </div>
//               </fieldset>
//               <button type="submit" className="btn-login">
//                 Login
//               </button>
//             </form>
//           </div>
//           <div className={`form-wrapper ${activeForm === 'signup' ? 'is-active fade-in' : ''}`}>
//             <button type="button" style={{ outline: "none" }} className="switcher switcher-signup" onClick={() => switchForm('signup')}>
//               Sign Up
//               <span className="underline"></span>
//             </button>
//             <form className={`form form-signup ${activeForm === 'signup' ? 'fade-in' : ''}`} onSubmit={handleSignup}>
//               <fieldset>
//                 <legend>Please, enter your name, email, password, and confirm password for sign up.</legend>
//                 <div className="input-block">
//                   <label htmlFor="signup-name">Name</label>
//                   <input
//                     id="signup-name"
//                     type="text"
//                     required
//                     value={signupName}
//                     onChange={(e) => setSignupName(e.target.value)}
//                   />
//                 </div>
//                 <div className="input-block">
//                   <label htmlFor="signup-email">E-mail</label>
//                   <input
//                     id="signup-email"
//                     type="email"
//                     required
//                     value={signupEmail}
//                     onChange={(e) => setSignupEmail(e.target.value)}
//                   />
//                 </div>
//                 <div className="input-block">
//                   <label htmlFor="signup-password">Password</label>
//                   <input
//                     id="signup-password"
//                     type="password"
//                     required
//                     value={signupPassword}
//                     onChange={handlePasswordChange}
//                   />
//                   <ul className="requirement-list">
//                     <li style={{ display: passwordRequirements.length ? 'none' : 'block' }}>
//                       <i className="fa-solid fa-circle"></i>
//                       <span>At least 8 characters length</span>
//                     </li>
//                     <li style={{ display: passwordRequirements.number ? 'none' : 'block' }}>
//                       <i className="fa-solid fa-circle"></i>
//                       <span>At least 1 number (0...9)</span>
//                     </li>
//                     <li style={{ display: passwordRequirements.lowercase ? 'none' : 'block' }}>
//                       <i className="fa-solid fa-circle"></i>
//                       <span>At least 1 lowercase letter (a...z)</span>
//                     </li>
//                     <li style={{ display: passwordRequirements.specialSymbol ? 'none' : 'block' }}>
//                       <i className="fa-solid fa-circle"></i>
//                       <span>At least 1 special symbol (!...$)</span>
//                     </li>
//                     <li style={{ display: passwordRequirements.uppercase ? 'none' : 'block' }}>
//                       <i className="fa-solid fa-circle"></i>
//                       <span>At least 1 uppercase letter (A...Z)</span>
//                     </li>
//                   </ul>
//                 </div>
//                 <br></br>
//                 <div className="input-block">
//                   <label htmlFor="confirm-password">Confirm Password</label>
//                   <input
//                     id="confirm-password"
//                     type="password"
//                     required
//                     value={confirmPassword}
//                     onChange={handleConfirmPasswordChange}
//                   />
//                 </div>
//                 {passwordMatchError && (
//                   <div className="password-match-error">Passwords Do Not Match</div>
//                 )}
//               </fieldset>
//               <button type="submit" className="btn-signup">
//                 Sign Up
//               </button>
//             </form>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default LoginSignupForm;




import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

const LoginSignupForm = () => {
  const [activeForm, setActiveForm] = useState('login');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const [passwordRequirements, setPasswordRequirements] = useState({
    length: false,
    number: false,
    lowercase: false,
    specialSymbol: false,
    uppercase: false,
  });
  const navigate = useNavigate();

  const switchForm = (form) => {
    setActiveForm(form);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!loginEmail || !loginPassword) {
      alert('Please enter both email and password.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/login', {
        email: loginEmail,
        password: loginPassword
      });

      console.log(response.data); // Handle the response data appropriately
      const token = response.data.token; // Extract the token from the response
      console.log('Token:', token); // Log the token to the console
      localStorage.setItem('token', token);

      // Keep existing redirection logic
      if (loginEmail === 'admin@gmail.com' && loginPassword === 'Admin@123') {
        navigate('/ahome');
      } else if (response.data.role === 'ADMIN') { 
        navigate('/ahome');
      } else {
        navigate('/uhome');
      }
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed. Please check your credentials and try again.');
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (signupPassword !== confirmPassword) {
      setPasswordMatchError(true);
      return;
    } else {
      setPasswordMatchError(false);
    }

    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/register', {
        name: signupName,
        email: signupEmail,
        password: signupPassword,
        confirmPassword: confirmPassword // Add confirmPassword field
      });

      console.log(response.data); // Handle the response data appropriately
      navigate('/login');
      window.location.reload(); // Reload the page after successful sign-up
    } catch (error) {
      console.error('Signup failed:', error);
      alert('Signup failed. Please try again later.');
    }
  };

  const updatePasswordRequirements = (password) => {
    const requirements = {
      length: password.length >= 8 && password.length <= 16,
      number: /[0-9]/.test(password),
      lowercase: /[a-z]/.test(password),
      specialSymbol: /[@$!%*?&]/.test(password),
      uppercase: /[A-Z]/.test(password),
    };
    setPasswordRequirements(requirements);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setSignupPassword(newPassword);
    updatePasswordRequirements(newPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    const confirmPasswordValue = e.target.value;
    setConfirmPassword(confirmPasswordValue);
    if (signupPassword === confirmPasswordValue) {
      setPasswordMatchError(false);
    } else {
      setPasswordMatchError(true);
    }
  };

  return (
    <div className='bo'>
      <section className="forms-section">
        <div className='overlay2'></div>
        <div className="forms">
          <div className={`form-wrapper ${activeForm === 'login' ? 'is-active fade-in' : ''}`}>
            <button type="button" style={{ outline: "none" }} className="switcher switcher-login" onClick={() => switchForm('login')}>
              Login
              <span className="underline"></span>
            </button>
            <form className={`form form-login ${activeForm === 'login' ? 'fade-in' : ''}`} onSubmit={handleLogin}>
              <fieldset>
                <legend>Please, enter your email and password for login.</legend>
                <div className="input-block">
                  <label htmlFor="login-email">E-mail</label>
                  <input
                    id="login-email"
                    type="email"
                    required
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                  />
                </div>
                <div className="input-block">
                  <label htmlFor="login-password">Password</label>
                  <input
                    id="login-password"
                    type="password"
                    required
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                  />
                </div>
              </fieldset>
              <button type="submit" className="btn-login">
                Login
              </button>
            </form>
          </div>
          <div className={`form-wrapper ${activeForm === 'signup' ? 'is-active fade-in' : ''}`}>
            <button type="button" style={{ outline: "none" }} className="switcher switcher-signup" onClick={() => switchForm('signup')}>
              Sign Up
              <span className="underline"></span>
            </button>
            <form className={`form form-signup ${activeForm === 'signup' ? 'fade-in' : ''}`} onSubmit={handleSignup}>
              <fieldset>
                <legend>Please, enter your name, email, password, and confirm password for sign up.</legend>
                <div className="input-block">
                  <label htmlFor="signup-name">Name</label>
                  <input
                    id="signup-name"
                    type="text"
                    required
                    value={signupName}
                    onChange={(e) => setSignupName(e.target.value)}
                  />
                </div>
                <div className="input-block">
                  <label htmlFor="signup-email">E-mail</label>
                  <input
                    id="signup-email"
                    type="email"
                    required
                    value={signupEmail}
                    onChange={(e) => setSignupEmail(e.target.value)}
                  />
                </div>
                <div className="input-block">
                  <label htmlFor="signup-password">Password</label>
                  <input
                    id="signup-password"
                    type="password"
                    required
                    value={signupPassword}
                    onChange={handlePasswordChange}
                  />
                  <ul className="requirement-list">
                    <li style={{ display: passwordRequirements.length ? 'none' : 'block' }}>
                      <i className="fa-solid fa-circle"></i>
                      <span>At least 8 characters length</span>
                    </li>
                    <li style={{ display: passwordRequirements.number ? 'none' : 'block' }}>
                      <i className="fa-solid fa-circle"></i>
                      <span>At least 1 number (0...9)</span>
                    </li>
                    <li style={{ display: passwordRequirements.lowercase ? 'none' : 'block' }}>
                      <i className="fa-solid fa-circle"></i>
                      <span>At least 1 lowercase letter (a...z)</span>
                    </li>
                    <li style={{ display: passwordRequirements.specialSymbol ? 'none' : 'block' }}>
                      <i className="fa-solid fa-circle"></i>
                      <span>At least 1 special symbol (!...$)</span>
                    </li>
                    <li style={{ display: passwordRequirements.uppercase ? 'none' : 'block' }}>
                      <i className="fa-solid fa-circle"></i>
                      <span>At least 1 uppercase letter (A...Z)</span>
                    </li>
                  </ul>
                </div>
                <br></br>
                <div className="input-block">
                  <label htmlFor="confirm-password">Confirm Password</label>
                  <input
                    id="confirm-password"
                    type="password"
                    required
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                  />
                </div>
                {passwordMatchError && (
                  <div className="password-match-error">Passwords Do Not Match</div>
                )}
              </fieldset>
              <button type="submit" className="btn-signup">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginSignupForm;

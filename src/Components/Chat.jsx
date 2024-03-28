// import { useState, useEffect } from 'react';
// import './Chat.css';
// import img1 from './Source/FAQ.png';
// import img2 from './Source/Policy.png';
// import img3 from './Source/Terms.png';

// const initialMessages = [
//   { id: 1, text: 'Hello! How can I assist you today?', fromUser: false },
//   { id: 2, text: '1. View Services', fromUser: false },
//   { id: 3, text: '2. Book a Service', fromUser: false },
//   { id: 4, text: '3. Privacy Policy', fromUser: false },
//   { id: 5, text: '4. FAQ', fromUser: false },
//   { id: 6, text: '5. Terms and Conditions', fromUser: false },
// ];

// const Chatbot = () => {
//   const [input, setInput] = useState('');
//   const [chatMessages, setChatMessages] = useState(initialMessages);

//   const handleUserInput = (e) => {
//     setInput(e.target.value);
//   };

//   const handleUserMessage = () => {
//     if (input.trim() !== '') {
//       const newMessages = [...chatMessages, { id: chatMessages.length + 1, text: input, fromUser: true }];
//       setChatMessages(newMessages);
//       setInput('');

//       // Simulate different responses based on user input
//       setTimeout(() => {
//         let botResponse;
//         switch (input.trim()) {
//           case '1':
//             botResponse = { id: newMessages.length + 1, text: 'Redirecting to View Services page...', fromUser: false };
//             setChatMessages([...newMessages, botResponse]);
//             setTimeout(() => {
//               window.location.href = "/viewserv";
//             }, 1000);
//             break;
//           case '2':
//             botResponse = { id: newMessages.length + 1, text: 'Redirecting to Book a Service page...', fromUser: false };
//             setChatMessages([...newMessages, botResponse]);
//             setTimeout(() => {
//               window.location.href = "/bookserv";
//             }, 1000);
//             break;
//           case '3':
//             botResponse = { id: newMessages.length + 1, text: 'Redirecting to Privacy Policy page...', fromUser: false };
//             setChatMessages([...newMessages, botResponse]);
//             setTimeout(() => {
//               window.open(img2, '_blank');
//             }, 1000);
//             break;
//           case '4':
//             botResponse = { id: newMessages.length + 1, text: 'Redirecting to FAQ page...', fromUser: false };
//             setChatMessages([...newMessages, botResponse]);
//             setTimeout(() => {
//               window.open(img1, '_blank');
//             }, 1000);
//             break;
//           case '5':
//             botResponse = { id: newMessages.length + 1, text: 'Redirecting to Terms and Conditions page...', fromUser: false };
//             setChatMessages([...newMessages, botResponse]);
//             setTimeout(() => {
//               window.open(img3, '_blank');
//             }, 1000);
//             break;
//           default:
//             botResponse = { id: newMessages.length + 1, text: 'I didn\'t understand that. Please choose a valid option.', fromUser: false };
//             setChatMessages([...newMessages, botResponse]);
//         }
//       }, 500);
//     }
//   };

//   useEffect(() => {
//     // Scroll to the bottom of the chat window when new messages are added
//     const chatWindow = document.getElementById('chat-window');
//     chatWindow.scrollTop = chatWindow.scrollHeight;
//   }, [chatMessages]);

//   return (
//     <div className='chatbot-body'>
//       <center></center>
//       <div className="chatbot-container">
//         <div id="chat-window" className="chat-window">
//           {chatMessages.map((message) => (
//             <div key={message.id} className={`message ${message.fromUser ? 'user-message' : 'bot-message'}`}>
//               {message.text}
//             </div>
//           ))}
//         </div>
//         <div className="input-container">
//           <input
//             type="text"
//             placeholder="Type your message..."
//             value={input}
//             onChange={handleUserInput}
//             onKeyDown={(e) => e.key === 'Enter' && handleUserMessage()}
//           />
//           <button onClick={handleUserMessage}>Send</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Chatbot;

import { useState, useEffect } from 'react';
import './Chat.css';
import img1 from './Source/FAQ.png';
import img2 from './Source/Policy.png';
import img3 from './Source/Terms.png';
const initialMessages = [
  { id: 1, text: 'Hello! How can I assist you today?', fromUser: false },
  { id: 2, text: '1. View Services', fromUser: false },
  { id: 3, text: '2. Book a Service', fromUser: false },
  { id: 4, text: '3. Privacy Policy', fromUser: false },
  { id: 5, text: '4. FAQ', fromUser: false },
  { id: 6, text: '5. Terms and Conditions', fromUser: false },
];

const Chatbot = () => {
  const [input, setInput] = useState('');
  const [chatMessages, setChatMessages] = useState(initialMessages);
  const [showChat, setShowChat] = useState(false); // State to manage chat visibility

  const handleUserInput = (e) => {
    setInput(e.target.value);
  };

  const handleUserMessage = () => {
    if (input.trim() !== '') {
      const newMessages = [...chatMessages, { id: chatMessages.length + 1, text: input, fromUser: true }];
      setChatMessages(newMessages);
      setInput('');

      // Simulate different responses based on user input
      setTimeout(() => {
        let botResponse;
        switch (input.trim()) {
          case '1':
  botResponse = { id: newMessages.length + 1, text: 'Redirecting to View Services page...', fromUser: false };
  setChatMessages([...newMessages, botResponse]);
  setTimeout(() => {
    window.open("/viewserv", '_blank');
  }, 1000);
  break;
case '2':
  botResponse = { id: newMessages.length + 1, text: 'Redirecting to Book a Service page...', fromUser: false };
  setChatMessages([...newMessages, botResponse]);
  setTimeout(() => {
    window.open("/bookserv", '_blank');
  }, 1000);
  break;

          case '3':
            botResponse = { id: newMessages.length + 1, text: 'Redirecting to Privacy Policy page...', fromUser: false };
            setChatMessages([...newMessages, botResponse]);
            setTimeout(() => {
              window.open(img2, '_blank');
            }, 1000);
            break;
          case '4':
            botResponse = { id: newMessages.length + 1, text: 'Redirecting to FAQ page...', fromUser: false };
            setChatMessages([...newMessages, botResponse]);
            setTimeout(() => {
              window.open(img1, '_blank');
            }, 1000);
            break;
          case '5':
            botResponse = { id: newMessages.length + 1, text: 'Redirecting to Terms and Conditions page...', fromUser: false };
            setChatMessages([...newMessages, botResponse]);
            setTimeout(() => {
              window.open(img3, '_blank');
            }, 1000);
            break;
          default:
            botResponse = { id: newMessages.length + 1, text: 'I didn\'t understand that. Please choose a valid option.', fromUser: false };
            setChatMessages([...newMessages, botResponse]);
        }
      }, 500);
    }
  };

  useEffect(() => {
    // Scroll to the bottom of the chat window when new messages are added
    const chatWindow = document.getElementById('chat-window');
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }, [chatMessages]);

  return (
    <div className='chatbot-body'>
      <div className='chat-toggle' onClick={() => setShowChat(!showChat)}>
        <img src="https://www.pngall.com/wp-content/uploads/15/ChatBot-PNG-Image-HD.png" alt="Bot" />
      </div>
      <div className={`chatbot-container ${showChat ? 'show' : ''}`}>
        <div id="chat-window" className="chat-window">
          {chatMessages.map((message) => (
            <div key={message.id} className={`message ${message.fromUser ? 'user-message' : 'bot-message'}`}>
              {message.text}
            </div>
          ))}
        </div>
        <div className="input-container">
          <input className='inn'
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={handleUserInput}
            onKeyDown={(e) => e.key === 'Enter' && handleUserMessage()}
          />
          <button className="bot" onClick={handleUserMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};


export default Chatbot;


import { useState,useEffect } from 'react'
import { Chat_input } from './components/Chat_input';
import { Chat_Message } from './components/Chat_Message';
import { AiStyling } from './components/AiStyling';



import './App.css'


  
      /* WELCOME */
      const WelcomeMessage = ({ show }) => {
        if (!show) return null;
        return <div className="welcome-message">Welcome, User!</div>;
      };


     export  const Lola = () => {
        const [chatData, setChatData] = useState({});
        const [ID, setID] = useState(null);
        const [chatMessages, setChatMessages] = useState([]);
        const [showWelcome, setShowWelcome] = useState(true);
        const [hasSentFirst, setHasSentFirst] = useState(false);

        useEffect(() => {
          const stored = JSON.parse(localStorage.getItem("chat_data")) || {};
          setChatData(stored);

          const urlID = new URLSearchParams(window.location.search).get("id");

          if(urlID && stored[urlID]){
            setID(urlID);
            setChatMessages(stored[urlID].messages || []);
            setShowWelcome(false);
          }
        }, []);

        const handleFirstSend = () => {
          if (!hasSentFirst) {
            setShowWelcome(false);
            setHasSentFirst(true);
          }
        };

        return (
          <div className='All'>
            <WelcomeMessage show={showWelcome} />
            <AiStyling 
              chatData={chatData} 
              setChatData={setChatData}
              currentID={ID}
              setID={setID}
              setChatMessages={setChatMessages}
            />
            <div className='input-Messages'>
              <Chat_input
                setChatMessages={setChatMessages}
                chatMessages={chatMessages}
                ID={ID} setID={setID}
                chatData={chatData} setChatData={setChatData}
                onFirstSend={handleFirstSend}
              />
              <Chat_Message chatMessages={chatMessages} />
            </div>
          </div>
        );
      };
      
export default Lola;
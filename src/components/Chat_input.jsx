import { Chatbot } from 'supersimpledev'; 
import { useState } from 'react'



import './Chat_input.css'

      /* CHAT INPUT */
      function className(){ return 'bomba'; }

      export const Chat_input = ({ 
        setChatMessages, chatMessages,
        ID, setID,
        chatData, setChatData,
        onFirstSend
      }) => {

        const [inputText, setInputText] = useState('');

        function saveInputMessage(e){ setInputText(e.target.value); }

        function sendMessage(){
          if (onFirstSend) onFirstSend();

          const newMessages = [
            ...chatMessages,
            { message: inputText, sender:'user', id:crypto.randomUUID() },
            { message: Chatbot.getResponse(inputText), sender:'robot', id:crypto.randomUUID() }
          ];

          setChatMessages(newMessages);

          let activeID = ID;

          if(!ID){
            const newID = crypto.randomUUID();
            setID(newID);
            activeID = newID;

            const newChatName = `Chat N:${Object.keys(chatData).length + 1}`;

            const newData = {
              ...chatData,
              [newID]: {
                name: newChatName,
                messages: newMessages
              }
            };

            setChatData(newData);
            localStorage.setItem("chat_data", JSON.stringify(newData));
            history.pushState({}, "", `${window.location.pathname}?id=${newID}`);
          } 
          else {
            const updated = {
              ...chatData,
              [activeID]: {
                ...chatData[activeID],
                messages: newMessages
              }
            };

            setChatData(updated);
            localStorage.setItem("chat_data", JSON.stringify(updated));
          }

          setInputText('');
        }

        return (
          <div className='input-div'>
            <input onChange={saveInputMessage} value={inputText} placeholder='Ask me'/>
            <button onClick={sendMessage} className={className()}>send</button>
          </div>
        );
      };

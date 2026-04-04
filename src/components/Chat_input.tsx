import { Chatbot } from 'supersimpledev'; 
import { useState } from 'react'
import { chatMessages1 } from './Chat_Message';
import './Chat_input.css'

export type ChatDataType = {
  [id: string]: {            // each key is a chat ID
    name: string;            // name of the chat
    messages: chatMessages1[]; // messages in that chat
  };
};
export type chatInputProps={
    setChatMessages:(value: chatMessages1[])=>void,
    chatMessages:chatMessages1[],
    ID:string|null,
    setID:(value:string|null)=>void,
    chatData:ChatDataType;  
    setChatData:(value:ChatDataType)=>void,
    onFirstSend?:()=>void
} 
      /* CHAT INPUT */
      function className(){ return 'bomba'; }

      export const Chat_input = ({ 
        setChatMessages, chatMessages,
        ID, setID,
        chatData, setChatData,
        onFirstSend
      }: chatInputProps ) => {

        const [inputText, setInputText] = useState('');

        function saveInputMessage(e: React.ChangeEvent<HTMLInputElement>){ setInputText(e.target.value); }

        function sendMessage(){
          if (onFirstSend) onFirstSend();

          const newMessages = [
            ...chatMessages,
            { message: inputText, sender:'user', id:crypto.randomUUID() },
            { message: Chatbot.getResponse(inputText), sender:'robot', id:crypto.randomUUID() }
          ];

          setChatMessages(newMessages);

          let activeID: string | null = ID;

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
              [activeID!] : {
                ...chatData[activeID!],
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

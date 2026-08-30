import { getAIResponse } from '../lib/ai';
import { useState } from 'react'
import { chatMessages1 } from './Chat_Message';
import './Chat_input.css'

export type ChatDataType = {
  [id: string]: {
    name: string;
    messages: chatMessages1[];
  };
};

export type chatInputProps = {
  setChatMessages: (value: chatMessages1[]) => void,
  chatMessages: chatMessages1[],
  ID: string | null,
  setID: (value: string | null) => void,
  chatData: ChatDataType;
  setChatData: (value: ChatDataType) => void,
  onFirstSend?: () => void
}

function className() { return 'bomba'; }

export const Chat_input = ({
  setChatMessages, chatMessages,
  ID, setID,
  chatData, setChatData,
  onFirstSend
}: chatInputProps) => {

  const [inputText, setInputText] = useState('');
  const [isSending, setIsSending] = useState(false);

  function saveInputMessage(e: React.ChangeEvent<HTMLInputElement>) {
    setInputText(e.target.value);
  }

  async function sendMessage() {
    if (!inputText.trim() || isSending) return;

    setIsSending(true);
    if (onFirstSend) onFirstSend();

    // Add user message + temporary bot message
    const userMsg = { message: inputText, sender: 'user' as const, id: crypto.randomUUID() };
    const tempBotMsg = { message: '...', sender: 'robot' as const, id: crypto.randomUUID() };

    const newMessages = [
      ...chatMessages,
      userMsg,
      tempBotMsg
    ];

    setChatMessages(newMessages);
    setInputText('');

    // Get AI response
    let aiResponse = 'Sorry, I had trouble responding.';
    try {
      aiResponse = await getAIResponse(inputText);
    } catch (error) {
      console.error('AI error:', error);
    }

    // Replace temp message with real response
    const updatedMessages = newMessages.map(msg =>
      msg.id === tempBotMsg.id
        ? { ...msg, message: aiResponse }
        : msg
    );

    setChatMessages(updatedMessages);

    // Save to localStorage / update chat data
    let activeID: string | null = ID;

    if (!ID) {
      const newID = crypto.randomUUID();
      setID(newID);
      activeID = newID;

      const newChatName = `Chat N:${Object.keys(chatData).length + 1}`;

      const newData = {
        ...chatData,
        [newID]: {
          name: newChatName,
          messages: updatedMessages
        }
      };

      setChatData(newData);
      localStorage.setItem("chat_data", JSON.stringify(newData));
      history.pushState({}, "", `${window.location.pathname}?id=${newID}`);
    } else {
      const updated = {
        ...chatData,
        [activeID!]: {
          ...chatData[activeID!],
          messages: updatedMessages
        }
      };

      setChatData(updated);
      localStorage.setItem("chat_data", JSON.stringify(updated));
    }

    setIsSending(false);
  }

  return (
    <div className='input-div'>
      <input
        onChange={saveInputMessage}
        value={inputText}
        placeholder='Ask me'
        disabled={isSending}
        onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
      />
      <button onClick={sendMessage} className={className()} disabled={isSending}>
        {isSending ? '...' : 'send'}
      </button>
    </div>
  );
};
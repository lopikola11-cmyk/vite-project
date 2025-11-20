
import './AiStyling.css'


export const AiStyling = ({ chatData, setChatData, currentID, setID, setChatMessages }) => {

        const deleteChat = (idToDelete, e) => {
          e.preventDefault();
          e.stopPropagation();

          const updated = { ...chatData };
          delete updated[idToDelete];
          setChatData(updated);
          localStorage.setItem("chat_data", JSON.stringify(updated));

          if (currentID === idToDelete) {
            setID(null);
            setChatMessages([]);
            history.pushState({}, "", window.location.pathname);
          }
        };

        return (
          <div className='table'>
            <div className="sidebar">
              <a 
                href={window.location.origin + window.location.pathname} 
                target="_blank" 
                rel="noopener noreferrer"
                className="active"
              >
                New chat
              </a>
              <a href="#">Search chats</a>
              <a href="#">Library</a>
              <a href="#">Chats</a>
            </div>

            <div className='chats'>
              {Object.keys(chatData).map(id => (
                <div key={id} className="chat-item">
                  <a 
                    href={`${window.location.pathname}?id=${id}`} 
                    className="chat-link"
                    title={chatData[id].name}
                  >
                    {chatData[id].name}
                  </a>
                  <button 
                    className="delete-btn" 
                    onClick={(e) => deleteChat(id, e)}
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </div>
        );
      };

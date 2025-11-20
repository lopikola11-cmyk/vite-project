   
 import RobotPicture from'../assets/robot.png'
      import UserPicture from'../assets/user.png'
   import './Chat_Message.css';
   

   
   export const Chat_Message = ({ chatMessages }) => (
        <div className='div-chatMessages'>
          {chatMessages.map(chat => (
            <div key={chat.id} className={chat.sender==='robot'?'robot':'user'}>
              {chat.sender==='robot' && <img src={RobotPicture} width="30"/>}
              {chat.message}
              {chat.sender==='user' && <img src={UserPicture} width="30"/>}
            </div>
          ))}
        </div>
      );
# 🚀 ABDouchat – ChatGPT Clone (React + Vite)

ABDouchat is a fully client-side ChatGPT-style chat system, designed and built entirely from scratch by Abderrahman Zerouali.

This project behaves like a ChatGPT Clone:
- Multiple chat sessions
- Persistent conversations
- URL-based session routing
- Message history saved locally
- Smooth ChatGPT-like UI
- Fully scalable architecture

Everything is handled on the frontend without any backend.

---

# ⭐ Features

## 🔹 ChatGPT-Style Multi-Chat System
- Unlimited chat sessions
- Each chat has a unique ID using crypto.randomUUID()
- Auto chat names (Chat N:1, Chat N:2, …)

## 🔹 Persistent Chat Storage
Chats are stored permanently using localStorage:
- Messages
- Sender (user or robot)
- Unique message IDs
- Chat name

Sessions remain even after closing the browser.

## 🔹 URL-Based Chat Sessions
Each chat session can be loaded via:

?id=<chat-id>

If a session exists:
- Correct chat loads instantly
- Full history is restored
- URL ↔ State ↔ UI ↔ Storage remain synced

## 🔹 AI Responses
- User sends a message
- Robot replies using SuperSimpleDev chatbot logic
- Both messages saved per-chat
- Chat bubbles styled like ChatGPT

## 🔹 Delete Chats
- Remove any chat
- If active chat is deleted, UI resets
- URL resets
- Storage updates instantly

## 🔹 Clean ChatGPT-Inspired UI
- Sidebar with chat list
- Smooth conversation UI
- Clean message bubbles
- User + robot icons

## 🔹 Scalable Frontend Architecture
- Easy to extend
- Maintains clean component separation
- Ready for future backend integration

---

# 🧩 Project Structure

src/
│
├── assets/
│   ├── robot.png
│   ├── user.png
│   ├── screenshot1.png
│   ├── screenshot2.png
│
├── components/
│   ├── AiStyling.jsx
│   ├── AiStyling.css
│   ├── Chat_input.jsx
│   ├── Chat_input.css
│   ├── Chat_Message.jsx
│   ├── Chat_Message.css
│
├── App.jsx
├── App.css
├── main.jsx
├── index.css

---

# 📸 Screenshots

### Home / Chat List
![Home Page](./src/assets/screenshot1.png)

### ChatGPT-Style Chat Interface
![Chat Interface](./src/assets/screenshot2.png)

---

# 💾 LocalStorage Format

{
  "chat-id-1": {
    "name": "Chat N:1",
    "messages": [
      { "message": "Hello", "sender": "user", "id": "123" },
      { "message": "Hi there!", "sender": "robot", "id": "456" }
    ]
  }
}

---

# 🔧 Technologies Used

- React 18
- Vite
- LocalStorage API
- URLSearchParams
- crypto.randomUUID()
- SuperSimpleDev chatbot logic
- CSS
- GitHub Pages

---

# ▶️ Running the Project Locally

npm install
npm run dev

App runs at:
http://localhost:5173/

---

# 🌐 Live Demo

https://lopikola11-cmyk.github.io/vite-project/

---

# 🔮 Future Improvements

- Search chat feature
- Light/Dark mode
- Export/import chat history
- Replace robot with real AI (OpenAI / Groq API)
- Animations and transitions
- Voice input
- Improved mobile UI

---

# 🔐 License — All Rights Reserved

Copyright (c) 2025 Abderrahman Zerouali

All work is original.
Do not copy, modify, reuse, distribute, or sell any code or assets without written permission.

---

# 👤 Author

Abderrahman Zerouali  
Creator of ABDouchat – ChatGPT Clone  
100% original design, architecture, and implementation.

# 🚀 ABDouchat – ChatGPT Clone (React + Vite)

**ABDouchat** is a fully client-side **ChatGPT-style chat system**, designed and built from scratch by **Abderrahman Zerouali**.

This project behaves like a mini ChatGPT clone:
- Multiple chat sessions  
- Persistent conversations  
- Unique session URLs  
- Message history  
- Smart UI like real AI chat apps  
- Clean and scalable architecture  

Everything is handled on the frontend — no backend required.

---

# ⭐ Features

## 🔹 ChatGPT-Style Multi-Chat System
- Create unlimited chat sessions  
- Each chat gets a **unique ID** via `crypto.randomUUID()`  
- Auto-generated chat titles (`Chat N:1`, `Chat N:2`, etc.)

## 🔹 Persistent AI Chats (localStorage)
Every chat session stores:
- Messages  
- Sender (user or robot)  
- Unique message IDs  
- Timestamps  
- Session name  

Chats **never disappear**, even after closing or refreshing.

## 🔹 URL-Based Chat Sessions (Real ChatGPT Behavior)
Each session uses a sharable URL:


# 🎥 YouTube RAG based Application.

An AI-powered Chrome extension that lets you **ask questions about any YouTube video** and get answers based on its transcript — right inside your browser.

---

## ✨ What It Does

Whenever you're watching a YouTube video and feel curious about something being said — just click the extension, type your question, and get a helpful answer powered by AI.

✅ Summarizes what the video is about  
✅ Answers your questions from the video content  
✅ Works in multiple languages (English & Hindi)  
✅ Simple, clean chat UI inside the extension popup

---

## 📦 What's Inside

This project has two main parts:

### 🧠 Backend (FastAPI + LangChain)

- Extracts transcripts from YouTube videos
- Uses OpenAI + FAISS (vector search) to retrieve relevant content
- Answers your questions using RAG (Retrieval-Augmented Generation)

### 🧩 Chrome Extension

- Detects the currently playing YouTube video
- Sends the question + video ID to the backend
- Displays the response inside a neat chat-style popup

---

## 🛠️ How to Use

### 1. Clone the Repo & Set Up Backend

```bash
git clone https://github.com/yourusername/youtube-rag-chatbot.git
cd youtube-rag-chatbot/backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

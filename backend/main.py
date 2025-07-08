from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
from rag_model import get_video_insights

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/chat")
def chat(video_id: str = Query(...), question: str = Query(...)):
    return get_video_insights(video_id, question)

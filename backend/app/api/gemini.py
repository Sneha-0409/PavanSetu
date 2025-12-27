from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
import os
import google.generativeai as genai

router = APIRouter()

# Configure Gemini
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

model = genai.GenerativeModel("models/gemini-1.5-pro")

class ChatRequest(BaseModel):
    message: str

@router.post("/chat")
async def chat_with_gemini(data: ChatRequest):
    try:
        response = model.generate_content(
            data.message,
            safety_settings={
                "HARM_CATEGORY_DANGEROUS_CONTENT": "BLOCK_NONE"
            }
        )
        return {"reply": response.text}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

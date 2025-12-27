from fastapi import FastAPI
from dotenv import load_dotenv

load_dotenv()

from app.api.gemini import router as gemini_router

app = FastAPI(title="PAVAN SETU API")

app.include_router(gemini_router, prefix="/gemini", tags=["Gemini AI"])

@app.get("/")
def root():
    return {"message": "PAVAN SETU Backend Running"}

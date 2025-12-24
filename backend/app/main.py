from fastapi import FastAPI
from backend.app.api.aqi import router as aqi_router

app = FastAPI(title="PAVAN SETU API")

app.include_router(aqi_router)

@app.get("/")
def root():
    return {
        "message": "Welcome to PAVAN SETU - AI-driven Pollution Intelligence Platform"
    }

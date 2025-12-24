from fastapi import FastAPI
from backend.app.api.aqi import router as aqi_router
from backend.app.api.sources import router as sources_router

app = FastAPI(title="PAVAN SETU API")

app.include_router(aqi_router)
app.include_router(sources_router)

@app.get("/")
def root():
    return {
        "message": "Welcome to PAVAN SETU - AI-driven Pollution Intelligence Platform"
    }


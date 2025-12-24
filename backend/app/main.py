from fastapi import FastAPI

app = FastAPI(title="PAVAN SETU API")

@app.get("/")
def root():
    return {
        "message": "Welcome to PAVAN SETU - AI-driven Pollution Intelligence Platform"
    }

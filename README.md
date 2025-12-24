# PavanSetu
A portal that connects citizens with Government while taking care of the Pavan (air) Quality

Steps to create folder:

1. Inside PavanSetu create these folders:
backend
frontend
data
docs
assets
scripts
notebooks

2. cd backend

backend/
├── app/
│   ├── api/
│   ├── models/
│   ├── services/
│   ├── schemas/
│   └── main.py
 
 OR

Terminal command:
mkdir app
cd app
mkdir api models services schemas
touch main.py

3. From inside the main project folder (PAVANSETU), run:
pip install fastapi uvicorn

⚠️ If you get permission errors, use:
pip3 install fastapi uvicorn

4. Open this file
backend/app/main.py

Paste THIS code (copy exactly)
from fastapi import FastAPI

app = FastAPI(title="PAVAN SETU API")

@app.get("/")
def root():
    return {
        "message": "Welcome to PAVAN SETU – AI-driven Pollution Intelligence Platform"
    }

--You will see error dont worry continue further

5. Run the server
From PAVANSETU root folder, run:
uvicorn backend.app.main:app --reload

if error then run this: source .venv/bin/activate
then run again: uvicorn backend.app.main:app --reload

6.
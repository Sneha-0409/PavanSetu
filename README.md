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
--You will see error dont worry continue further

5. Run the server
From PAVANSETU root folder, run:
uvicorn backend.app.main:app --reload

if error then run this: source .venv/bin/activate
then run again: uvicorn backend.app.main:app --reload

6. Create this file:
backend/app/api/aqi.py
here this works: http://127.0.0.1:8000/api/aqi

7. aqi and forecast done
8. policy done
9. Source attribution done 
10. Backend setup complete

11. Frontend - Dashboard
Install frontend libraries
install vite

12. Install dependency
Run this inside pavan-setu-ui:
npm install react-google-charts

13. INSTALL MAPS LIBRARY
From: frontend/pavan-setu-ui
Run:
npm install @react-google-maps/api

14. Create an API Key - https://makersuite.google.com/app/apikey

15. Inside backend folder:
pip install google-generativeai python-dotenv

16. integrating real time gemini
pip install google-generativeai

from fastapi import APIRouter

router = APIRouter()

@router.get("/api/aqi")
def get_aqi():
    return {
        "city": "Delhi",
        "aqi": 215,
        "category": "Poor",
        "main_pollutant": "PM2.5"
    }

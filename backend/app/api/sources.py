from fastapi import APIRouter
from app.models.source_attribution import get_source_contribution


router = APIRouter()

@router.get("/api/sources")
def get_sources():
    aqi_value = 215  # dummy AQI value for now
    sources = get_source_contribution(aqi_value)

    return {
        "city": "Delhi",
        "aqi": aqi_value,
        "source_contribution_percentage": sources
    }

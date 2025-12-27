from fastapi import APIRouter
from app.models.aqi_forecasting import forecast_aqi

router = APIRouter()

@router.get("/api/forecast")
def get_forecast():
    current_aqi = 215  # dummy AQI value
    forecast = forecast_aqi(current_aqi)

    return {
        "city": "Delhi",
        "current_aqi": current_aqi,
        "forecast_aqi": forecast
    }

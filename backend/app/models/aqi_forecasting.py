def forecast_aqi(current_aqi: int):
    """
    Simple rule-based AQI forecasting logic.
    This simulates AI prediction for hackathon MVP.
    """

    forecast = {
        "24_hours": current_aqi + 10,
        "48_hours": current_aqi + 20,
        "72_hours": current_aqi + 30
    }

    return forecast

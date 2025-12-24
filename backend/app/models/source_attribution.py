def get_source_contribution(aqi_value: int):
    """
    Simple rule-based source attribution logic.
    This will later be replaced with ML models.
    """

    if aqi_value < 100:
        return {
            "traffic": 30,
            "industry": 25,
            "construction": 20,
            "stubble_burning": 15,
            "natural_dust": 10
        }

    elif 100 <= aqi_value < 200:
        return {
            "traffic": 35,
            "industry": 25,
            "construction": 20,
            "stubble_burning": 10,
            "natural_dust": 10
        }

    else:
        return {
            "traffic": 40,
            "industry": 30,
            "construction": 15,
            "stubble_burning": 10,
            "natural_dust": 5
        }

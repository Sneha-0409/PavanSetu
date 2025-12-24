def simulate_policy(policy_name: str, current_aqi: int):
    """
    Simulates AQI reduction based on policy intervention.
    Values are indicative for hackathon MVP.
    """

    policy_effects = {
        "odd_even": 0.18,          # 18% reduction
        "construction_ban": 0.08,  # 8% reduction
        "industry_shutdown": 0.20, # 20% reduction
        "stubble_control": 0.25    # 25% reduction
    }

    reduction_percentage = policy_effects.get(policy_name, 0)

    reduced_aqi = int(current_aqi * (1 - reduction_percentage))

    return {
        "policy": policy_name,
        "current_aqi": current_aqi,
        "reduction_percentage": int(reduction_percentage * 100),
        "projected_aqi": reduced_aqi
    }

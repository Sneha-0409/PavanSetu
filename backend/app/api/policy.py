from fastapi import APIRouter
from backend.app.models.policy_simulator import simulate_policy

router = APIRouter()

@router.get("/api/policy-simulation")
def policy_simulation(policy: str):
    current_aqi = 215  # dummy AQI
    result = simulate_policy(policy, current_aqi)

    return {
        "city": "Delhi",
        "policy_simulation_result": result
    }
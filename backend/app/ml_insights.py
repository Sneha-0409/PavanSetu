# ml_insights.py
# -----------------------------------
# Pavan Setu - ML Insights Module
# -----------------------------------

import os
import pandas as pd
import numpy as np

# -----------------------------------
# 1️⃣ Absolute path resolution (CORRECT)
# -----------------------------------

CURRENT_FILE = os.path.abspath(__file__)
APP_DIR = os.path.dirname(CURRENT_FILE)          # backend/app
DATA_DIR = os.path.join(APP_DIR, "data")         # backend/app/data
DATA_PATH = os.path.join(DATA_DIR, "delhi_aqi.csv")

print("📂 Loading data from:")
print(DATA_PATH)

# -----------------------------------
# 2️⃣ Load Dataset
# -----------------------------------

try:
    df = pd.read_csv(DATA_PATH)
except FileNotFoundError:
    raise FileNotFoundError("❌ delhi_aqi.csv not found in backend/app/data")

print("✅ Data loaded successfully")

# -----------------------------------
# 3️⃣ Clean & Prepare Data
# -----------------------------------

# Normalize column names
df.columns = df.columns.str.lower().str.strip()

# Expected AQI column names (handles multiple datasets)
AQI_COL = None
for col in ["aqi", "aqi_value", "overall_aqi"]:
    if col in df.columns:
        AQI_COL = col
        break

if AQI_COL is None:
    raise ValueError("❌ AQI column not found in dataset")

df[AQI_COL] = pd.to_numeric(df[AQI_COL], errors="coerce")
df.dropna(subset=[AQI_COL], inplace=True)

# -----------------------------------
# 4️⃣ AQI Classification Logic
# -----------------------------------

def classify_aqi(aqi):
    if aqi <= 50:
        return "Good"
    elif aqi <= 100:
        return "Satisfactory"
    elif aqi <= 200:
        return "Moderate"
    elif aqi <= 300:
        return "Poor"
    elif aqi <= 400:
        return "Very Poor"
    else:
        return "Severe"

df["aqi_category"] = df[AQI_COL].apply(classify_aqi)

# -----------------------------------
# 5️⃣ ML INSIGHTS (Statistical Intelligence)
# -----------------------------------

insights = {
    "average_aqi": round(df[AQI_COL].mean(), 2),
    "max_aqi": int(df[AQI_COL].max()),
    "min_aqi": int(df[AQI_COL].min()),
    "most_frequent_category": df["aqi_category"].mode()[0],
    "data_points": len(df)
}

# -----------------------------------
# 6️⃣ Health Advisory Generator
# -----------------------------------

def health_advisory(category):
    advisory_map = {
        "Good": "Air quality is good. Ideal for outdoor activities.",
        "Satisfactory": "Minor discomfort for sensitive people.",
        "Moderate": "People with respiratory issues should limit exposure.",
        "Poor": "Avoid prolonged outdoor exertion.",
        "Very Poor": "High risk. Stay indoors and use masks if necessary.",
        "Severe": "Emergency conditions. Avoid going outside."
    }
    return advisory_map.get(category, "No advisory available.")

insights["health_advisory"] = health_advisory(
    insights["most_frequent_category"]
)

# -----------------------------------
# 7️⃣ Simple Trend Analysis
# -----------------------------------

trend = "Stable"
if insights["average_aqi"] > 200:
    trend = "Worsening"
elif insights["average_aqi"] < 100:
    trend = "Improving"

insights["trend"] = trend

# -----------------------------------
# 8️⃣ OUTPUT (Console / API Ready)
# -----------------------------------

print("\n📊 AQI ML INSIGHTS")
print("---------------------------")
for k, v in insights.items():
    print(f"{k.replace('_', ' ').title()}: {v}")

# -----------------------------------
# 9️⃣ Reusable Function for FastAPI
# -----------------------------------

def get_ml_insights():
    """
    Returns AQI insights as dictionary (for API use)
    """
    return insights

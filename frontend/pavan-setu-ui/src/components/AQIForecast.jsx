export default function AQIForecast() {
    const forecast = [
        { day: "Tomorrow", aqi: 230 },
        { day: "Mon", aqi: 210 },
        { day: "Tue", aqi: 195 },
        { day: "Wed", aqi: 170 },
        { day: "Thu", aqi: 160 },
        { day: "Fri", aqi: 180 },
        { day: "Sat", aqi: 200 },
    ];

    return (
        <div style={styles.container}>
            <h3 style={styles.heading}>AQI Forecast (Next 7 Days)</h3>

            <div style={styles.grid}>
                {forecast.map((f) => (
                    <div
                        key={f.day}
                        style={{
                            ...styles.card,
                            background: getBackground(f.aqi),
                            boxShadow: getShadow(f.aqi),
                        }}
                        className="card-hover"
                    >
                        <span style={styles.day}>{f.day}</span>

                        <div style={styles.aqiRow}>
                            <span style={styles.aqi}>{f.aqi}</span>
                            <span style={styles.unit}>AQI</span>
                        </div>

                        <span style={styles.status}>{getLabel(f.aqi)}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

/* ---------- HELPERS ---------- */

const getBackground = (aqi) => {
    if (aqi <= 100)
        return "linear-gradient(135deg, #22c55e, #16a34a)";
    if (aqi <= 200)
        return "linear-gradient(135deg, #f59e0b, #d97706)";
    return "linear-gradient(135deg, #ef4444, #dc2626)";
};

const getShadow = (aqi) => {
    if (aqi <= 100) return "0 12px 30px rgba(34,197,94,0.35)";
    if (aqi <= 200) return "0 12px 30px rgba(245,158,11,0.35)";
    return "0 12px 30px rgba(239,68,68,0.35)";
};

const getLabel = (aqi) => {
    if (aqi <= 100) return "Good";
    if (aqi <= 200) return "Moderate";
    return "Poor";
};

/* ---------- STYLES ---------- */

const styles = {
    container: {
        background: "#fff",
        borderRadius: "20px",
        padding: "28px",
        marginTop: "36px",
        boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
    },
    heading: {
        marginBottom: "20px",
        fontSize: "18px",
        fontWeight: 600,
    },
    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
        gap: "20px",
    },
    card: {
        borderRadius: "18px",
        padding: "18px",
        color: "#fff",
        textAlign: "center",
    },
    day: {
        fontSize: "14px",
        opacity: 0.9,
    },
    aqiRow: {
        display: "flex",
        justifyContent: "center",
        alignItems: "baseline",
        gap: "6px",
        margin: "10px 0",
    },
    aqi: {
        fontSize: "32px",
        fontWeight: 700,
        lineHeight: 1,
    },
    unit: {
        fontSize: "14px",
        opacity: 0.85,
    },
    status: {
        fontSize: "13px",
        opacity: 0.9,
    },
};

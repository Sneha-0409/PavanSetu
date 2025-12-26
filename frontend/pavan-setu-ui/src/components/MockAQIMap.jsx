export default function MockAQIMap() {
    const cities = [
        { name: "Delhi", aqi: 215, color: "#ef4444" },
        { name: "Mumbai", aqi: 165, color: "#f59e0b" },
        { name: "Kolkata", aqi: 190, color: "#f59e0b" },
        { name: "Bengaluru", aqi: 110, color: "#22c55e" },
    ];

    return (
        <>
            <h3>City AQI Map</h3>
            <p style={{ color: "var(--text-muted)", marginBottom: "16px" }}>
                Google Maps–ready AQI visualization (mocked)
            </p>

            <div style={styles.map}>
                {cities.map((c) => (
                    <div
                        key={c.name}
                        style={{
                            ...styles.marker,
                            background: c.color,
                        }}
                    >
                        {c.name} · {c.aqi}
                    </div>
                ))}
            </div>

            <div style={styles.legend}>
                <span>🟥 Poor</span>
                <span>🟨 Moderate</span>
                <span>🟩 Good</span>
            </div>
        </>
    );
}

const styles = {
    map: {
        height: "260px",
        borderRadius: "20px",
        background: "linear-gradient(180deg, #0d1a16, #07110d)",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "inset 0 0 40px rgba(0,0,0,0.6)",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
    },
    marker: {
        padding: "8px 14px",
        borderRadius: "999px",
        fontSize: "14px",
        fontWeight: 600,
        color: "#020617",
    },
    legend: {
        display: "flex",
        gap: "16px",
        marginTop: "12px",
        fontSize: "14px",
        color: "var(--text-muted)",
    },
};

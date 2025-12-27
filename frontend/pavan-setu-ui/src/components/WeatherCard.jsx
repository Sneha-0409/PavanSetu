export default function WeatherCard() {
    return (
        <div style={styles.card}>
            <div style={styles.left}>
                <div style={styles.icon}>🌫️</div>
                <div>
                    <h2 style={styles.temp}>12°C</h2>
                    <p style={styles.condition}>Mist</p>
                </div>
            </div>

            <div style={styles.divider} />

            <div style={styles.right}>
                <div>
                    <span style={styles.emoji}>💧</span>
                    <p style={styles.value}>88%</p>
                    <small>Humidity</small>
                </div>
                <div>
                    <span style={styles.emoji}>💨</span>
                    <p style={styles.value}>6 km/h</p>
                    <small>Wind</small>
                </div>
            </div>
        </div>
    );
}

const styles = {
    card: {
        background: "#ffffff",
        borderRadius: "18px",
        padding: "22px 28px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
        marginTop: "28px",
    },
    left: {
        display: "flex",
        alignItems: "center",
        gap: "18px",
    },
    icon: {
        fontSize: "42px",
    },
    temp: {
        margin: 0,
        fontSize: "32px",
        fontWeight: 700,
    },
    condition: {
        margin: 0,
        color: "#64748b",
        fontSize: "14px",
    },
    divider: {
        width: "1px",
        height: "52px",
        background: "#e5e7eb",
    },
    right: {
        display: "flex",
        gap: "40px",
        textAlign: "center",
    },
    emoji: {
        fontSize: "20px",
    },
    value: {
        margin: "6px 0",
        fontWeight: 600,
    },
};

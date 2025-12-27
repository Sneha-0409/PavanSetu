// KPICard.jsx

const getAQIColor = (aqi) => {
    if (aqi <= 50) return "#2ecc71";      // Good
    if (aqi <= 100) return "#f1c40f";     // Moderate
    if (aqi <= 200) return "#e67e22";     // Poor
    if (aqi <= 300) return "#e74c3c";     // Unhealthy
    return "#8e44ad";                     // Hazardous
};

const getAQIBackground = (aqi) => {
    if (aqi <= 50)
        return "linear-gradient(135deg, #2ecc71, #27ae60)";
    if (aqi <= 100)
        return "linear-gradient(135deg, #f1c40f, #f39c12)";
    if (aqi <= 200)
        return "linear-gradient(135deg, #e67e22, #d35400)";
    if (aqi <= 300)
        return "linear-gradient(135deg, #e74c3c, #c0392b)";
    return "linear-gradient(135deg, #8e44ad, #6c3483)";
};

export default function KPICard({ title, value, status }) {
    return (
        <div
            style={{
                ...styles.card,
                background: getAQIBackground(value),
                boxShadow: `0 18px 40px ${getAQIColor(value)}55`,
            }}
        >
            <p style={styles.title}>{title}</p>

            <h2 style={styles.value}>{value}</h2>

            {status && (
                <span style={styles.status}>{status}</span>
            )}
        </div>
    );
}

const styles = {
    card: {
        borderRadius: "18px",
        padding: "20px",
        background: "linear-gradient(135deg, #ffeded, #ffe4e4)",
        boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
        color: "#ffffff",
        width: "80%",
    },

    title: {
        fontSize: "14px",
        opacity: 0.85,
        marginBottom: "6px",
    },

    value: {
        fontSize: "32px",
        fontWeight: 700,
        margin: "4px 0",
    },

    status: {
        fontSize: "14px",
        marginTop: "6px",
        opacity: 0.9,
    },
    
};

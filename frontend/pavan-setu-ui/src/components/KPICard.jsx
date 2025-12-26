export default function KPICard({ title, value, status, color }) {
    return (
        <div style={styles.card}>
            <p style={styles.title}>{title}</p>
            <h2 style={styles.value}>{value}</h2>
            {status && (
                <span style={{ ...styles.status, color }}>{status}</span>
            )}
        </div>
    );
}

const styles = {
    card: {
        background: "var(--bg-card)",
        backdropFilter: "blur(18px)",
        borderRadius: "18px",
        padding: "22px",
        minWidth: "220px",
        border: "1px solid var(--border-soft)",
        boxShadow: "0 15px 35px rgba(0,0,0,0.35)",
    },

    title: {
        color: "var(--text-muted)",
        fontSize: "14px",
        marginBottom: "6px",
    },
    value: {
        fontSize: "28px",
        margin: 0,
        fontWeight: 700,
    },
    status: {
        marginTop: "6px",
        display: "block",
        fontSize: "14px",
    },
};

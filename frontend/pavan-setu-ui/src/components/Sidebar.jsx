export default function Sidebar() {
    const items = [
        "Dashboard",
        "City AQI",
        "Forecast",
        "Policy Simulation",
        "AI Assistant",
    ];

    return (
        <aside style={styles.sidebar}>
            <div style={styles.logo}>
                🌿 <span>PAVAN SETU</span>
            </div>

            <nav style={styles.nav}>
                {items.map((item) => (
                    <div key={item} style={styles.navItem}>
                        {item}
                    </div>
                ))}
            </nav>
        </aside>
    );
}

const styles = {
    sidebar: {
        width: "260px",
        minHeight: "100vh",
        padding: "28px",
        background: "linear-gradient(180deg, #173528, #0b1612)",
        backdropFilter: "blur(12px)",
        borderRight: "1px solid rgba(255,255,255,0.08)",
        color: "var(--text-main)",
    },
    logo: {
        fontSize: "18px",
        fontWeight: 600,
        marginBottom: "40px",
        display: "flex",
        alignItems: "center",
        gap: "8px",
    },
    nav: {
        display: "flex",
        flexDirection: "column",
        gap: "14px",
    },
    navItem: {
        padding: "12px 16px",
        borderRadius: "12px",
        cursor: "pointer",
        color: "var(--text-muted)",
        background: "rgba(255,255,255,0.04)",
    },
};

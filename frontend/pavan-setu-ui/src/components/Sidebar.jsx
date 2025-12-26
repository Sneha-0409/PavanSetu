import logo from "../assets/pavansetu-logo.png";

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
            <div style={styles.logoWrapper}>
                <div style={styles.logoContainer}>
                    <img src={logo} alt="Pavan Setu Logo" style={styles.logoImg} />
                </div>

                <div>
                    <h1 style={styles.logoText}>PavanSetu</h1>
                    <p style={styles.logoTagline}>Air Quality Intelligence</p>
                </div>
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
        padding: "24px",
        background: "rgba(20, 40, 30, 0.9)",
        backdropFilter: "blur(12px)",
        color: "#fff",
    },

    logo: {
        display: "flex",
        alignItems: "center",
        gap: "12px",
        fontWeight: "700",
        fontSize: "18px",
        marginBottom: "32px",
    },

    logoWrapper: {
        display: "flex",
        alignItems: "center",
        gap: "14px",
        marginBottom: "28px",
    },

    logoContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
    },

    logoCard: {
        width: "56px",
        height: "56px",
        borderRadius: "16px",
        overflow: "hidden",
        background: "rgba(255,255,255,0.14)",
        backdropFilter: "blur(10px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid rgba(255,255,255,0.25)",
        boxShadow: "0 0 20px rgba(143,211,168,0.3)",
    },

    logoImg: {
        width: "50px",      // perfect clarity size
        height: "auto",     // preserves aspect ratio
        objectFit: "contain",
    },


    logoText: {
        margin: 0,
        fontSize: "20px",
        fontWeight: "700",
        letterSpacing: "0.5px",
        color: "#ffffff",
    },

    logoTagline: {
        margin: 0,
        fontSize: "11px",
        color: "#8fd3a8",
        letterSpacing: "0.8px",
        textTransform: "uppercase",
    },

    nav: {
        display: "flex",
        flexDirection: "column",
        gap: "12px",
    },

    logoBox: {
        background: "#ffffff",
        padding: "6px",
        borderRadius: "10px",
    },

    navItem: {
        padding: "10px 14px",
        borderRadius: "10px",
        cursor: "pointer",
        background: "rgba(255,255,255,0.08)",
    },
};


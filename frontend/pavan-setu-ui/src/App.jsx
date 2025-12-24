

// import { useState } from "react";
// import "./theme/theme.css";

// export default function App() {
//   const [theme, setTheme] = useState("dark");

//   const toggleTheme = () => {
//     setTheme(theme === "dark" ? "light" : "dark");
//   };

//   return (
//     <div
//       data-theme={theme}
//       style={{
//         backgroundColor: "var(--bg-main)",
//         minHeight: "100vh",
//         color: "var(--text-main)",
//         padding: "24px",
//         fontFamily: "system-ui",
//       }}
//     >
//       {/* HEADER */}
//       <div style={{ display: "flex", justifyContent: "space-between" }}>
//         <h1>🌿 PAVAN SETU</h1>

//         <button
//           onClick={toggleTheme}
//           style={{
//             background: "var(--bg-card)",
//             color: "var(--text-main)",
//             border: "none",
//             borderRadius: "8px",
//             padding: "8px 14px",
//             cursor: "pointer",
//           }}
//         >
//           {theme === "dark" ? "🌞 Light" : "🌙 Dark"}
//         </button>
//       </div>

//       {/* KPI CARDS */}
//       <div style={{ display: "flex", gap: "20px", marginTop: "24px" }}>
//         <Card title="Current AQI" value="215" status="Poor" />
//         <Card title="Main Pollutant" value="PM2.5" />
//         <Card title="24h Forecast" value="225" />
//       </div>
//     </div>
//   );
// }

// function Card({ title, value, status }) {
//   return (
//     <div
//       style={{
//         backgroundColor: "var(--bg-card)",
//         padding: "20px",
//         borderRadius: "16px",
//         minWidth: "200px",
//         boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
//       }}
//     >
//       <p style={{ color: "var(--text-muted)" }}>{title}</p>
//       <h2>{value}</h2>
//       {status && <p style={{ color: "#ff6b6b" }}>{status}</p>}
//     </div>
//   );
// }

import { useState } from "react";
import "./theme/theme.css";

export default function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div data-theme={theme} style={styles.app}>
      {/* SIDEBAR */}
      <aside style={styles.sidebar}>
        <h2 style={{ marginBottom: "32px" }}>🌿 PAVAN SETU</h2>

        <nav style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <NavItem label="Dashboard" />
          <NavItem label="City AQI" />
          <NavItem label="Forecast" />
          <NavItem label="Policy Simulation" />
          <NavItem label="AI Assistant" />
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main style={styles.main}>
        {/* HEADER */}
        <div style={styles.header}>
          <h1>Air Quality Dashboard</h1>

          <button onClick={toggleTheme} style={styles.themeBtn}>
            {theme === "dark" ? "🌞 Light" : "🌙 Dark"}
          </button>
        </div>

        {/* KPI CARDS */}
        <div style={styles.cards}>
          <KPICard title="Current AQI" value="215" status="Poor" />
          <KPICard title="Main Pollutant" value="PM2.5" />
          <KPICard title="24h Forecast" value="225" />
        </div>
      </main>
    </div>
  );
}

function NavItem({ label }) {
  return (
    <div
      style={{
        padding: "10px 14px",
        borderRadius: "10px",
        cursor: "pointer",
        background: "rgba(255,255,255,0.05)",
      }}
    >
      {label}
    </div>
  );
}

function KPICard({ title, value, status }) {
  return (
    <div style={styles.card}>
      <p style={{ color: "var(--text-muted)" }}>{title}</p>
      <h2>{value}</h2>
      {status && <p style={{ color: "#ff6b6b" }}>{status}</p>}
    </div>
  );
}

const styles = {
  app: {
    display: "flex",
    backgroundColor: "var(--bg-main)",
    color: "var(--text-main)",
    minHeight: "100vh",
    fontFamily: "system-ui",
  },
  sidebar: {
    width: "240px",
    padding: "24px",
    background: "var(--bg-card)",
  },
  main: {
    flex: 1,
    padding: "24px",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "24px",
  },
  themeBtn: {
    background: "var(--bg-card)",
    border: "none",
    padding: "8px 14px",
    borderRadius: "8px",
    color: "var(--text-main)",
    cursor: "pointer",
  },
  cards: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
  },
  card: {
    background: "var(--bg-card)",
    padding: "20px",
    borderRadius: "16px",
    minWidth: "220px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
  },
};

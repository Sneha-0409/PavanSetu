

// // import { useState } from "react";
// // import { Chart } from "react-google-charts";
// // import "./theme/theme.css";
// // import MockAQIMap from "./components/MockAQIMap";
// // import GeminiAssistant from "./components/GeminiAssistant";

// // const aqiData = [
// //   ["Hour", "AQI"],
// //   ["6 AM", 180],
// //   ["9 AM", 195],
// //   ["12 PM", 210],
// //   ["3 PM", 225],
// //   ["6 PM", 215],
// //   ["9 PM", 205],
// // ];

// // export default function App() {
// //   const [theme, setTheme] = useState("light");

// //   return (
// //     <div data-theme={theme} style={styles.app}>
// //       {/* SIDEBAR */}
// //       <aside style={styles.sidebar}>
// //         <h2>🌿 PAVAN SETU</h2>
// //         {["Dashboard", "City AQI", "Forecast", "Policy Simulation", "AI Assistant"].map(
// //           (i) => (
// //             <div key={i} style={styles.nav}>{i}</div>
// //           )
// //         )}
// //       </aside>

// //       {/* MAIN */}
// //       <main style={styles.main}>
// //         <div style={styles.header}>
// //           <h1>Air Quality Dashboard</h1>
// //           <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
// //             {theme === "dark" ? "🌞 Light" : "🌙 Dark"}
// //           </button>
// //         </div>

// //         <div style={styles.cards}>
// //           <Card title="Current AQI" value="215" status="Poor" />
// //           <Card title="Main Pollutant" value="PM2.5" />
// //           <Card title="24h Forecast" value="225" />
// //         </div>

// //         <div style={styles.cardLarge}>
// //           <h3>AQI Trend (Today)</h3>
// //           <Chart chartType="LineChart" width="100%" height="300px" data={aqiData} />
// //         </div>

// //         {/* MAP + AI GRID */}
// //         <div style={styles.grid}>
// //           <div style={styles.cardLarge}><MockAQIMap /></div>
// //           <div style={styles.cardLarge}><GeminiAssistant /></div>
// //         </div>
// //       </main>
// //     </div>
// //   );
// // }

// // function Card({ title, value, status }) {
// //   return (
// //     <div style={styles.card}>
// //       <p>{title}</p>
// //       <h2>{value}</h2>
// //       {status && <span style={{ color: "#ef4444" }}>{status}</span>}
// //     </div>
// //   );
// // }

// // const styles = {
// //   app: { display: "flex", minHeight: "100vh" },
// //   sidebar: {
// //     width: "220px",
// //     padding: "20px",
// //     background: "var(--bg-card)",
// //   },
// //   nav: {
// //     marginTop: "16px",
// //     padding: "10px",
// //     borderRadius: "10px",
// //     background: "rgba(255,255,255,0.05)",
// //   },
// //   main: { flex: 1, padding: "24px" },
// //   header: { display: "flex", justifyContent: "space-between" },
// //   cards: { display: "flex", gap: "20px", marginBottom: "40px" },
// //   card: {
// //     background: "var(--bg-card)",
// //     padding: "20px",
// //     borderRadius: "16px",
// //     minWidth: "200px",
// //   },
// //   cardLarge: {
// //     background: "var(--bg-card)",
// //     padding: "24px",
// //     borderRadius: "20px",
// //     marginBottom: "40px",
// //   },
// //   grid: {
// //     display: "grid",
// //     gridTemplateColumns: "2fr 1fr",
// //     gap: "24px",
// //   },
// // };

// import Sidebar from "./components/Sidebar";
// import Header from "./components/Header";
// import KPICard from "./components/KPICard";
// import MockAQIMap from "./components/MockAQIMap";
// import GeminiAssistant from "./components/GeminiAssistant";
// import "./theme/theme.css";

// export default function App() {
//   return (
//     <div style={styles.app}>
//       <Sidebar />

//       <main style={styles.main}>
//         <Header />

//         <div style={styles.kpiRow}>
//           <KPICard title="Current AQI" value="215" status="Poor" color="var(--accent-red)" />
//           <KPICard title="PM2.5 Level" value="PM2.5" />
//           <KPICard title="Outdoor AQI" value="225" />
//           <KPICard title="Health Advisory" value="Limit Outdoor Activity" />
//         </div>

//         <MockAQIMap />
//         <GeminiAssistant />
//       </main>
//     </div>
//   );
// }

// const styles = {
//   app: {
//     display: "flex",
//     background: "var(--bg-main)",
//     color: "var(--text-main)",
//     minHeight: "100vh",
//   },
//   main: {
//     flex: 1,
//     padding: "32px",
//   },
//   kpiRow: {
//     display: "flex",
//     gap: "20px",
//     marginBottom: "40px",
//     flexWrap: "wrap",
//   },
// };

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import KPICard from "./components/KPICard";
import MockAQIMap from "./components/MockAQIMap";
import AQITrend from "./components/AQITrend";
import WeatherCard from "./components/WeatherCard";
import AQIForecast from "./components/AQIForecast";
import GeminiAssistant from "./components/GeminiAssistant";
import PolicySimulation from "./components/PolicySimulation";




import "./App.css";

export default function App() {
  // return (
  //   <div className="app">
  //     <Sidebar />

  //     <main className="main">
  //       <Header />

  //       <div className="kpi-grid">
  //         <KPICard title="Current AQI" value={215} status="Poor" />
  //         <KPICard title="PM2.5 Level" value={145} />
  //         <KPICard title="Outdoor AQI" value={225} />
  //       </div>

  //       <MockAQIMap />
  //     </main>
  //   </div>
  // );
  return (
    <div className="app-layout">
      <Sidebar />

      <main className="main-content">
        <Header />

        <section className="kpi-grid">
          <KPICard title="Current AQI" value={215} status="Poor" />
          <KPICard title="PM2.5 Level" value={145} />
          <KPICard title="Outdoor AQI" value={225} />
        </section>
        <div className="aqi-scale">
          <span className="good">Good</span>
          <span className="moderate">Moderate</span>
          <span className="poor">Poor</span>
          <span className="unhealthy">Unhealthy</span>
        </div>
        <div style={{ display: "flex", gap: "32px" }}>
        </div>



        <section className="map-section">
          <MockAQIMap />
          <AQITrend />
          <WeatherCard />
          <AQIForecast />
          <GeminiAssistant />
          <PolicySimulation />
        </section>
      </main>
    </div>
  );

}

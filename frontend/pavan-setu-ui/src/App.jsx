

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

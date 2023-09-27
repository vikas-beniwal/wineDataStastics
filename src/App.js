import React from "react";
import "./App.css";
import StatisticsTable from "./StatisticsTable";
import wineData from "./wineData.json"; // Replace with your data source

function App() {
  return (
    <div className="App">
      <h1>Wine Data Statistics</h1>
      <StatisticsTable data={wineData} property="Flavanoids" />
    </div>
  );
}

export default App;

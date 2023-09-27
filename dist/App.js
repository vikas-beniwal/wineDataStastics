import React from "react";
import "./App.css";
import StatisticsTable from "./StatisticsTable";
import wineData from "./wineData.json"; // Replace with your data source

function App() {
  return /*#__PURE__*/React.createElement("div", {
    className: "App"
  }, /*#__PURE__*/React.createElement("h1", null, "Wine Data Statistics"), /*#__PURE__*/React.createElement(StatisticsTable, {
    data: wineData,
    property: "Flavanoids"
  }));
}
export default App;
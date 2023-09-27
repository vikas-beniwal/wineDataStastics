import React from 'react';
import { calculateMean, calculateMedian, calculateMode, calculateGamma } from './utils';
const StatisticsTable = ({
  data,
  property
}) => {
  // console.log(data, 'data')
  const classList = [...new Set(data.map(wine => wine.Alcohol))];
  const gammaProperties = data.map(item => calculateGamma(item));
  const newData = data.map((item, index) => {
    return {
      ...item,
      "gamma": gammaProperties[index]
    };
  });
  //  console.log(newData, 'gammaProperties11');
  const getPropertyValues = (property, classNumber) => {
    console.log(property, 'pppppppp');
    if (property === "Flavanoids") {
      return calculateMean(data.filter(wine => wine.Alcohol === classNumber).map(wine => wine[property])).toFixed(3);
    }
    if (property === "gamma") {
      const filtered = newData.filter(wine => wine.Alcohol === classNumber);
      console.log(filtered, 'filter');
      console.log(filtered.map(wine => wine[property]));
      return calculateMean(newData.filter(wine => wine.Alcohol === classNumber).map(wine => wine[property])).toFixed(3);
    }
  };
  const getPropertyMedians = (property, classNumber) => {
    if (property === "Flavanoids") {
      return calculateMedian(data.filter(wine => wine.Alcohol === classNumber).map(wine => wine[property])).toFixed(3);
    }
    if (property === "gamma") {
      return calculateMedian(newData.filter(wine => wine.Alcohol === classNumber).map(wine => wine[property])).toFixed(3);
    }
  };
  const getPropertyModes = (property, classNumber) => {
    if (property === "Flavanoids") {
      return calculateMode(data.filter(wine => wine.Alcohol === classNumber).map(wine => wine[property])).toFixed(3);
    }
    if (property === "gamma") {
      return calculateMode(newData.filter(wine => wine.Alcohol === classNumber).map(wine => wine[property])).toFixed(3);
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("h1", null, "Flavanoids Statistics"), /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Measure"), classList.map(classNumber => /*#__PURE__*/React.createElement("th", {
    key: classNumber
  }, "Class ", classNumber)))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, property, " Mean"), classList.map(classNumber => /*#__PURE__*/React.createElement("td", {
    key: classNumber
  }, getPropertyValues(property, classNumber)))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, property, " Median"), classList.map(classNumber => /*#__PURE__*/React.createElement("td", {
    key: classNumber
  }, getPropertyMedians(property, classNumber)))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, property, " Mode"), classList.map(classNumber => /*#__PURE__*/React.createElement("td", {
    key: classNumber
  }, getPropertyModes(property, classNumber)))))), /*#__PURE__*/React.createElement("h1", null, "Gamma Statistics"), /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Measure"), classList.map(classNumber => /*#__PURE__*/React.createElement("th", {
    key: classNumber
  }, "Class ", classNumber)))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Gamma Mean"), classList.map(classNumber => /*#__PURE__*/React.createElement("td", {
    key: classNumber
  }, getPropertyValues("gamma", classNumber)))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, " Gamma Median"), classList.map(classNumber => /*#__PURE__*/React.createElement("td", {
    key: classNumber
  }, getPropertyMedians("gamma", classNumber)))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Gamma Mode"), classList.map(classNumber => /*#__PURE__*/React.createElement("td", {
    key: classNumber
  }, getPropertyModes("gamma", classNumber)))))));
};
export default StatisticsTable;
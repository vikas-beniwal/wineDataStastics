import React from 'react';
import { calculateMean, calculateMedian, calculateMode,calculateGamma } from './utils';

const StatisticsTable = ({ data, property }) => {
  const classList = [...new Set(data.map((wine) => wine.Alcohol))];
  const gammaProperties = data.map((item)=>calculateGamma(item))
  const newData = data.map((item, index)=>{return{...item , "gamma":gammaProperties[index]}})
  const getPropertyValues = (property, classNumber) => {
=    if(property==="Flavanoids"){
      return calculateMean(
        data
          .filter((wine) => wine.Alcohol === classNumber)
          .map((wine) => wine[property])
      ).toFixed(3);
    }if(property==="gamma"){
      return calculateMean(
        newData
          .filter((wine) => wine.Alcohol === classNumber)
          .map((wine) => wine[property])
      ).toFixed(3);
    }
    
  };

  const getPropertyMedians = (property, classNumber) => {
    if(property==="Flavanoids"){
      return calculateMedian(
        data
          .filter((wine) => wine.Alcohol === classNumber)
          .map((wine) => wine[property])
      ).toFixed(3);

    }
    if(property==="gamma"){
      return calculateMedian(
        newData
          .filter((wine) => wine.Alcohol === classNumber)
          .map((wine) => wine[property])
      ).toFixed(3);
      
    }

  };

  const getPropertyModes = (property, classNumber) => {
    if(property==="Flavanoids"){
      return calculateMode(
        data
          .filter((wine) => wine.Alcohol === classNumber)
          .map((wine) => wine[property])
      ).toFixed(3);;

    }
    if(property==="gamma"){
      return calculateMode(
        newData
          .filter((wine) => wine.Alcohol === classNumber)
          .map((wine) => wine[property])
      ).toFixed(3);;
    }
    
  };

  return (
    <div className='container'>
      <h1>Flavanoids Statistics</h1>
      <table>
        <thead>
          <tr>
            <th>Measure</th>
            {classList.map((classNumber) => (
              <th key={classNumber}>Class {classNumber}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{property} Mean</td>
            {classList.map((classNumber) => (
              <td key={classNumber}>{getPropertyValues(property, classNumber)}</td>
            ))}
          </tr>
          <tr>
            <td>{property} Median</td>
            {classList.map((classNumber) => (
              <td key={classNumber}>{getPropertyMedians(property, classNumber)}</td>
            ))}
          </tr>
          <tr>
            <td>{property} Mode</td>
            {classList.map((classNumber) => (
              <td key={classNumber}>{getPropertyModes(property, classNumber)}</td>
            ))}
          </tr>
        </tbody>
      </table>
      <h1>Gamma Statistics</h1>
      <table>
        <thead>
          <tr>
            <th>Measure</th>
            {classList.map((classNumber) => (
              <th key={classNumber}>Class {classNumber}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Gamma Mean</td>
            {classList.map((classNumber) => (
              <td key={classNumber}>{getPropertyValues("gamma", classNumber)}</td>
            ))}
          </tr>
          <tr>
            <td> Gamma Median</td>
            {classList.map((classNumber) => (
              <td key={classNumber}>{getPropertyMedians("gamma", classNumber)}</td>
            ))}
          </tr>
          <tr>
            <td>Gamma Mode</td>
            {classList.map((classNumber) => (
              <td key={classNumber}>{getPropertyModes("gamma", classNumber)}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StatisticsTable;

// src/utils.js

export function calculateGamma(dataPoint) {
  return dataPoint.Ash * dataPoint.Hue / dataPoint.Magnesium;
}

// Function to calculate the mean of an array
export function calculateMean(arr) {
  const sum = arr.reduce((total, val) => total + parseFloat(val), 0);
  return sum / arr.length;
}

// Function to calculate the median of an array
export function calculateMedian(arr) {
  const sortedArr = arr.slice().sort((a, b) => a - b);
  const middle = Math.floor(sortedArr.length / 2);
  if (sortedArr.length % 2 === 0) {
    return (sortedArr[middle - 1] + sortedArr[middle]) / 2;
  } else {
    return sortedArr[middle];
  }
}

// Function to calculate the mode of an array
export function calculateMode(arr) {
  const freqMap = {};
  arr.forEach(item => {
    freqMap[item] = (freqMap[item] || 0) + 1;
  });
  let mode;
  let maxFreq = 0;
  for (const item in freqMap) {
    if (freqMap[item] > maxFreq) {
      maxFreq = freqMap[item];
      mode = item;
    }
  }
  return parseFloat(mode);
}
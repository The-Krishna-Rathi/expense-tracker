import React from "react";
import "./Chart.css";
import ChartBars from "./ChartBars";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((datapoint) => datapoint.value);
  const totalMaxVal = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBars
          key={dataPoint.label}
          value={dataPoint.value}
          label={dataPoint.label}
          maxVal={totalMaxVal}
        ></ChartBars>
      ))}
    </div>
  );
};

export default Chart;

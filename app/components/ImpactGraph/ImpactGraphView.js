import React from 'react';
import { Link } from 'react-router';

import { ScatterPlot } from 'react-d3-basic';


const ImpactGraphView = ({props}) => {

  const { data } = props;
  console.log("Attempting to render: ", data);
  const width = 500,
  height = 500,
  margins = {left: 50, right: 50, top: 50, bottom: 50},
  // chart series,
  // field: is what field your data want to be selected
  // name: the name of the field that display in legend
  // color: what color is the line
  chartSeries = [
    {
      field: 'impact',
      name: 'Impact',
      symbol: 'circle',
      symbolSize: 20
    }
  ]
  // your x accessor
  const x = (d) => {
    return d.uncertainty};

  const xScale = 'linear',
        xRange = [0, width - margins.left - margins.right],
        xAxisClassName = 'X-axis',
        xLabel = 'Uncertainty',
        xLabelPosition = 'bottom',
        xDomain = [0, 10],
        xOrient = 'bottom'

  const yScale = 'linear',
        yLabel = 'Impact',
        yOrient = 'left',
        yTickOrient = 'left',
        yDomain = [0, 10],
        yRange = [height - margins.top - margins.bottom, 0],
        yAxisClassName = 'y-axis',
        scatterClassName = 'test-line-dot-class'

  return (data.length == 0) ?
    <div>
      <p>No data</p>
    </div>
  : <div>
      <h3>ImpactGraphView</h3>
      <ScatterPlot
        data={data}
        width={width}
        height={height}
        margins={margins}
        chartSeries={chartSeries}
        x = {x}
        xScale = {xScale}
        xRange = {xRange}
        xAxisClassName = {xAxisClassName}
        xLabel = {xLabel}
        xLabelPosition = {xLabelPosition}
        xOrient = {xOrient}
        xDomain = {xDomain}

        yScale = {yScale}
        yOrient = {yOrient}
        yLabel = {yLabel}
        yTickOrient = {yTickOrient}
        yDomain = {yDomain}
        yRange = {yRange}
        yAxisClassName = {yAxisClassName}

        scatterClassName = {scatterClassName}

        />
    </div>
}

export default ImpactGraphView;

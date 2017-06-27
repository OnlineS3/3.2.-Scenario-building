import React from 'react';
import { Link } from 'react-router';

const produceList = (elements) => {
  return (
    <ul>
      {elements.map((e, i) => <li key={i}>{e.title}</li>)}
    </ul>
  )
}

const PestleBoxView = ({box}) => {
  const { category, trends, uncertainties } = box
  return (
    <div>
      <div>
        <h2>{category}</h2>
      </div>
      <div>
        <b>Trends</b>
        {produceList(trends)}
      </div>
      <div>
        <b>Uncertainties</b>
        {produceList(uncertainties)}
      </div>
    </div>
  )
}

export default PestleBoxView;

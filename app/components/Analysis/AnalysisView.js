import React from 'react';
import { Link } from 'react-router';

import Header from '../Header';
import Table from '../Table';
import ImpactGraph from '../ImpactGraph';


const AnalysisView = (props) => {
  const analysisId = props.analysisId;
  <div className="analysisView">
    <h2>Analysis</h2>
    <p>{analysisId}</p>
    <ImpactGraph />
  </div>

}

// <a href="/logout">Logout</a>


export default AnalysisView;

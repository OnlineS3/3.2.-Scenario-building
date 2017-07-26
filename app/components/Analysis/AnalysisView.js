import React from 'react';
import { Link } from 'react-router';

import Header from '../Header';
import Table from '../Table';
import ImpactGraph from '../ImpactGraph';


const AnalysisView = (props) => {
  const { analysisId, analysisData } = props;
  return <div className="content-wrapper">
    <h3>{analysisData.analysis.name}</h3>
    <ImpactGraph />
    <Table analysisId={analysisId} />
  </div>

}

// <a href="/logout">Logout</a>


export default AnalysisView;

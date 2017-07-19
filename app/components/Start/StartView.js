import React from 'react';
import { Link } from 'react-router';

import Table from '../Table';

const analysesList = (analyses) => {
  if (analyses.length == 0) {
    return <div><p>You have no analyses yet</p></div>
  } else {
    return (
      <div>
        {analyses.map((analysis, i) => (
          <div key={i} className="flex-container">
            <div>
              <p>{analysis.name}</p>
            </div>
            <div>
              <Link to={`/analysis/${analysis.id}`}>Edit</Link>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

const StartView = ({analyses}) => {
  return(
    <div>
      <h3>Your analyses</h3>
      {analysesList(analyses)}
      <button>New analysis</button>
    </div>
  )
}

// <a href="/logout">Logout</a>


export default StartView;

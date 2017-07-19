import React from 'react';
import { Link } from 'react-router';
import { Field, reduxForm } from 'redux-form';

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

let NewAnalysisForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit} >
      <div>
        <label htmlFor="analysisName">Analysis name</label>
        <Field name="analysisName" component="input" type="text" />
      </div>
      <button type="submit">Create</button>
    </form>
  )
}

NewAnalysisForm = reduxForm({
  form: 'newAnalysis'
})(NewAnalysisForm)

const StartView = ({props}) => {
  const { analyses, createAnalysis } = props;
  return(
    <div>
      <h3>Your analyses</h3>
      {analysesList(analyses)}
      <NewAnalysisForm onSubmit={createAnalysis} />
    </div>
  )
}

// <a href="/logout">Logout</a>


export default StartView;

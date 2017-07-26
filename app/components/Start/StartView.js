import React from 'react';
import { Link } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import Truncate from 'react-truncate';

import Table from '../Table';

const analysesList = (props) => {
  const {analyses, deleteAnalysis} = props
  if (analyses.length == 0) {
    return <div><p>You have no analyses yet</p></div>
  } else {
    return (
      <div>
        {analyses.map((analysis, i) => (
          <div key={i} className="default-neat-grid">
            <div className="default-neat-grid__column-8 grid-item">
              <Link to={`/analysis/${analysis.id}`}><Truncate>
                {analysis.name}
              </Truncate>
            </Link>
          </div>
          <div className="default-neat-grid__column-4 grid-item">
            <button className="button button--basic" onClick={() => deleteAnalysis(analysis.id)}>Delete</button>
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
    <form onSubmit={handleSubmit} className="default-neat-grid analyses-list">
      <div>
        <div className="default-neat-grid__column-8 grid-item">
          <Field placeholder="Analysis name" name="analysisName" component="input" type="text" className="input input--analysis" />
        </div>
      </div>
      <div className="default-neat-grid__column-4 grid-item">
        <button className="button button--create" type="submit">Create</button>
      </div>
    </form>
  )
}

NewAnalysisForm = reduxForm({
  form: 'newAnalysis'
})(NewAnalysisForm)

const StartView = ({props}) => {
  const { analyses, createAnalysis, deleteAnalysis } = props;
  return(
    <div className="content-wrapper">
      <h3>Your analyses</h3>
      {analysesList({analyses: analyses, deleteAnalysis: deleteAnalysis})}
      <NewAnalysisForm onSubmit={createAnalysis} />
    </div>
  )
}

// <a href="/logout">Logout</a>


export default StartView;

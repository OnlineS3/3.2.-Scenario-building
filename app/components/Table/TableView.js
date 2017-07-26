import React from 'react';
import { Link } from 'react-router';
import _ from 'lodash';
import Truncate from 'react-truncate';

import { Field, reduxForm } from 'redux-form';

const numericOptions = (fieldName, min, max) => {
  const valueRange = _.range(min, max+1);
  return(
    <Field name={fieldName} component="select">
      {valueRange.map((value) =>
        <option value={value} key={value}>{value}</option>
      )}
    </Field>
  )
}
let NewItemForm = (props) => {
  const { handleSubmit } = props;
  const valueRange = _.range(1, 11);
  return (
    <form onSubmit={handleSubmit} className="default-neat-grid">
      <div className="default-neat-grid__column-3 grid-item">
        <Field name="label" component="input" type="text" />
      </div>
      <div className="default-neat-grid__column-3 grid-item">
        <label htmlFor="uncertainty">Uncertainty</label>
        {numericOptions("uncertainty", 1, 10)}
      </div>
      <div className="default-neat-grid__column-3 grid-item">
        <label htmlFor="impact">Impact</label>
        {numericOptions("impact", 1, 10)}
      </div>
      <div className="default-neat-grid__column-3 grid-item">
        <button className="button button--create" type="submit">Add</button>
      </div>
    </form>
  )
}

NewItemForm = reduxForm({
  form: 'newItem',
  initialValues: {
    label: "",
    uncertainty: 1,
    impact: 1
  }
})(NewItemForm)

const itemList = (items, deleteItemFromAnalysis) => {
  console.log("No items huh", items);
  if (!items || items.length == 0) {
    return <div><p>No items have been added yet.</p></div>
  } else {
    return (
      <div className="scrollview">
        {items.map((item, i) => (
          <div key={i} className="default-neat-grid">
            <div className="default-neat-grid__column-3 grid-item">
              <Truncate>
                {item.label}
              </Truncate>
            </div>
            <div className="default-neat-grid__column-3 grid-item">
              {item.uncertainty}
            </div>
            <div className="default-neat-grid__column-3 grid-item">
              {item.impact}
            </div>
            <div className="default-neat-grid__column-3 grid-item">
              <button className="button button--basic" onClick={() => deleteItemFromAnalysis(item.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

const TableView = ({props}) => {
  const { items, removeItemFromAnalysis, addItemToAnalysis } = props
  console.log("rows: ", items);
  return (
    <div>
      <NewItemForm onSubmit={addItemToAnalysis} />
      {itemList(items, removeItemFromAnalysis)}
    </div>
  )
}

export default TableView;

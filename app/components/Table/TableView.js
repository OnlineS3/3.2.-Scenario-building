import React from 'react';
import { Link } from 'react-router';
import _ from 'lodash';

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
    <form onSubmit={handleSubmit} >
      <div>
        <label htmlFor="label">Label</label>
        <Field name="label" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="uncertainty">Uncertainty</label>
        {numericOptions("uncertainty", 1, 10)}
      </div>
      <div>
        <label htmlFor="impact">Impact</label>
        {numericOptions("impact", 1, 10)}
      </div>
      <button type="submit">Create</button>
    </form>
  )
}

NewItemForm = reduxForm({
  form: 'newItem'
})(NewItemForm)

const TableRow = ({removeItem, rowData}) => {
  console.log(removeItem)
  const { id, label, uncertainty, impact } = rowData
  return (
    <tr>
      <td>{label}</td>
      <td>{uncertainty}</td>
      <td>{impact}</td>
      <td><button onClick={() => {removeItem(id)}}>Remove</button></td>
    </tr>
  )
}

const TableView = ({props}) => {
  const { rows, removeItem, addItemToAnalysis } = props
  console.log("rows: ", rows);
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Label</th>
            <th>Uncertainty</th>
            <th>Impact</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((rowData, i) => <TableRow key={i} removeItem={removeItem} rowData={rowData} />)}
          <NewItemForm onSubmit={addItemToAnalysis} />
        </tbody>
      </table>
    </div>
  )
}

export default TableView;

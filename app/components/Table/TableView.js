import React from 'react';
import { Link } from 'react-router';


const CreateNewRow = ({createItem}) => {
  return (
    <tr>
      <td><input type="text" name="Label"/></td>
      <td><input type="text" name="Uncertainty"/></td>
      <td><input type="text" name="Impact"/></td>
      <td><button onClick={() => {createItem()}}>Add</button></td>
    </tr>
  )
}

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
  const { rows, removeItem, createItem, createAnalysis } = props
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
          <CreateNewRow createItem={createItem} />
        </tbody>
      </table>
      <div>
        <button onClick={() => createAnalysis()}>Create Analysis</button>
      </div>
    </div>
  )
}

export default TableView;

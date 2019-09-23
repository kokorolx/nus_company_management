import React from 'react'
import { Table } from 'reactstrap'

class CommonTableDetails extends React.Component {

  tableHeader(object) {
    const renderTableHeader = Object.keys(object).map(header => <th key={header}>{ header }</th>)
    return (
      <thead>
        <tr>
          { renderTableHeader }
        </tr>
      </thead>
    )
  }

  tableBody(object) {
    const renderTableData = Object.values(object).map((value, index) => <td key={`${index}_${value}`}> { value.toString() }</td>)
    return(
      <tbody>
          <tr>{ renderTableData }</tr>
      </tbody>
    )
  }

  render() {

    return(
      <Table>
        { this.tableHeader(this.props.object) }
        { this.tableBody(this.props.object) }
      </Table>
    )
  }
}

export default CommonTableDetails;

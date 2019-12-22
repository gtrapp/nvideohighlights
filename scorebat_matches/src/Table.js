import React, { Component } from 'react';
import { MDBDataTable } from 'mdbreact';

class DatatablePage extends Component{
  render() {
    let data = {
      'columns': this.props.columns,
      'rows': this.props.rows,
    }
    return (
      <MDBDataTable
        striped
        bordered
        hover
        data={data}
      />
    );
  }
}

export default DatatablePage;

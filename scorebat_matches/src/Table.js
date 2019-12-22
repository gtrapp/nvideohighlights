import React, { Component } from 'react';
import { MDBDataTable } from 'mdbreact';

class DatatablePage extends Component{
  render() {
    return (
      <MDBDataTable
        striped
        bordered
        small
        data={this.props.data}
      />
    );
  }
}

export default DatatablePage;

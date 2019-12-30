import React, { Component } from "react";
import ReactTable from "react-table-v6";
import "react-table-v6/react-table.css";

export default class DataTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRows: []
    };
  }

  rowClick = (state, rowInfo) => {
    if (rowInfo) {
      let selectedRows = new Set();
      return {
        onClick: e => {
          if (e.ctrlKey) {
            selectedRows = this.state.selectedRows;
            rowInfo._index = rowInfo.index;
            selectedRows.push(rowInfo);
            this.setState({
              selectedRows
            });
          } else {
            selectedRows = [];
            rowInfo._index = rowInfo.index;
            selectedRows.push(rowInfo);
          }
          this.setState(
            {
              selectedRows
            },
            () => {
              this.props.rowClicked(this.state.selectedRows);
            }
          );
        },
        style: {
          background:
            this.state.selectedRows.some(e => e._index === rowInfo.index) &&
            "#9bdfff"
        }
      };
    } else {
      return "";
    }
  };

  render() {
    return (
      <ReactTable
        data={this.props.rows}
        columns={this.props.columns}
        getTrProps={this.rowClick}
      />
    );
  }
}

import React, { Component } from 'react';
import DatatablePage from './Table.js'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      columns: [
        {
          label: 'Name',
          field: 'name',
          sort: 'asc',
          width: 150
        },
        {
          label: 'Position',
          field: 'position',
          sort: 'asc',
          width: 270
        },
        {
          label: 'Office',
          field: 'office',
          sort: 'asc',
          width: 200
        },
        {
          label: 'Age',
          field: 'age',
          sort: 'asc',
          width: 100
        },
        {
          label: 'Start date',
          field: 'date',
          sort: 'asc',
          width: 150
        },
        {
          label: 'Salary',
          field: 'salary',
          sort: 'asc',
          width: 100
        }
      ],
      rows: [],
    };
  }

  componentDidMount() {
    fetch("https://www.scorebat.com/video-api/v1")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({
            isLoaded: true,
            rows: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, columns, rows } = this.state;
    return (
      <div className="App">
        <DatatablePage columns={columns} rows={rows} />
      </div>
    );
  }
}

export default App;

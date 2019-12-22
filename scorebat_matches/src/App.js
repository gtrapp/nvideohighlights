import React, { Component } from 'react';
import DataTable from './Table.js'
import _ from 'lodash';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      columns: [
        {
          label: 'Match',
          field: 'title',
          sort: 'asc',
          width: 270
        },        
        {
          label: 'Team 1',
          field: 'side1Name',
          sort: 'asc',
          width: 150
        },
        {
          label: 'Team 2',
          field: 'side2Name',
          sort: 'asc',
          width: 150
        },
        {
          label: 'League',
          field: 'competitionName',
          sort: 'asc',
          width: 270
        },
        
      ],
      rows: [],
    };
  }

  componentDidMount() {
    fetch("https://www.scorebat.com/video-api/v1")
      .then(res => res.json())
      .then(
        (result) => {
          _.forEach(result, (value, key) => {
            value.competitionName = value.competition.name
            value.side1Name = value.side1.name
            value.side2Name = value.side2.name
          });

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
        <DataTable columns={columns} rows={rows} />
      </div>
    );
  }
}

export default App;

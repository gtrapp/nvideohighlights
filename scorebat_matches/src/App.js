import React, { Component } from 'react';
import _ from 'lodash';
import './App.css';

import SearchBar from './SearchBar.js';
import DataTable from './Table.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
            rows: result
          });
        }
      )
  }

  render() {
    const { rows } = this.state;
    return (
      <div className="App">
        <SearchBar rows={rows} />
        <DataTable rows={rows} />
      </div>
    );
  }
}

export default App;

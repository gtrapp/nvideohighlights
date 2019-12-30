import React, { Component } from "react";

import _ from "lodash";
import "./App.css";

import SearchBar from "./SearchBar.js";
import DataTable from "./Table.js";
import VideoSelector from "./VideoSelector.js";
import VideoThumbnail from "./VideoThumbnail.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [],
      columns: [],
      selectedRow: null,
      searchTerm: ""
    };
    this.searchTermChange = this.searchTermChange.bind(this);
  }

  componentDidMount() {
    this.getData();
    this.getColumns();
  }
  getData = () => {
    fetch("https://www.scorebat.com/video-api/v1")
      .then(res => res.json())
      .then(result => {
        _.forEach(result, (value, key) => {
          value.competitionName = value.competition.name;
          value.side1Name = value.side1.name;
          value.side2Name = value.side2.name;
          value.numVideos = value.videos.length;
        });

        this.setState({
          rows: result
        });
      });
  };
  getColumns = () => {
    const columns = [
      {
        Header: "Title",
        accessor: "title"
      },
      {
        Header: "Team1",
        accessor: "side1Name"
      },
      {
        Header: "Team2",
        accessor: "side2Name"
      },
      {
        Header: "League",
        accessor: "competitionName"
      },
      {
        Header: "# Videos",
        accessor: "numVideos"
      }
    ];
    this.setState({ columns });
  };

  onClickRow = rowInfo => {
    this.setState({
      selectedRow: rowInfo[0].original
    });
  };

  searchTermChange = value => {
    this.setState({
      searchTerm: value
    });
  };

  render() {
    const { rows, columns, selectedRow, searchTerm } = this.state;
    let filteredRows;

    if (searchTerm) {
      filteredRows = _.filter(rows, item => {
        return (
          item.competitionName
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          item.side1Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.side2Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
      });
    } else {
      filteredRows = rows;
    }

    return (
      <div className="App">
        <VideoSelector selectedRow={selectedRow} rows={rows} />
        <VideoThumbnail/>
        <SearchBar searchTermChange={this.searchTermChange} />
        <DataTable
          rows={filteredRows}
          columns={columns}
          rowClicked={this.onClickRow}
        />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange = e => {
    this.setState({ value: e.target.value });
    this.props.searchTermChange(e.target.value);
  };

  render() {
    return (
      <div>
        <form style={{margin: '20px'}} >
          <input
            placeholder="Search"
            value={this.state.value}
            onChange={this.handleInputChange}
            style={{ width: "500px", height: "20px" }}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;

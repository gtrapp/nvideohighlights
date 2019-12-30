//src https://codesandbox.io/s/react-table-row-table-alternate-single-row-working-hor8j

import React, { Component } from "react";

class VideoSelector extends Component {
  render() {
    let videoFrame = {
      width: "40%",
      height: "40%",
      margin: "auto",
      paddingTop: "20px"
    };

    let video;
    let selectedRow;

    if (this.props.selectedRow) {
      selectedRow = this.props.selectedRow;
    } else if (this.props.rows.length) {
      selectedRow = this.props.rows[0];
    }

    if (selectedRow) {
      video = [];
      for (let i = 0; i < selectedRow.videos.length; i++) {
        video.push(
          selectedRow.videos[i].embed
        );
      }
    } else {
      video = "<h1></h1>";
    }

    return (
      <div style={videoFrame}>
         <div dangerouslySetInnerHTML={{ __html: video }} />
       </div>
    );
  }
}

export default VideoSelector;

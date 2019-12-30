//src https://codesandbox.io/s/react-table-row-table-alternate-single-row-working-hor8j

import React, { Component } from "react";

class VideoPlayer extends Component {
  render() {
    let videoFrame = {
      width: "40%",
      height: "40%",
      margin: "auto",
      paddingTop: "20px"
    };

    let video;
    
    if (this.props.selectedVideo) {
      video = this.props.selectedVideo;
    } else if (this.props.selectedRow && this.props.selectedRow.videos) {
      video = this.props.selectedRow.videos[0].embed;
    } else {
      video = <h1>placeholder</h1>
    }

    return (
      <div style={videoFrame}>
        <div dangerouslySetInnerHTML={{ __html: video }} />
      </div>
    );
  }
}

export default VideoPlayer;

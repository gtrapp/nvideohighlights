import React, { Component } from "react";

class VideoThumbnail extends Component {

  thumbClicked = e => {
    console.log('thumbClicked', e);
  };

  render() {
    let thumbs = [];

    if (this.props.selectedRow) {
      thumbs = [];
      for (let i = 0; i < this.props.selectedRow.videos.length; i++) {
        thumbs.push(
          this.props.selectedRow.videos[i].embed
        );
      }
    } else {
      thumbs = ['one', 'two', 'three'];
    }
    console.log(thumbs)

    return (
      <div className="highlights-list">
        {thumbs.map((thumb) => (
          <div key={thumb} className="video-thumb" onClick={this.thumbClicked}>
            <div dangerouslySetInnerHTML={{ __html: thumb }} />
          </div>
        ))}
      </div>
    )
  }
}

export default VideoThumbnail;

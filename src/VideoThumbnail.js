import React, { Component } from "react";

class VideoThumbnail extends Component {

  render() {
    const highlights = [ 'One', 'Two', 'Three', 'Four', 'Five' ]
      return (
          <div className="highlights-list">
          {highlights.map((highlight) => (
            <div key={highlight} className="video-thumb">
              {highlight}
            </div>

          ))}
          </div>
      )
    }
}

export default VideoThumbnail;

// var VideoList = (props) => (
//   <div className="video-list" id="videoListID">
//     {
//       props.videosList.map(video => 
//         <VideoListEntry handleClick={props.handleClick} video={video} />
//       )
//     }
//   </div>
// );


class VideoList extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="video-list" id="videoListID">
        {
          this.props.videosList.map(video => 
            <VideoListEntry handleClick={this.props.handleClick} video={video} />
          )
        }
      </div>
    );
  }
  
}

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

//window.videoListEntries = videoListEntries;

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;
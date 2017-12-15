// var VideoPlayer = (props) => (
//   <div className="video-player">
//     <div className="embed-responsive embed-responsive-16by9">
//       <iframe className="embed-responsive-item" onClick={(video) => this.handleClick(video)} src={`https://www.youtube.com/embed/${props.videosList[0].id.videoId}?autoplay=0`} allowFullScreen></iframe>
//     </div>
//     <div className="video-player-details" id="videoPlayerDetails">
//       <div>{props.videosList[0].snippet.title}</div>
//       <div>{props.videosList[0].snippet.description}</div>
//     </div>
//   </div>
// );

class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="video-player">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${this.props.state.currentVideo.id.videoId}?autoplay=0`} allowFullScreen></iframe>
        </div>
        <div className="video-player-details" id="videoPlayerDetails">
          <div>{this.props.state.currentVideo.snippet.title}</div>
          <div>{this.props.state.currentVideo.snippet.description}</div>
        </div>
      </div>
    );
  }
}


// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoPlayer.propTypes = {
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.VideoPlayer = VideoPlayer;

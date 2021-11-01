import "./videoplayer.scss";

function VideoPlayer(props) {
  return (
    <div className="video__container">
      <video className="video__player" controls poster={props.videoDetails.image}></video>
    </div>
  );
}

export default VideoPlayer;

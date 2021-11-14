
function VideoPlayer(props) {
    return (
        <div className="video">
            <video className="video__player" poster={props.videos.image}>
            </video>
        </div>
    )
}

export default VideoPlayer; 
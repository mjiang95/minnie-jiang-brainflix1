

 function VideoDescription(props) {

    return (
        <section>
        <div className="video">
            <video className="video__player" poster={props.videoDetails.image}>
            </video>
        </div>
            <h1 className="video-description__title">{props.videoDetails.title}</h1>
        <div className="video-description__details">
            <h2 className="video-description__channel">{props.videoDetails.channel}</h2>
            <p className="video-description__date">{props.videoDetails.title}</p>
        </div>
        <div className="video-description__details">
            <p className="video-description__views">{props.videoDetails.views}</p>
            <p className="video-description__likes">{props.videoDetails.likes}</p>
        </div>
            <h3 className="video-details__description">{props.videoDetails.description}</h3>
        </section>
    )
}

export default VideoDescription; 
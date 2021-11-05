import "./VideoDescription.scss";
import views from "../../assets/Image/Icons/views.svg";
import likes from "../../assets/Image/Icons/likes.svg";

function VideoDescription(props) {
  let time = new Date(props.videoDetails.timestamp);
  time = time.toLocaleString().slice(0, 10);
  time = time.replace(/,/g, "");
  time = time.trim();

  console.log(props)

  return (
    <section className="video">
      <h1 className="video-description__title">{props.videoDetails.title}</h1>
      <div className="video-description">
        <div className="video-description__details">
          <h2 className="video-description__channel">
            By {props.videoDetails.channel}
          </h2>
          <p className="video-description__date">{time}</p>
        </div>
        <div className="video-description__details">
          <div className="video__views">
            <img src={views} alt="views icon" />
            <p className="video-description__views">
              {props.videoDetails.views}
            </p>
          </div>
          <div className="video__likes">
            <img src={likes} alt="likes icon" />
            <p className="video-description__likes">
              {props.videoDetails.likes}
            </p>
          </div>
        </div>
      </div>
      <h3 className="video-details__description">
        {props.videoDetails.description}
      </h3>
    </section>
  );
}

export default VideoDescription;

import "./NextVideoList.scss";
import { Link } from "react-router-dom"; 

const NextVideoList = ({nextVideos}) => {
  return (
    <section className="video">
      <h2 className="video__title">NEXT VIDEO</h2>
      {nextVideos.map((nextVideo) => ( 
        <div className="video-list" >
         <Link to = {`/videodetails/` + nextVideo.id} key={nextVideo.id}>
          <img className= "video-list__thumbnail" 
            src={nextVideo.image}
            alt="nextvideo thumbnail"
          />
          </Link>
          <div className="video-list__details">
            <h3>{nextVideo.title}</h3>
            <p>{nextVideo.channel}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default NextVideoList;

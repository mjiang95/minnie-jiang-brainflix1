import { Component } from 'react';
import VideoDetailsJSON from "../../Data/video-details.json";
import VideosJSON from "../../Data/videos.json";
import VideoDescription from "../../components/VideoDescription/VideoDescription";
import NextVideoList from "../../components/NextVideoList/NextVideoList";
import Comments from "../../components/Comments/comments";
import VideoPlayer from "../../components/videoplayer/videoplayer";
import "./home.scss"; 
import axios from "axios";
// import { API_KEY_STRING, videosURL } from '../../utilities/index';

class Home extends Component {


    state = {
      videos: [],
      currentSelectedVideo: {}
    };

    componentDidMount() {
      axios 
        .get("https://project-2-api.herokuapp.com/videos?api_key=00825317-53ca-4b2d-86ba-230bda09cd40")
        .then((response) => { 
          console.log(this)
          this.setState ({
            videos: response.data
          })

          const videoId = this.props.match.params.videoId || response.data[0].id;

          this.getVideoById(videoId);
        })
    }

    componentDidUpdate(prevProps) {
      const videoId = this.props.match.params.videoId;
      const prevVideoId = prevProps.match.params.videoId; 
      console.log(videoId)
    

      if (videoId !== prevVideoId) {
        this.getVideoById(videoId);
      }
    
    }

    getVideoById = (id) => {
      axios
      .get("https://project-2-api.herokuapp.com/videos/" + id + "?api_key=00825317-53ca-4b2d-86ba-230bda09cd40")
      .then((response) => {
        console.log(response)
        this.setState ({
          currentSelectedVideo: response.data  
        });
      });
    }


    render() {
      const { currentSelectedVideo } = this.state; 

      if ( !this.state.currentSelectedVideo.id ){
        return <p>Page loading...</p>
      };
    
      let filteredVideos = this.state.videos.filter((video) => {
        return video.id !== currentSelectedVideo.id
      }); 

  
      return (
        <>
      <section>
          <VideoPlayer videoDetails={currentSelectedVideo} />
          <div className="video-list__app">
            <div className="video-list__comments">
              <VideoDescription videoDetails={currentSelectedVideo} />
              <Comments comments= {currentSelectedVideo.comments}/>
            </div>
            <div className="video-list__list">
              <NextVideoList 
              nextVideos= {filteredVideos}
              />
              </div>
          </div>
        </section>
        </>
          );
      }
  }
  

export default Home;

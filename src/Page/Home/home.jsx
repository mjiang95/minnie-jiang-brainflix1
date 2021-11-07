import { Component } from 'react';
import VideoDescription from "../../components/VideoDescription/VideoDescription";
import NextVideoList from "../../components/NextVideoList/NextVideoList";
import Comments from "../../components/Comments/comments";
import VideoPlayer from "../../components/videoplayer/videoplayer";
import "./home.scss"; 
import axios from "axios";

class Home extends Component {


    state = {
      videos: [],
      currentSelectedVideo: {}
    };

    componentDidMount() {
      axios 
        .get("https://project-2-api.herokuapp.com/videos?api_key=00825317-53ca-4b2d-86ba-230bda09cd40")
        .then((response) => { 
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
    

      if (videoId !== prevVideoId) {
        this.getVideoById(videoId);
      }
    
    }

    getVideoById = (id) => {
      axios
      .get("https://project-2-api.herokuapp.com/videos/" + id + "?api_key=00825317-53ca-4b2d-86ba-230bda09cd40")
      .then((response) => {

        this.setState ({
          currentSelectedVideo: response.data  
        });
      });
    }

    formSubmit = (e) => {
    e.preventDefault();

    const videoId = this.state.currentSelectedVideo.id;
  
    axios
    .post("https://project-2-api.herokuapp.com/videos/" + videoId + "/comments/?api_key=00825317-53ca-4b2d-86ba-230bda09cd40", {
    name: "",
    comment: e.target.comments.value
    })
  
    .then((result) => {
      this.getVideoById(videoId)
  })
  .catch((error) => {
  });
};
  


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
          <VideoPlayer videoDetails= {currentSelectedVideo} />
          <div className="video-list__app">
            <div className="video-list__comments">
              <VideoDescription videoDetails={currentSelectedVideo} />
              <Comments comments= {currentSelectedVideo.comments} formSubmit={this.formSubmit}/>
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

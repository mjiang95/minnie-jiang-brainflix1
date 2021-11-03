import { Component } from 'react';
import VideoDetailsJSON from "../../Data/video-details.json";
import VideosJSON from "../../Data/videos.json";
import VideoDescription from "../../components/VideoDescription/VideoDescription";
import NextVideoList from "../../components/NextVideoList/NextVideoList";
import Comments from "../../components/Comments/comments";
import VideoPlayer from "../../components/videoplayer/videoplayer";
import "./home.scss"; 


class Home extends Component {
    state = {
      videos: VideosJSON,
      videoDetails: VideoDetailsJSON,
      currentVideoDetails: VideoDetailsJSON[0],
    };

    updateSelectedVideo = (videoId) => {
      const newSelectedVideoDetails = this.state.videoDetails.find((video) => {
        return videoId === video.id;
      });
  
      this.setState({
        currentVideoDetails: newSelectedVideoDetails,
      });
    };
  
    render() {
      const { videos, currentVideoDetails } = this.state;
      const filterVideos = videos.filter((video) => {
        return video.id !== currentVideoDetails.id;
      });
  
      return (
        <section>
          <VideoPlayer videoDetails={this.state.currentVideoDetails} />
          <div className="video-list__app">
            <div className="video-list__comments">
              <VideoDescription videoDetails={this.state.currentVideoDetails} />
              <Comments comments={this.state.currentVideoDetails} />
            </div>
            <div className="video-list__list">
              <NextVideoList
                clickHandler={this.updateSelectedVideo}
                nextVideos={filterVideos}
              />
            </div>
          </div>
        </section>
      );
    }
  }
  

export default Home;

import { Component } from "react";
import "./App.css";
import PageNav from "../src/components/PageNav/PageNav";
import VideoDetailsJSON from "../src/Data/video-details.json";
import VideosJSON from "../src/Data/videos.json";
import VideoDescription from "./components/VideoDescription/VideoDescription";
import NextVideoList from "./components/NextVideoList/NextVideoList";
import Comments from './components/comments/comments';

class App extends Component {
state = {
  videos: VideosJSON,
  videoDetails: VideoDetailsJSON,
  currentVideoDetails: VideoDetailsJSON[0],
};

// we need to update the state on a click event in the video's list

updateSelectedVideo = (videoId) => {
  const newSelectedVideoDetails = this.state.videoDetails.find((video) => {
    return videoId === video.id;
  });

  this.setState({
    currentVideoDetails: newSelectedVideoDetails
  });
};

render() {
  const { videos, currentVideoDetails } = this.state;

  //NextVideoList should contain only videos that are not the current video
  const filterVideos = videos.filter((video) => {
  //Returned value here should be boolean, if returned is true then the item will be part of new array
    return video.id !== currentVideoDetails.id;
  });

  return (
    <section>
      <PageNav />
      <VideoDescription videoDetails= {this.state.currentVideoDetails} />
      <Comments comments = {this.state.currentVideoDetails}/>
      <NextVideoList
        clickHandler={this.updateSelectedVideo}
        nextVideos={filterVideos}
      />
    </section>
  );
}
}

export default App;

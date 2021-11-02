import { Component } from "react";
import "./App.scss";
import PageNav from "../src/components/PageNav/PageNav";
import VideoDetailsJSON from "../src/Data/video-details.json";
import VideosJSON from "../src/Data/videos.json";
import VideoDescription from "./components/VideoDescription/VideoDescription";
import NextVideoList from "./components/NextVideoList/NextVideoList";
import Comments from "./components/Comments/comments";
import VideoPlayer from "./components/videoplayer/videoplayer";
import {BrowserRouter, Switch, Route} from "react-router-dom"; 
import Home from "./Page/Home/home";
import Upload from "./Page/Upload/upload";
import VideoDetails from "./Page/VideoDetails/vidodetails";

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
      currentVideoDetails: newSelectedVideoDetails,
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
      <BrowserRouter>
      <section>
        <PageNav />
          <Switch>
              <Route path= "/" exact component={Home} />
              <Route path= "/videodetails" component={VideoDetails} />
              <Route path= "/upload" component={Upload} />
          </Switch>
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
      </BrowserRouter>
    );
  }
}

export default App;

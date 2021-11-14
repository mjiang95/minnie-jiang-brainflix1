import React from "react";
import "./upload.scss";
import { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Random from '../../assets/Image/Images/random.png';


class Upload extends Component {
  uploadPage = (e) => {
    e.preventDefault(); 
    axios.post("http://localhost:8080/video/", {
    "image": "http://localhost:8080/image/random.png",
    "title": e.target.input__title.value,
    "description": e.target.input__description.value
  })
  .then((res) => {
     console.log(res);
  })
      
  alert("Upload successful!");
  this.props.history.goBack()
  }


  render() {
    return (
      <>
        <section className="upload-video">
          <div className="upload-video-section">
            <h1 className="upload-video__title">Upload Video</h1>
          </div>
          <form onSubmit={this.uploadPage} className="upload-video__components">
            <div className="upload-video__details">
              <div className="upload-video__container">
                <h2 className="upload-video__subtitle">VIDEO THUMBNAIL</h2>
                <video
                  className="upload-video__video-player"
                  controls
                  poster= {Random}
                ></video>
              </div>
                <div className="upload-video__label">
                  <label className="input-title__label" htmlFor="input__title">
                    TITLE YOUR VIDEO
                  </label>
                  <input
                    onSubmit={this.uploadPage} 
                    type="text"
                    className="input__title"
                    name="input__title"
                    placeholder="Add a title to your video"
                  />
                  <label
                    className="input-description__label"
                    htmlFor="input__description"
                  >
                    ADD A VIDEO DESCRIPTION
                  </label>
                  <input
                    onSubmit={this.uploadPage} 
                    type="text"
                    className="input__description"
                    name="input__description"
                    placeholder="Add a description to your video"
                  />
                </div>
            </div>
            <div className="upload-video__cta">
                  <input type="submit" className="publish" value="PUBLISH"/>
              <Link to ="/">
              <input className="cancel" type="button" value="CANCEL" />
              </Link>
                <input type="submit" className="publish1" value="PUBLISH"/>
            </div>
          </form>
        </section>
      </>
    );
  }
}

export default Upload;

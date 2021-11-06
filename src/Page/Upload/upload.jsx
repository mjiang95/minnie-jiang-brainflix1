import React from "react";
import "./upload.scss";
import { Component } from "react";
import { Link } from "react-router-dom";

class Upload extends Component {
  clickHandler() {
    alert("Upload successful!");
  }

  render() {
    return (
      <>
        <section className="upload-video">
          <div className="upload-video-section">
            <h1 className="upload-video__title">Upload Video</h1>
          </div>
          <div className="upload-video__components">
            <div className="upload-video__details">
              <div className="upload-video__container">
                <h2 className="upload-video__subtitle">VIDEO THUMBNAIL</h2>
                <video
                  className="upload-video__video-player"
                  controls
                  poster="https://ae01.alicdn.com/kf/HTB1ihJkOVXXXXchXFXXq6xXFXXXR/LIFE-MAGIC-BOX-Photography-Backdrop-photo-background-5X7Ft-Wedding-Backgrounds.jpg_q50.jpg"
                ></video>
              </div>
                <div className="upload-video__label">
                  <label className="input-title__label" htmlFor="input__title">
                    TITLE YOUR VIDEO
                  </label>
                  <input
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
                    type="text"
                    className="input__description"
                    name="input__description"
                    placeholder="Add a description to your video"
                  />
                </div>
              
            </div>
            <div className="upload-video__cta">
              <div>
                <Link to="/" className="publish-link">
                  <button onClick={this.clickHandler} className="publish">
                    PUBLISH
                  </button>
                </Link>
              </div>
              <input className="cancel" type="button" value="CANCEL" />
              <Link to="/" className="publish1-link">
                <button onClick={this.clickHandler} className="publish1">
                PUBLISH 
                </button>
              </Link>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Upload;

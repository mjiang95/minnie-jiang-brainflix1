import React from 'react'
import "./upload.scss";
import { Component } from 'react';
import { Link } from "react-router-dom";

class Upload extends Component {

    clickHandler() {
        alert ("Upload successful!");
    }

    render () {

    return (
        <>
        <section className= "upload-video">
            <div className= "upload-video-section">
                <h1 className="upload-video__title">
                    Upload Video
                </h1>
            </div>
            <div className= "upload-video__components">
                    <div className="upload-video__main-component">
                        <h2 className="upload-video__subtitle">VIDEO THUMBNAIL</h2>
                    </div>
                    <div className= "upload-video__details">
                        <video className="upload-video__video-player" src=""></video>
                        <label className="input-title__label" htmlFor="input__title">TITLE YOUR VIDEO</label>
                        <input type="text" className="input__title" name="input__title" placeholder="Add a title to your video"/>
                        <label className="input-description__label"htmlFor="input__description">ADD A VIDEO DESCRIPTION</label>
                        <input type="text" className="input__description"name="input__description" placeholder="Add a description to your video"/>
                    </div>
                </div>
                    <div className= "upload-video__cta">
                        <div>
                        <li>
                        <Link to="/" className="publish">
                        <button ahref="http://localhost:3002/"  onClick={this.clickHandler}>PUBLISH</button></Link></li></div>
                        <input className="cancel" type="button" value="CANCEL" />
                        <input className="publish1" type="submit" value="PUBLISH"/>
                    </div>
        </section>
    </>
    )
    }
}

export default Upload;
import React from 'react'
import "./upload.scss";

function Upload() {
    return (
        <section>
            <div>
                <h1 className="upload-video__title">
                    Upload Video
                </h1>
            </div>
            <div>
                <h2>VIDEO THUMBNAIL</h2>
                <video src=""></video>
            </div>
            <div>
                <form>
                    <div>
                        <label htmlFor="input__title">TITLE YOUR VIDEO</label>
                        <input type="text" name="input__title" placeholder="Add a title to your video"/>
                        <label htmlFor="input__description">ADD A VIDEO DESCRIPTION</label>
                        <input type="text" name="input__description" placeholder="Add a description to your video"/>
                    </div>
                    <div>
                        <input type="submit" />
                        <input type="button" value="cancel" />
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Upload;
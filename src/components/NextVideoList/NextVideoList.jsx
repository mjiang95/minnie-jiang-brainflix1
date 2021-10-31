import "./NextVideoList.scss";

const NextVideoList = ({ clickHandler, nextVideos }) => {
    return (
        <section className="video">
        <h2 className="video__title">NEXT VIDEO</h2>
            {nextVideos.map((nextVideo) => (
                <div className="video-list" key= {nextVideo.id}>
                    <img className="video-list__thumbnail" onClick={() => { clickHandler(nextVideo.id) }} src={nextVideo.image} alt="nextvideo thumbnail" />
                    <div className="video-list__details">
                        <h3>{nextVideo.title}</h3>
                        <p>{nextVideo.channel}</p>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default NextVideoList; 
const NextVideoList = ({ clickHandler, nextVideos }) => {
    return (
        <ul>
            {nextVideos.map((nextVideo) => (
                <div key= {nextVideo.id}>
                    <img onClick={() => { clickHandler(nextVideo.id) }} src={nextVideo.image} alt="nextvideo thumbnail" />
                    <div>
                        <p>{nextVideo.title}</p>
                        <p>{nextVideo.channel}</p>
                    </div>
                </div>
            ))}
        </ul>
    )
}

export default NextVideoList; 
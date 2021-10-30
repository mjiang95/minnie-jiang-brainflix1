const NextVideoList = ({ clickHandler, nextVideos }) => {
    return (
        <ul>
            {nextVideos.map((nextVideo) => (
                <div key= {nextVideo.id}>
                    <a onClick={() => { clickHandler(nextVideo.id) }} href="#">{nextVideo.image}</a>
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
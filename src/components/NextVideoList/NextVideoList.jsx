const NextVideoList = ({ clickHandler, nextVideos }) => {
    return (
        <>
        <h2>NEXT VIDEO</h2>
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
        </>
    )
}

export default NextVideoList; 
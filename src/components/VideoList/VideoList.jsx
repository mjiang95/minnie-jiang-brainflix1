import Video from '../Videos/Video';

export default function VideoList(props) {
    return (
        <>
            {
                props.videos.map(movie => <Video
                    key={movie.id} 
                    id={movie.id}
                    title={movie.original_title}
                    description={movie.overview}
                    poster={movie.poster_path}
                    trailer="#trailer"
                    voteCount={movie.vote_count}
                    updateVoteCount={props.updateVoteCount}
                />)
            }
        </>
    )
}
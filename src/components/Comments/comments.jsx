function Comments (props){
    return (
        
        <div>
            {/* <img src="" alt="" />            */}
               {props.comments.comments.map((comment) => {
                    return (
                    <div key={comment.id}>
                        <div>
                            <h2>{comment.name}</h2>,
                            <p>{comment.timestamp}</p>
                        </div>
                        <div>
                            <h2>{comment.comment}</h2>
                        </div>
                    </div>
                    )
                }
                 )}
        </div>
    )
};


export default Comments; 
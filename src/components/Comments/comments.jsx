import "./comments.scss";
import mohanMuruge from "../../assets/Image/Images/mohanMuruge.jpg";


function Comments (props){
    return (
        <section className= "user-comments">
            <div className= "new-comments">
                <img className="new-comments__avatar" src={mohanMuruge} alt="Picture of Mohan Muruge" />
                <form action="">
                    <label className="new-comments__label" htmlFor="comments">JOIN THE CONVERSATION</label>
                    <input className="new-comments__type-area" type="textarea" name="comments" placeholder="Add a new comment"/>

                </form>
            </div>
        
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
    </section>
    )
};


export default Comments; 
import "./comments.scss";
import mohanMuruge from "../../assets/Image/Images/mohanMuruge.jpg";
import addcomments from "../../assets/Image/Icons/add_comment.svg";


function Comments (props){
    return (
        <section className= "user-comments">
            <div className= "new-comments">
                <img className="new-comments__avatar" src={mohanMuruge} alt="Picture of Mohan Muruge" />
                <form className="new-comments-input" action="">
                    <label className="new-comments__label" htmlFor="comments">JOIN THE CONVERSATION</label>
                    <input className="new-comments__type-area" type="textarea" name="comments" placeholder="Add a new comment"/>
                    <div className="add-comments__section">
                    <img className="add-comments" src={addcomments} alt="Add Comments icon" />
                    <input className="new-comments__button" type="button" value="COMMENT"/>
                    </div>
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
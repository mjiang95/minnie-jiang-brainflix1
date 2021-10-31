import "./comments.scss";
import mohanMuruge from "../../assets/Image/Images/mohanMuruge.jpg";
import addcomments from "../../assets/Image/Icons/add_comment.svg";
import { v4 as uuidv4 } from 'uuid';
import TimeStamp from "../timestamp/timestamp";


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
            
            <div className="customer-comments">  
               {props.comments.comments.map(comment => {
                
                    return (
                        <TimeStamp
                            key={uuidv4()}
                            comment={comment}
                        />
                    )
                })}
        </div>
    </section>
    )
};


export default Comments; 
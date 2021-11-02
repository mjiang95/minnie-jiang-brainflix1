import "./comments.scss";
import mohanMuruge from "../../assets/Image/Images/mohanMuruge.jpg";
import addcomments from "../../assets/Image/Icons/add_comment.svg";

function Comments(props) {
  return (
    <section className="user-comments">
      <div className="new-comments">
        <img
          className="new-comments__avatar"
          src={mohanMuruge}
          alt="Picture of Mohan Muruge"
        />
        <form className="new-comments-input" action="">
          <div className="user-comments__section">
            <label className="new-comments__label" htmlFor="comments">
              JOIN THE CONVERSATION
            </label>
            <input
              className="new-comments__type-area"
              type="textarea"
              name="comments"
              placeholder="Add a new comment"
            />
          </div>
          <div className="add-comments__section">
            <img
              className="add-comments"
              src={addcomments}
              alt="Add Comments icon"
            />
            <input
              className="new-comments__button"
              type="button"
              value="COMMENT"
            />
          </div>
        </form>
      </div>

      <div className="customer-comments">
        {props.comments.comments.map((comment) => {
          return (
            <div className="previous-comments" key={comment.id}>
              <div className="previous-comments__avatar"></div>
              <div className="previous-comments__subsection">
                <div className="previous-comments__title">
                  <h2 className="previous-comments__name">{comment.name}</h2>
                  <p className="previous-comments__time">
                    {new Date(comment.timestamp).toLocaleDateString()}
                  </p>
                </div>
                <div>
                  <p className="previous-comments__comments">
                    {comment.comment}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Comments;

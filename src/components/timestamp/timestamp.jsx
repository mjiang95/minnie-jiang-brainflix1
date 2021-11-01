import "./timestamp.scss";

function TimeStamp({ comment }) {
  let time = new Date(comment.timestamp);
  time = time.toLocaleString().slice(0, 10);
  time = time.replace(/,/g, "");
  time = time.trim();
  return (
    <div className="previous-comments" key={comment.id}>
      <div className="previous-comments__avatar"></div>
      <div className="previous-comments__subsection">
        <div className="previous-comments__title">
          <h2 className="previous-comments__name">{comment.name}</h2>
          <p className="previous-comments__time">{time}</p>
        </div>
        <div>
          <p className="previous-comments__comments">{comment.comment}</p>
        </div>
      </div>
    </div>
  );
}

export default TimeStamp;

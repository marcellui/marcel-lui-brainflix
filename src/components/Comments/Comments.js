import "./Comments.scss";
import comment_pfp from "../../assets/Images/Mohan-muruge.jpg";
import comment_img from "../../assets/Icons/add_comment.svg";
import data from "../../data/video-details.json";

function Comments({currentVideo}) {
  return (
    <>
      <div className="comments">
        <h3>3 Comments</h3>
        <div className="comments__container">
          <img src={comment_pfp} className="comments__img"></img>
          <div className="comments__form">
            <form>
              <label>JOIN THE CONVERSATION</label>
              <br></br>
              <div className="comments__block">
                <textarea
                  type="text"
                  placeholder="Add a new comment"
                  className="comments__text-area"
                ></textarea>
                <div class="comments__button">
                  <img src={comment_img} className="comments__add-icon"></img>
                  <p className="comments__add-text">COMMENT</p>
                </div>
              </div>
            </form>
          </div>
        </div>
        

        <div>
          <div className="comments__container2">
            <img className="comments__img2"></img>
            <div>
                <div className="comments__name-date">
                <h4>{currentVideo.comments[0].name}</h4>
                <p className="comments__date">{new Date(currentVideo.comments[0].timestamp).toLocaleDateString()}</p>
            </div>
            <p>{currentVideo.comments[0].comment}</p>
            </div>
          </div>
          <div className="comments__container2">
            <img className="comments__img2"></img>
            <div>
                <div className="comments__name-date">
                <h4>{currentVideo.comments[1].name}</h4>
                <p className="comments__date">{new Date(currentVideo.comments[1].timestamp).toLocaleDateString()}</p>
            </div>
            <p>{currentVideo.comments[1].comment}</p>
            </div>
          </div>
          <div className="comments__container2">
            <img className="comments__img2"></img>
            <div> 
                <div className="comments__name-date">
                <h4>{currentVideo.comments[2].name}</h4>
                <p className="comments__date">{new Date(currentVideo.comments[2].timestamp).toLocaleDateString()}</p>
            </div>
            <p>{currentVideo.comments[2].comment}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Comments;

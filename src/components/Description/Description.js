import "./Description.scss";
import data from "../../data/video-details.json";
import view from "../../assets/Icons/views.svg";
import like from "../../assets/Icons/likes.svg";

function Description({currentVideo}) {
  return (
    <>
      <div className="border">
        <h1 className="title">{currentVideo?.title}</h1>
        <div className="description">
          <div>
            <div className="description__container">
              <h3>By {currentVideo?.channel}</h3>
              <p className = "description__date">{new Date(currentVideo?.timestamp).toLocaleDateString()}</p>
            </div>
          </div>
          <div className = "description__card-container">
            <div className="description__card">
              <img src={view}></img>
              <p className = "description__img-spacing">{currentVideo?.views}</p>
            </div>
            <div className="description__card">
              <img src={like}></img>
              <p className = "description__img-spacing">{currentVideo?.likes}</p>
            </div>
          </div>
        </div>
            <p>
                {currentVideo?.description}
            </p>
      </div>
    </>
  );
}

export default Description;

import "./VideoUpload.scss";
import thumbnail from "../../assets/Images/Upload-video-preview.jpg";
import uploadIcon from "../../assets/Icons/upload.svg";

function VideoUpload() {
  return (
    <>
      <div className="video__hero">
        <h1>Upload Video</h1>
        <div className="video__flex-container">
          <div className="video__img-container">
            <p className="video__title3">VIDEO THUMBNAIL</p>
            <img src={thumbnail} alt="upload" className="video__image"></img>
          </div>
          <div className="video__form">
            <form>
              <label className="video__title3">TITLE YOUR VIDEO</label>
              <br></br>
              <input
                type="text"
                placeholder="Add a title to your video"
                className="video__text-1"
              ></input>
              <br></br>
              <label className="video__title3">ADD A VIDEO DESCRIPTION</label>
              <br></br>
              <textarea
                type="text"
                placeholder="Add a description to your video"
                className="video__text-2"
              ></textarea>
            </form>
          </div>
        </div>
      </div>
      <div className="video__container1">
        <div className="video__button">
          <img src={uploadIcon} alt="upload icon" className="video__icon"></img>
          <p className="video__button-publish">PUBLISH</p>
        </div>
        <a href="/">
            <p className="video__button-cancel">CANCEL</p>
        </a>
      </div>
    </>
  );
}
export default VideoUpload;

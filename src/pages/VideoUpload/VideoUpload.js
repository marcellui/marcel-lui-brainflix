import "./VideoUpload.scss"
import thumbnail from "../../assets/Images/Upload-video-preview.jpg"
import uploadIcon from "../../assets/Icons/upload.svg"

function VideoUpload() {
  return (
    <>
      <div className="video__hero">
        <h1>Upload Video</h1>
        <p>VIDEO THUMBNAIL</p>
        <img
          src= {thumbnail} 
          alt="upload"
          className="video__image"
        ></img>
        <form>
          <label>TITLE YOUR VIDEO</label>
          <br></br>
          <input type="text" placeholder="Add a title to your video"></input>
          <br></br>
          <label>ADD A VIDEO DESCRIPTION</label>
          <br></br>
          <textarea
            type="text"
            placeholder="Add a description to your video"
          ></textarea>
        </form>
      </div>
      <div>
        <img src={uploadIcon} alt="upload icon"></img>
        <p>PUBLISH</p>
      </div>
      <p>CANCEL</p>
    </>
  );
}
export default VideoUpload;

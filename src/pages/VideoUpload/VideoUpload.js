import "./VideoUpload.scss";
import thumbnail from "../../assets/Images/Upload-video-preview.jpg";
import uploadIcon from "../../assets/Icons/upload.svg";
import axios from "axios";
import { useEffect } from "react";

function VideoUpload() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formRef = event.target;
    const title = formRef.title.value;
    const description = formRef.description.value;
    const formInput = {
      title: title,
      description: description,
    };
    if (!title || !description){
      alert("Title and Description are required");
      return
    }
    let response = await axios.post("http://localhost:8080/videos", formInput);
    console.log(response.data);
  };

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
            <form onSubmit={handleSubmit}>
              <label className="video__title3">TITLE YOUR VIDEO</label>
              <br></br>
              <input
                type="text"
                placeholder="Add a title to your video"
                className="video__text-1"
                name="title"
              ></input>
              <br></br>
              <label className="video__title3">ADD A VIDEO DESCRIPTION</label>
              <br></br>
              <textarea
                type="text"
                placeholder="Add a description to your video"
                className="video__text-2"
                name="description"
              ></textarea>
              <div className="video__container1">
                <div className="video__button">
                  <img
                    src={uploadIcon}
                    alt="upload icon"
                    className="video__icon"
                  ></img>
                  <button className="video__button-publish"> PUBLISH</button>
                </div>
                <a href="/">
                  <p className="video__button-cancel">CANCEL</p>
                </a>
              </div>
              
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default VideoUpload;

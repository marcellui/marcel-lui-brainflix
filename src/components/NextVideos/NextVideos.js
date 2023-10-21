import "./NextVideos.scss";
import data from "../../data/videos.json";
import { useState } from "react";

function NextVideos({currentId,handleVideoClick}) {
  const [videoList, setVideoList] = useState(data.filter(video => video.id !== currentId));


function updateVideoList(){
  setVideoList(data.filter(video => video.id !== currentId))
}

  return (
    <>
      <h2 className="video__title">NEXT VIDEOS </h2>
      <div className="video__container">
        {videoList
        
        .map((video) => {
          return (
            <div className="video__card" onClick={() => {
              handleVideoClick(video.id)
              updateVideoList();
              }}>
                <img src={video.image} className="video__img"></img>
              <div className="video__description">
                <h3 className="video__title2">{video.title}</h3>
                <p>{video.channel}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default NextVideos;

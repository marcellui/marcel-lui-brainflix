import "./NextVideos.scss";
// import data from "../../data/videos.json";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


function NextVideos({currentId,videoList}) {
  

const filterVideoList = videoList.filter(video => video.id !== currentId);


  return (
    <>
      <h2 className="video__title">NEXT VIDEOS </h2>
      <div className="video__container">
        {filterVideoList?.map((video) => {
          return (
            <Link to = {`/video/${video.id}`} className="video__card" key = {video.id} >
                <img src={`http://localhost:8080/${video.image}`} className="video__img"></img>
              <div className="video__description">
                <h3 className="video__title2">{video.title}</h3>
                <p>{video.channel}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default NextVideos;

import "./App.scss";
import data from "./data/video-details.json"
import NavBar from "./components/NavBar/NavBar";
import Video from "./components/Video/Video";
import Description from "./components/Description/Description";
import Comments from "./components/Comments/Comments";
import NextVideos from "./components/NextVideos/NextVideos";
import { useState } from "react";


function App() {

  const [currentId, setCurrentId] = useState("84e96018-4022-434e-80bf-000ce4cd12b8");

  const handleVideoClick = (id) => {
    setCurrentId(id)
    setCurrentVideo(data.find(video=>video.id===currentId))
  }

  const [currentVideo, setCurrentVideo] = useState(data.find(video => video.id === currentId))
  
  
  return (
    <>
      <NavBar />
      <Video 
        currentVideo = {currentVideo}
      />
      <div className="app__sidebar">
        <div className="app__sidebar--left">
          <Description 
            currentVideo = {currentVideo}
          />
          <Comments 
            currentVideo = {currentVideo}
          />
        </div>
        <div className="app__sidebar--right">
          <NextVideos 
            currentId = {currentId}
            handleVideoClick ={handleVideoClick}
          />
        </div>
      </div>
    </>
  );
}

export default App;

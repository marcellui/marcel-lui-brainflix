import "./VideoDetails.scss";
// import data from "../../data/video-details.json"
import Video from "../../components/Video/Video";
import Description from "../../components/Description/Description";
import Comments from "../../components/Comments/Comments";
import NextVideos from "../../components/NextVideos/NextVideos";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";



function VideoDetails() {

    
  const apiEndpoint = "https://project-2-api.herokuapp.com/videos"
  const apiKey = "941442a9-7192-480c-b59a-686eb02913b8"
  const {id} = useParams();


  const [currentId, setCurrentId] = useState("84e96018-4022-434e-80bf-000ce4cd12b8");
  const [videoList, setVideoList] = useState([]);
  
  const [currentVideo, setCurrentVideo] = useState(videoList.find(video => video.id === currentId))

  useEffect(()=>{
        if (id){
            setCurrentId(id);
        }
    
        // console.log(id);
        // console.log(currentId);
        // console.log(videoList.find(video => video.id === id))
        // setCurrentVideo(videoList.find(video => video.id === id))
  }, [id])


  
  useEffect(() => {
    const fetchData = async() =>{
      const {data} = await axios(`${apiEndpoint}?api_key=${apiKey}`)
      setVideoList(data);
    }
    fetchData();
  }, [])

  useEffect(()=>{
    const fetchCurrentVideo = async() => {
        console.log(currentId)
        const {data} = await axios(`${apiEndpoint}/${currentId}?api_key=${apiKey}`)
        setCurrentVideo(data);
        
    }
    fetchCurrentVideo();
  }, [currentId])

  return (
    <>
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
            videoList = {videoList}
          />
        </div>
      </div>
    </>
  );
}

export default VideoDetails;

import "./Video.scss"
import data from "../../data/video-details.json"
import { useState } from "react"


function Video({currentVideo}){
    return <>
    <div className="video">
        <video className="video__element" controls = {true} poster = {currentVideo.image}>
        </video>
    </div>
    </>
} 

export default Video;
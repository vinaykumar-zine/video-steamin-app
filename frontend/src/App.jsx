import { useRef } from 'react'
import './App.css'
import VideoPlayer from './VideoPlayer'

function App() {

  const playerRef = useRef(null)
  const videoLink = "http://localhost:8000/uploads/courses/6f2d7368-065d-45b3-bca8-f33af1b0634c/index.m3u8"
  const videoPlayerOptions = {
    controls: true,
    responsive: true,
    fluid: true,
    sources: {
      src: videoLink,
      type: "application/x-mpegURL"
    }
  }

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    //handling player events here, for exqample:
    player.on("waiting", () => {
      videojs.log("player will dispose");
    })
  };

  return (
    <>
      <div>
        <h1>Video Player</h1>
        <VideoPlayer options = {videoPlayerOptions}
                     onReady = {handlePlayerReady}/>
      </div>
    </>
  )
}

export default App

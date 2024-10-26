import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = ({ children }) => {
  const audioRef = useRef();
  const seekBg = useRef();
  const seekBar = useRef();

  const [track, setTrack] = useState(songsData[0]);
  const [playStatus, setPlayStatus] = useState(false);
  const[volume, setVolume] = useState(0.7)
  const [time, SetTime] = useState({
    currentTime: {
      second: 0,
      minute: 0,
    },
    totalTime: {
      second:28,
      minute: 3,
    },
  });

  const play = ()=>{
    audioRef.current.play();
    setPlayStatus(true)
  }

  const pause = ()=>{
    audioRef.current.pause();
    setPlayStatus(false)
  }

  const playById = async (id)=>{
    await setTrack(songsData[id])
    await audioRef.current.play();
    setPlayStatus(true)
  }

  const previous = async ()=>{
    if(track.id>0){
    await setTrack(songsData[track.id-1])
    await audioRef.current.play();
    setPlayStatus(true)
    }
  }

  const next = async ()=>{
    if(track.id<songsData.length-1){
    await setTrack(songsData[track.id+1])
    await audioRef.current.play();
    setPlayStatus(true)
    }
  }
  const audioChange = (e)=>{
   setVolume(e.target.value)
   const newVolume = e.target.value
   audioRef.current.volume=newVolume
  }

  useEffect(()=>{
    audioRef.current.ontimeupdate = () =>{
      seekBar.current.style.width=(audioRef.current.currentTime/audioRef.current.duration*100)+"%"
      if(!isNaN(audioRef.current.duration)){
        SetTime({
            currentTime:{
                second: Math.floor(audioRef.current.currentTime % 60),
                minute : Math.floor(audioRef.current.currentTime / 60)
            },
            totalTime:{
                second: Math.floor(audioRef.current.duration % 60),
                minute: Math.floor(audioRef.current.duration / 60)
              }

        })}
    }
  },[audioRef])

  const contextValue = {
    audioRef,
    seekBg,
    seekBar,
    track,setTrack,
    playStatus,setPlayStatus,
    time,SetTime,
    play,pause,
    playById,
    previous,
    next,
    volume, setVolume,
    audioChange
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;

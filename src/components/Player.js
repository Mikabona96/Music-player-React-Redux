import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

import { playAudio } from "../util";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const Player = ({audioRef}) => {

  const dispatch = useDispatch()

  const useGetState = () => {
    const songs = useSelector(state => state.songs)
    const songInfo = useSelector(state => state.songInfo)
    const currentSong = useSelector(state => state.currentSong)
    const isPlaying = useSelector(state => state.isPlaying)
    return {songs, songInfo, currentSong, isPlaying}
  }

  const {songs, songInfo, currentSong, isPlaying} = useGetState()
  //UseEffect Update List
  const activeLibraryHandler = (nextPrev) => {
    const newSongs = songs.map((song) => {
      if (song.id === nextPrev.id) {
	    localStorage.setItem('song', JSON.stringify(song))
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });

    dispatch({type: 'SET_SONGS', payload: newSongs})
  };


  const trackAnim = {
    transform: `translateX(${songInfo.animationPercentage}%)`,
  };
  //Event Handlers
  function getTime(time) {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  }
  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    dispatch({type: 'SET_SONG_INFO', payload: {...songInfo, currentTime: e.target.value}})
  };

  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      dispatch({type: 'IS_PLAYING', payload: !isPlaying})
    } else {
      audioRef.current.play();
      dispatch({type: 'IS_PLAYING', payload: !isPlaying})
    }
  };
  const skipTrackHandler = async (direction) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);

    //Forward BAck
    if (direction === "skip-forward") {
      await dispatch({
        type: 'SET_CURRENT_SONG', 
        payload: songs[(currentIndex + 1) % songs.length]
      })
      activeLibraryHandler(songs[(currentIndex + 1) % songs.length]);
    }

    if (direction === "skip-back") {
      if ((currentIndex - 1) % songs.length === -1) {
        await dispatch({
          type: 'SET_CURRENT_SONG', 
          payload: songs[songs.length - 1]
        })
        activeLibraryHandler(songs[songs.length - 1]);
        playAudio(isPlaying, audioRef);
        return;
      }
      await dispatch({
          type: 'SET_CURRENT_SONG', 
          payload: songs[(currentIndex - 1) % songs.length]
        })
      activeLibraryHandler(songs[(currentIndex - 1) % songs.length]);
    }
    if (isPlaying) audioRef.current.play();
  };
 

  // const color = currentSong.color
  // console.log(color)

  const style = {
      background: currentSong.color !== undefined ? `linear-gradient(to right, ${currentSong.color[0]},${currentSong.color[1]})` : '#51C0E4',
      // background: currentSong.color !== undefined ? currentSong.color[0] : '#51C0E4',
  }

  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <div
          style={style}
          className="track"
        >
          <input
            value={songInfo.currentTime}
            type="range"
            max={songInfo.duration || 0}
            min={0}
            onChange={dragHandler}
          />
          <div style={trackAnim} className="animate-track"></div>
        </div>
        <p>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          onClick={() => skipTrackHandler("skip-back")}
          className="skip-back"
          size="2x"
          icon={faAngleLeft}
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          size="2x"
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          className="skip-forward"
          size="2x"
          icon={faAngleRight}
          onClick={() => skipTrackHandler("skip-forward")}
        />
       
      </div>
    </div>
  );
};

export default Player;
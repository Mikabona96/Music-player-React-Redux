import { useEffect, useRef } from 'react';
import Library from './components/Library';
import Player from './components/Player';
import Song from './components/Song';
import "./styles/app.scss";
import data from './data'
import Nav from './components/Nav'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';



const App = () => {
	const audioRef = useRef(null)
	const dispatch = useDispatch()
	
	const useData = () =>{
		const songs = useSelector(state => state.songs)
		const currentSong = useSelector(state => state.currentSong)
		const isPlaying = useSelector(state => state.isPlaying)
		const songInfo = useSelector(state => state.songInfo)
		const libraryStatus = useSelector(state => state.libraryStatus)
		const term = useSelector(state => state.term)
		
		return {songs, currentSong, isPlaying, songInfo, libraryStatus, term}
	}

	const {songs, currentSong, isPlaying, songInfo, libraryStatus} = useData();

	const timeUpdateHandler = (e) => {
		const current = e.target.currentTime
		const duration = e.target.duration
		const roundedCurrent = Math.round(current)
		const roundedDuration = Math.round(duration)
		const animation = Math.round((roundedCurrent / roundedDuration) * 100)
	
		dispatch({type: 'SET_SONG_INFO', payload: {
				...songInfo,
				currentTime: current,
				duration,
				animationPercentage: animation
			}
		})
	}

	const songEndHandler = async () => {
		let currentIndex = songs.findIndex((song) => song.id === currentSong.id)
		await dispatch({type: 'SET_CURRENT_SONG', payload: songs[(currentIndex + 1) % songs.length]})
		if (isPlaying) audioRef.current.play()
	}


	useEffect(() => {
		dispatch({type: 'SET_SONGS', payload: data()})

		dispatch({
			type: 'SET_CURRENT_SONG', 
			payload: JSON.parse(localStorage.getItem('song')) ? JSON.parse(localStorage.getItem('song')) : data()[0]
		})
		dispatch({type: 'SET_SONG_INFO', payload: {
				currentTime: 0,
				duration: 0,
				animationPercentage: 0
			}
		})

	}, [dispatch])

	return (
		<div className={`App ${libraryStatus ? 'library-active' : ''}`}>
			<Nav />
			<Song />
			<Player audioRef={audioRef} />
			<Library audioRef={audioRef} />
			<audio 
				onLoadedMetadata={timeUpdateHandler}
				onTimeUpdate={timeUpdateHandler} 
				ref={audioRef} 
				src={currentSong.audio}
				onEnded={songEndHandler}
			></audio>
		</div>
	)

}

export default App;


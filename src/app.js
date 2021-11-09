import { useEffect, useRef, useState } from 'react';
import Library from './components/Library';
import Player from './components/Player';
import Song from './components/Song';
import "./styles/app.scss";
import data from './data'
import Nav from './components/Nav'


const App = () => {

	const audioRef = useRef(null)

	const [songs, setSongs] = useState(data());
	const [currentSong, setCurrentSong] = useState(JSON.parse(localStorage.getItem('song')) ? JSON.parse(localStorage.getItem('song')) : songs[0]);
	const [isPlaying, setIsPlaying] = useState(false);
	const [songInfo, setSongInfo] = useState({
		currentTime: 0,
		duration: 0,
		animationPercentage: 0
	})
	const [libraryStatus, setLibraryStatus] = useState(false)

	const timeUpdateHandler = (e) => {
		const current = e.target.currentTime
		const duration = e.target.duration
		const roundedCurrent = Math.round(current)
		const roundedDuration = Math.round(duration)
		const animation = Math.round((roundedCurrent / roundedDuration) * 100)
		setSongInfo({
			...songInfo,
			currentTime: current,
			duration,
			animationPercentage: animation
		})
	}

	const songEndHandler = async () => {
		let currentIndex = songs.findIndex((song) => song.id === currentSong.id)
		await setCurrentSong(songs[(currentIndex + 1) % songs.length])
		if (isPlaying) audioRef.current.play()
	}

	//Search in Lib

	const search = (items, term) => {
		if (term.length === 0) {
			return items;
		}

		return items.filter((item) => {
			return (item.name.toLowerCase().indexOf(term.toLowerCase()) > -1 || item.artist.toLowerCase().indexOf(term.toLowerCase()) > -1);
		})
	}

	const [term, setTerm] = useState('')
	const visibleItems = search(songs, term)

	
	useEffect(() => {
		const songsData = data();
		songsData.find(song => song.id === currentSong.id).active = true;
		setSongs(songsData)
	}, [term, currentSong])

	// console.log(songs, 'songs')
	// console.log(currentSong, 'currentSong')


	return (
		<div className={`App ${libraryStatus ? 'library-active' : ''}`}>
			<Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus}/>
			<Song currentSong={currentSong} setLibraryStatus={setLibraryStatus} />
			<Player
				songInfo={songInfo}
				setSongInfo={setSongInfo}
				audioRef={audioRef} 
				isPlaying={isPlaying} 
				setIsPlaying={setIsPlaying} 
				currentSong={currentSong} 
				songs={visibleItems}
				setCurrentSong={setCurrentSong} 
				setSongs={setSongs}
			/>
			<Library
				currentSong={currentSong}
				term={term} 
				setTerm={setTerm}
				songs={visibleItems} 
				setCurrentSong={setCurrentSong} 
				audioRef={audioRef} 
				isPlaying={isPlaying}
				setSongs={setSongs}
				libraryStatus={libraryStatus}
			/>
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


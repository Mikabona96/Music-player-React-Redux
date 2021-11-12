import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

const LibrarySong = ({song, audioRef}) => {

	const dispatch = useDispatch()

	const useGetSelector = () => {
		const songs = useSelector(state => state.songs)
		const isPlaying = useSelector(state => state.isPlaying)
		const currentSong = useSelector(state => state.currentSong)
		return {songs, isPlaying, currentSong}
	}

  const {songs, isPlaying, currentSong} = useGetSelector()

	const songSelectHandler = async () => {
		localStorage.setItem('song', JSON.stringify(song))
		await dispatch({type: 'SET_CURRENT_SONG', payload: song})
		const newSongs = songs.map(track => {
			if (track.id === song.id) {
				return {
					...track,
					active: true
				}
			} else {
				return {
					...track,
					active: false
				}
			}
		})

		dispatch({type: 'SET_SONGS', payload: newSongs})

		if (isPlaying) audioRef.current.play()

	}


	return (
		<div onClick={songSelectHandler} className={`library-song ${song.id === currentSong.id ? 'selected' : ''}`}>
			<img src={song.cover} alt={song.name}></img>
			<div className="song-description">
				<h3>{song.name}</h3>
				<h4>{song.artist}</h4>
			</div>
		</div>
	)
}

export default LibrarySong
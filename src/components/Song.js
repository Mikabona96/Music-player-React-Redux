import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

const Song = () => {
	const dispatch = useDispatch()

	const useGetSelector = () => {
		const currentSong = useSelector(state => state.currentSong)
		const libraryStatus = useSelector(state => state.libraryStatus)
		
		return {currentSong, libraryStatus}
	}

	const {currentSong} = useGetSelector()

	const closeLibraryHandler = (e) => {
		if (e.target.classList.contains('song-container')) {
			dispatch({type: 'SET_LIBRARY_STATUS', payload: false})
		}
	}
	return (
		<div onClick={closeLibraryHandler} className="song-container">
			<img src={currentSong.cover} alt={currentSong.name}></img>
			<h2>{currentSong.name}</h2>
			<h3>{currentSong.artist}</h3>
		</div>
	)
}

export default Song
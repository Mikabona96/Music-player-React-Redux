import LibrarySong from './LibrarySong'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const Library = ({audioRef}) => {

	const dispatch = useDispatch()

	 const useGetState = () => {
		const songs = useSelector(state => state.songs)
		const libraryStatus = useSelector(state => state.libraryStatus)
		const currentSong = useSelector(state => state.currentSong)
		const isPlaying = useSelector(state => state.isPlaying)
		const visibleSongs = useSelector(state => state.visibleSongs)
		const searchInputValue = useSelector(state => state.searchInputValue)
		return {songs, libraryStatus, isPlaying, searchInputValue, currentSong, visibleSongs}
	}

  const {songs, libraryStatus, searchInputValue, visibleSongs} = useGetState()


	const search = (items, searchInputValue) => {
		if (searchInputValue.length === 0) {
			return items;
		}

		return items.filter((item) => {
			return (item.name.toLowerCase().indexOf(searchInputValue.toLowerCase()) > -1 || item.artist.toLowerCase().indexOf(searchInputValue.toLowerCase()) > -1);
		})
	}

	const visibleItems = search(songs, searchInputValue)

	useEffect(() => {
		dispatch({type: 'SET_VISIBLE_SONGS', payload: visibleItems})
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [searchInputValue])
	

	return (
		<div className={`library ${libraryStatus ? "active-library" : ''}`}>
			<h2>Library</h2>
			<div className="library-search" style={{marginBottom: !searchInputValue ? '2rem' : null}}>
				<FontAwesomeIcon icon={faSearch} />
				<input type="text" placeholder="Seacrh music" value={searchInputValue}
				onChange={(e) => {
					dispatch({type: 'SET_SEARCH_INPUT_VALUE', payload: e.target.value})
				}}/>
				{searchInputValue ? <h3 style={{marginLeft: '10%', marginBottom: '1rem', marginTop: '1rem'}}>Searched songs:</h3> : null}
			</div>
			<div className="library-songs">
				{visibleSongs ? visibleSongs.map(song => (
					<LibrarySong 
						song={song} 
						key={song.id} 
						audioRef={audioRef}
					/>
				)) : songs.map(song => (
					<LibrarySong 
						song={song} 
						key={song.id} 
						audioRef={audioRef}
					/>
				))}
			</div>
		</div>
	)
}

export default Library
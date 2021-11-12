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
		const term = useSelector(state => state.term)
		return {songs, libraryStatus, isPlaying, term, currentSong, visibleSongs}
	}

  const {songs, libraryStatus, term, visibleSongs} = useGetState()


	const search = (items, term) => {
		if (term.length === 0) {
			return items;
		}

		return items.filter((item) => {
			return (item.name.toLowerCase().indexOf(term.toLowerCase()) > -1 || item.artist.toLowerCase().indexOf(term.toLowerCase()) > -1);
		})
	}

	const visibleItems = search(songs, term)

	useEffect(() => {
		dispatch({type: 'SET_VISIBLE_SONGS', payload: visibleItems})
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [term])
	

	return (
		<div className={`library ${libraryStatus ? "active-library" : ''}`}>
			<h2>Library</h2>
			<div className="library-search" style={{marginBottom: !term ? '2rem' : null}}>
				<FontAwesomeIcon icon={faSearch} />
				<input type="text" placeholder="Seacrh music" value={term}
				onChange={(e) => {
					dispatch({type: 'SET_TERM', payload: e.target.value})
				}}/>
				{term ? <h3 style={{marginLeft: '10%', marginBottom: '1rem', marginTop: '1rem'}}>Searched songs:</h3> : null}
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
import LibrarySong from './LibrarySong'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Library = ({songs, setCurrentSong, audioRef, isPlaying, setSongs, libraryStatus, term, setTerm, currentSong}) => {
	return (
		<div className={`library ${libraryStatus ? "active-library" : ''}`}>
			<h2>Library</h2>
			<div className="library-search">
				<FontAwesomeIcon icon={faSearch} />
				<input type="text" placeholder="Seacrh music" value={term}
				onChange={(e) => setTerm(e.target.value)}/>
			</div>
			<div className="library-songs">
				{songs.map(song => (
					<LibrarySong 
						currentSong={currentSong}
						song={song} 
						songs={songs} 
						key={song.id} 
						audioRef={audioRef}
						isPlaying={isPlaying}
						setCurrentSong={setCurrentSong}
						setSongs={setSongs}
					/>
				))}
			</div>
		</div>
	)
}

export default Library
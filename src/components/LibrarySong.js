
const LibrarySong = ({song, songs, setCurrentSong, audioRef, isPlaying, setSongs, currentSong}) => {

	const songSelectHandler = async () => {
		localStorage.setItem('song', JSON.stringify(song))
		await setCurrentSong(song)
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

		setSongs(newSongs)

		if (isPlaying) audioRef.current.play()

	}

	// console.log(songs)

	return (
		<div onClick={songSelectHandler} className={`library-song ${song.active ? 'selected' : ''}`}>
			<img src={song.cover} alt={song.name}></img>
			<div className="song-description">
				<h3>{song.name}</h3>
				<h4>{song.artist}</h4>
			</div>
		</div>
	)
}

export default LibrarySong
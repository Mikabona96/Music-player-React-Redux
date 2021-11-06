
const LibrarySong = ({song, songs, setCurrentSong, audioRef, isPlaying, setSongs}) => {

	const songSelectHandler = async () => {
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
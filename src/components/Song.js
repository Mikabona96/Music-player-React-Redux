const Song = ({currentSong, setLibraryStatus}) => {
	const closeLibraryHandler = (e) => {
		if (e.target.classList.contains('song-container')) {
			setLibraryStatus(false)
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
dispatch({type: 'SET_SONGS', payload: data()})
	dispatch({
		type: 'SET_CURRENT_SONG', 
		payload: JSON.parse(localStorage.getItem('song')) ? JSON.parse(localStorage.getItem('song')) : data()[0]
	})
	dispatch({type: 'IS_PLAYING', payload: false})
	
	dispatch({type: 'SET_LIBRARY_STATUS', payload: false})
	dispatch({type: 'SET_TIME_UPDATE_HANDLER', payload: (e) => {
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
			}}
		)}
	})

	dispatch({type: 'SET_SONG_END_HANDLER', payload: async () => {
		let currentIndex = songs.findIndex((song) => song.id === currentSong.id)
		await setCurrentSong(songs[(currentIndex + 1) % songs.length])
		if (isPlaying) audioRef.current.play()
	}})

const initialState = {
	songs: null,
	currentSong: {},
	isPlaying: false,
	songInfo: {
		currentTime: 0,
		duration: 0,
		animationPercentage: 0
	},
	libraryStatus: false,
	searchInputValue: '',
	ref: null,
	visibleSongs: []
}

const Reducer = (state = initialState, action) => {
	switch (action.type) {
		case "SET_SONGS":
			return {
				...state,
				songs: action.payload
			}
		case "SET_VISIBLE_SONGS":
			return {
				...state,
				visibleSongs: action.payload
			}
		case "SET_CURRENT_SONG":
			return {
				...state,
				currentSong: action.payload
			}
		case "IS_PLAYING":
			return {
				...state,
				isPlaying: action.payload
			}
		case "SET_SONG_INFO":
			return {
				...state,
				songInfo: action.payload
			}
		case "SET_LIBRARY_STATUS":
			return {
				...state,
				libraryStatus: action.payload
			}
		case "SET_SEARCH_INPUT_VALUE":
			return {
				...state,
				searchInputValue: action.payload
			}
		case "SET_REF":
			return {
				...state,
				ref: action.payload
			}
		default:
			return {
				...state
			}
	}
}

export default Reducer
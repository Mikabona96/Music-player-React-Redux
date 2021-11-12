import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import library from './library.svg'

const Nav = () => {

	const dispatch = useDispatch()

	const useGetSelector = () => {
		const libraryStatus = useSelector(state => state.libraryStatus)
		
		return libraryStatus
	}

	const libraryStatus = useGetSelector()

	return (
		<nav className="nav">
			<h1>Waves</h1>
			<div onClick={() => {
				dispatch({type: 'SET_LIBRARY_STATUS', payload: !libraryStatus})
			}}>
				<img 
				src={library} 
				style={libraryStatus ? {
					'filter': 'invert(19%) sepia(0%) saturate(3006%) hue-rotate(360deg) brightness(102%) contrast(98%)',
					
					} : null} alt="" />
			</div>
		</nav>
	)
}

export default Nav
import library from './library.svg'


const Nav = ({setLibraryStatus, libraryStatus}) => {
	return (
		<nav className="nav">
			<h1>Waves</h1>
			<div onClick={() => setLibraryStatus(!libraryStatus)}>
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
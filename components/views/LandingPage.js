import React, { Component } from 'react' 
import Navbar from './assemblies/Navbar'
import BookShelf from './assemblies/BookShelf'

class LandingPage extends Component {
	render() {
		return(
			<div className="list-books">
				<div className="navbar">
					<Navbar/>
				</div>
				<div className="currently-reading">
					<BookShelf name="Currently Reading"/>
				</div>
				<div className="currently-reading">
					<BookShelf name="Want to Read"/>
				</div>
				<div className="currently-reading">
					<BookShelf name="Read"/>
				</div>
			</div>
		)
	}
}

export default LandingPage



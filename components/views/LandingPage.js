import React, { Component } from 'react' 
import PropTypes from 'prop-types'
import Navbar from './assemblies//blocks/components/Navbar'
import BookShelf from './assemblies/BookShelf'
import { Link } from 'react-router-dom'

class LandingPage extends Component {

static propTypes = {
	myReadsBooks: PropTypes.func.isRequired,
	changeBookShelf: PropTypes.func.isRequired,
	books: PropTypes.array.isRequired
}
componentDidMount() {
	this.props.myReadsBooks()
}
	render() {
		let currentlyReadingBooks = this.props.books.filter(book => {
			return book.shelf === 'currentlyReading'
		})
		let wantToReadBooks = this.props.books.filter(book => {
			return book.shelf === 'wantToRead'
		})
		let readBooks = this.props.books.filter(book => {
			return book.shelf === 'read'
		})
		return(
			<div className="list-books">
				<div className="navbar">
					<Navbar/>
				</div>
				<div className="currently-reading">
					<BookShelf name="Currently Reading" changeBookShelf={this.props.changeBookShelf}books={currentlyReadingBooks}/>
				</div>
				<div className="want-to-read">
					<BookShelf name="Want to Read" changeBookShelf={this.props.changeBookShelf} books={wantToReadBooks}/>
				</div>
				<div className="read">
					<BookShelf name="Read" changeBookShelf={this.props.changeBookShelf} books={readBooks}/>
				</div>
				<div className="open-search">
            		<Link to='/search' className="open-search">Add a book </Link>
          		</div>
          	</div>
		)
	}
}

export default LandingPage



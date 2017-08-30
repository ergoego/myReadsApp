import React, { Component } from 'react' 
import BookActionButton from './components/BookActionButton'
import PropTypes from 'prop-types'

class Book extends Component {
static PropTypes = {
	changeBookShelf: PropTypes.func.isRequired,
	book: PropTypes.object.isRequired
}
	render() {
		let {book} = this.props
		let authors = book.authors ? book.authors.join(', ') : ''
		let coverURL = book.imageLinks ? book.imageLinks.thumbnail : ''
		return(
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{backgroundImage: `url(${coverURL})`}} ></div>
                    <BookActionButton changeBookShelf={this.props.changeBookShelf} book={book}/>
                </div>
                <div className="book-title">{book.title}</div>
             <div className="book-authors">{book.authors}</div>
            </div>
    	)
	}
}

export default Book 


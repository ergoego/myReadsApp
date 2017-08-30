import React, { Component } from 'react' 
import Book from './blocks/Book'

import PropTypes from 'prop-types'

class BookShelf extends Component {

static PropTypes = {
	changeBookShelf: PropTypes.func.isRequired,
	name: PropTypes.string.isRequired,
	books: PropTypes.array.isRequired
}

render(){
	return( 
		<div className="bookshelf">
            <h2 className="bookshelf-title">{this.props.name}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid"> 
                   {this.props.books.map(book => ( //this arrow function uses parenthases instead of curly brackets because it is returning one single value. In this case, that single value is a JSX element. This was causing the books not to render but did not throw a compile-time error. Very sneaky. 
                   		<li key={book.id}>
                   			<Book
                   				changeBookShelf={this.props.changeBookShelf}
                   				book={book}
							/>
						</li>
                   ))} 
                </ol>
            </div>
        </div>
	)}	
}

export default BookShelf
import React, { Component } from 'react' 
import Book from './blocks/Book'

function BookShelf(props) {
		return( // maybe in here loop through the books array and get whatever books match the props.name (which will return what shelf we are on)?? So then when we call this function we get the bookshelf belonging to whatever name category we call (currently reading, want to read or read) and whatever books belong to that shelf. 
			<div className="bookshelf">
                <h2 className="bookshelf-title">{props.name}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid"> 
                    	<Book/> 
                    	<Book/>
                    </ol>
                </div>
            </div>
		)
}


export default BookShelf
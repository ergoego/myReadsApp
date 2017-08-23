import React, { Component } from 'react' 
class BookActionButton extends Component {
	render() {
		return(
			<div>
				<h1>Book Action Button</h1>
			</div>
		)
	}
}

export default BookActionButton
/*

<div className="book-shelf-changer">
                              <select>
                                <option value="none" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
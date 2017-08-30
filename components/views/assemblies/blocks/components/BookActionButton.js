import React, { Component } from 'react'
import PropTypes from 'prop-types'

class BookActionButton extends Component {
static PropTypes = {
  changeBookShelf: PropTypes.func.isRequired,
  book: PropTypes.object.isRequired
}
handleActionButton = (e) => {
  e.preventDefault()
  this.props.changeBookShelf(this.props.book, e.target.value)
}
  render(){
	  let {book} = this.props
    return(
			<div className="book-shelf-changer">
          <select value={book.shelf} onChange={(e) => this.handleActionButton(e)}>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
          </select>
      </div>
		)
  }
}

export default BookActionButton

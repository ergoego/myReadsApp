import React, { Component } from 'react' 
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Book from './assemblies/blocks/Book'
import Searchbar from './assemblies/blocks/components/Searchbar'

class SearchBooks extends Component {
  static propTypes = {
    searchBooks: PropTypes.func.isRequired,
    changeBookShelf: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired
  }
  state = {
    query: ''
  }
  componentDidMount() {
    this.props.searchBooks(this.state.query);
  }
  updateQuery = (query) => {
    this.setState({ query });
    this.props.searchBooks(query);
  }
  render() {
    return (
      <div className="search-books">
        <Searchbar query={this.state.query} updateQuery={this.updateQuery}/>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.props.books.map(book => (
              <li key={book.id}>
                <Book
                  book={book}
                  changeBookShelf={this.props.changeBookShelf}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks

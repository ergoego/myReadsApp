import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import LandingPage from './components/views/LandingPage'
import AddBookPage from './components/views/AddBookPage'
import './styles/App.css'

class MyReadsApp extends Component {
  state = {
    books: []
  }
componentDidMount() {
  BooksAPI.getAll().then(books => {
    this.setState({ books })
  })
}
getBook = (book) => {
  BooksAPI.get(book).then(book => {
    this.setState(state => ({
      books: state.books.concat([ book ])
    }))
  })
}
updateShelf = (book, shelf) => {
  BooksAPI.update(book, shelf).then((book, shelf) => {
    this.setState({ books })
  })
} 

/* NEED TO IMPLEMENT THIS. THIS FEELS BAD SO FAR
const maxSearchResults = 14
search = (query, maxSearchResults) => {
  BooksAPI.search(query, maxSearchResults).then((query, maxSearchResults) => {
    this.setState({ books })
  }) 
} */
  render() {
    return (
      <div className="app">
        <LandingPage/>
      </div>
    )
  }
}

export default MyReadsApp
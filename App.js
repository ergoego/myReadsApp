import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import * as BooksAPI from './BooksAPI'

import LandingPage from './components/views/LandingPage'
import AddBook from './components/views/SearchBooks'

import './styles/App.css'

class MyReadsApp extends Component {
  
state = {
  books: []
}

myReadsBooks = () => {
  BooksAPI.getAll()
    .then(books => {
      this.setState({books})
    })
}

changeBookShelf = (bookToChange, newShelf) => {
  BooksAPI.update(bookToChange, newShelf)
    .then(result => {
      this.setState((e) => { // do I need a parameter here? Why can't I just do () => ?
        books: e.books.map(book =>{
          if(bookToChange.id === book.id) {
            book.shelf = newShelf
          }
          return book
        })
      })
    })
}

searchBooks = (query) => { 
  if(query) {
    BooksAPI.getAll()
      .then(booksAPI => {
        BooksAPI.search(query)
          .then(response => {
            let books = [];
            if(Array.isArray(response)) {
              books = response;
            }
            if(Array.isArray(response.books)) {
              books = response.books;
            }
            if(books) {
              books = books.map(book => {
                const bookAPI = booksAPI.find(bookAPI => bookAPI.id === book.id);
                if(bookAPI) {
                  return bookAPI;
                } else {
                  return book;
                }
              });
              if(this.state.books !== books) {
                this.setState({ books });
              }
            }
          });
      })
  } else {
    this.setState({ books: [] });
  }
}

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <LandingPage books={this.state.books} changeBookShelf={this.changeBookShelf} myReadsBooks={this.myReadsBooks}/>
        )}/>

        <Route path='/search' render={() => (
          <AddBook books={this.state.books} changeBookShelf={this.changeBookShelf} searchBooks={this.searchBooks}/>
        )}/>
      </div>
    )
  }
}

export default MyReadsApp

import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import LandingPage from './components/views/LandingPage'
import AddBook from './components/views/AddBook'
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
        <Route exact path='/' render={() => (
          <LandingPage books={this.state.books}/>
        )}/>
        <Route path='/addbook' render={({ history }) => (
          <AddBook onAddBook={(book) => {
            this.addBook(book)
            history.push('/')
          }}/>
        )}/>
      </div>
    )
  }
}

export default MyReadsApp
/*
----- taken from contacts app.js file
          <Route exact path='/' render={() => ( // the 'exact' here means that the url has to be www.asdf.com/, whereas if we do not have the 'exact', www.asdf.com/about would also return true here. 
                  <ListContacts 
                    onDeleteContact={this.removeContact} 
                    contacts={this.state.contacts} 
                  />
              )}/>
              <Route path='/create' render={({ history }) => (
                  <CreateContact onCreateContact={(contact) => {
                      this.createContact(contact)
                      history.push('/')
                    }}/>
              )}/> */
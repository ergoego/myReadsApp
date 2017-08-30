import React, { Component } from 'react' 
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class Searchbar extends Component {
  static propTypes = {
    query: PropTypes.string.isRequired,
    updateQuery: PropTypes.func.isRequired
  }

render(){
    return(
      <div className="search-books-bar">
        <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              value={this.props.query}
              placeholder="Search by title or author"
              onChange={(e) => this.props.updateQuery(e.target.value)}
              />
          </div>
      </div>
    )
  }
}

export default Searchbar
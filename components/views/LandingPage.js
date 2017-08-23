import React, { Component } from 'react' 
import Navbar from './assemblies/Navbar'
import CurrentlyReading from './assemblies/CurrentlyReading'
import WantToRead from './assemblies/WantToRead'
import Read from './assemblies/Read'
import Footer from './assemblies/Footer'

class LandingPage extends Component {
	render() {
		return(
			<div className="list-books">
				<div className="navbar">
					<Navbar/>
				</div>
				<div className="currently-reading">
					<CurrentlyReading/>
				</div>
				<div className="want-to-read">
					<WantToRead/>
				</div>
				<div className="read">
					<Read/>
				</div>
				<div className="footer">
					<Footer/>
				</div>
					
			</div>
		)
	}
}

export default LandingPage

/*<div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
</div>
            </div>
            
          </div> 
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

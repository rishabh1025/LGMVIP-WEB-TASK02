import Cards from "./components/card";
import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor(props){
	super(props)
	this.state = {users_data :[],
                loading : true                
  }
 
  this.displayUsers = this.displayUsers.bind(this)
  
}
    
  displayUsers(){
      document.getElementById("main").style.display='flex';
      const link="https://reqres.in/api/users?page=2";
      fetch(link)
      .then(response => response.json())
      .then((users) => {
        
        this.setState({users_data :users.data,
                        loading: false
        })
      })
      .catch((error) => {
        console.error(error)
      })
  }
    
  render(){
    return (<>
        <header className="headerContainer">
          <div className="container">
            <h1>LetsGrowMore</h1>
            
            <button onClick={this.displayUsers}>Click to Get Data</button>
          </div>
        </header>
      <Cards loading={this.state.loading} users={this.state.users_data}/>
    </>
    );
  }
}
	
export default App;
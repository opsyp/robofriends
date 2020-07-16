import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
//import { robots } from './robots';
import Scroll from './Scroll';
import ErrorBoundry from './ErrorBoundry';


class App extends Component {
	constructor(){
		super()
		//the state object is what describes the App
		this.state = {
			robots: [],
			searchfield: ''
		}
	}  
	componentDidMount(){
		fetch('http://jsonplaceholder.typicode.com/users')
		.then(response =>{
		return response.json();	
		})
		.then(users => {
			this.setState({robots: users});
		})
		
	}

	onSearchChange=(event)=>{
		//We use the setState() method anytime we want to change state in react
		this.setState({searchfield: event.target.value}) 
	}

	render() {
	const filteredRobots= this.state.robots.filter(robots =>{
		return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
	})

		
	return(
		<div className='tc'>
		<h1 className='f1'>RoboFriends</h1>
		<SearchBox searchChange={this.onSearchChange}/>
		<Scroll>
			<ErrorBoundry>
				<CardList robots={filteredRobots}/>
			</ErrorBoundry>
		</Scroll>
		</div>
	);

	}
	
}

export default App;
import React, { Component } from 'react';


import './App.css';

import Dashboard from './components/Dashboard';
import Login from './components/Login';



export default class App extends Component {

	state = {
		isAuthenticated: false,
		user: null
	}

	setUser = (user) => {
		this.setState({
			isAuthenticated: true,
			user: user
		});

		this.persistUserSession(user, this.state.isAuthenticated);

	}

	persistUserSession = (user, isAuthenticated) => {
		const sessionData = {
			isAuthenticated: isAuthenticated,
			givenName: user.givenName,
			avatar: user.imageUrl,
			name: user.name,
			email: user.email
		}

		sessionStorage.setItem('auth', JSON.stringify(sessionData));
	}

	userLogout = () => {
		this.setState({
			isAuthenticated: false,
			user: null
		});

		sessionStorage.removeItem('auth');
	}

	componentDidMount(){
		const user = sessionStorage.getItem('auth');
		if(user){
			console.log('user from session storage', JSON.parse(user));

			const userData = JSON.parse(user);

			this.setState({
				isAuthenticated: userData.isAuthenticated,
				user: {
					givenName: userData.givenName,
					imageUrl: userData.avatar,
					name: userData.name,
					email: userData.email
				}
			})
		}
	}

	render() {	

		return (
			<div className="App">
				{ this.state.isAuthenticated ? <Dashboard user={this.state.user} logout={this.userLogout} /> : <Login cb={this.setUser} /> }
			</div>
		)
	}
}

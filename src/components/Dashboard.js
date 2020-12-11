import React from 'react';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

const Dashboard = ( {user, logout} ) => {

	const handleLogout = () => {

		confirmAlert({
            title: 'Confirm to Logout',
            message: 'Are you sure you want to Logout?',
            buttons: [
              {
                label: 'Yes',
                onClick: () => logout()
              },
              {
                label: 'Cancel',
                onClick: () => null
              }
            ],
            
        });
	}

    return(
        <div>
            <h1 style={{marginBottom: '0px'}}>DashBoard</h1>
            <p>Howdy, {user.givenName}</p>
            <div className="Dashboard">
                <img src={user.imageUrl} alt="user profile"/>
                <h2>You are logged in as, {user.name}</h2>
                <small>{user.email}</small>
                <br />
                <br />
                <button className="SignOutButton" onClick={ () => handleLogout()}>Sign Out</button>
            </div>
        </div>
    )
	
}

export default Dashboard;
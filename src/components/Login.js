import React from 'react';
import GoogleLogin from 'react-google-login';

const Login = ( {cb} ) => {

	const responseGoogle = response => {
		console.log('profile', response.profileObj);
		cb(response.profileObj);
	}

	return(
		<div>
			<h1>Google Login!</h1>
			<GoogleLogin 
				clientId={process.env.REACT_APP_GOOGLE_AUTH_API_KEY}
				buttonText="Login with Google"
				onSuccess={responseGoogle}
				onFailure={responseGoogle}
				cookiePolicy={'single_host_origin'}
			/>
		</div>
	)

	
}

export default Login;
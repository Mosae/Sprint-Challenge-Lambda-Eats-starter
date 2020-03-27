import React from 'react';
import Form from './Form';
import { Route, Link } from 'react-router-dom';
const App = () => {
	return (
		<>
			<h1>Lambda Eats</h1>

			<Route exact path="/">
				<br />
				<Link to="/pizza">Form</Link>
			</Route>

			<Route path="/pizza">
				<Form />
			</Route>
		</>
	);
};
export default App;

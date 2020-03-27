import React from 'react';
import Form from './Form';
import { Route } from 'react-router-dom';

const App = () => {
	return (
		<>
			<h1>Lambda Eats</h1>
			<Route exact path="/">
				<Form />
			</Route>
		</>
	);
};
export default App;

import React, { useState, useEffect } from 'react';
import * as yup from 'yup';

const formSchema = yup.object().shape({
	name: yup.string().required('Name is required')
});

export default function Form() {
	//form state
	const [formState, setFormState] = useState({
		name: '',
		size: '',
		toppings: '',
		instructions: ''
	});
	//error state
	const [error, setError] = useState({
		name: '',
		size: '',
		toppings: '',
		instructions: ''
	});
	const [buttonDisabled, setButtonDisabled] = useState(true);
	return (
		<form>
			<label htmlFor="name">
				Name:
				<input id="name" type="text" name="name" />
			</label>
			<label htmlFor="size">
				What pizza size would you like?
				<select id="size" name="size">
					<option value="small">Small</option>
					<option value="medium"> Medium</option>
					<option value="large"> Large</option>
					<option value="xlarge"> Extra Large</option>
				</select>
			</label>
			<br />
			<fieldset>
				<h3>Choose your toppings</h3>

				<p>
					<label htmlFor="toppings">
						<input type="checkbox" name="toppings" value="sausage" /> Sausage
					</label>
					<label>
						<input type="checkbox" name="toppings" value="pepperoni" />{' '}
						Pepperoni
					</label>
					<label>
						<input type="checkbox" name="toppings" value="bacon" /> Bacon
					</label>
					<label>
						<input type="checkbox" name="stoppings" value="ham" />
						Ham
					</label>
				</p>
			</fieldset>

			<label htmlFor="instructions">
				Any Special Instructions?
				<textarea id="instructions" name="instructions" />
			</label>

			<button disabled={buttonDisabled}>Order!</button>
		</form>
	);
}

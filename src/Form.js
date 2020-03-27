import React, { useState, useEffect } from 'react';
import * as yup from 'yup';

const formSchema = yup.object().shape({
	name: yup
		.string()
		.min(2)
		.required('Name must be more than 2 characters')
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
	const [errors, setErrors] = useState({
		name: '',
		size: '',
		toppings: '',
		instructions: ''
	});
	const [buttonDisabled, setButtonDisabled] = useState(true);
	// database state
	const [post, setPost] = useState([]);

	useEffect(() => {
		formSchema.isValid(formState).then(valid => {
			setButtonDisabled(!valid);
		});
	}, [formState]);

	const validateChange = e => {
		yup
			.reach(formSchema, e.target.name)
			.validate(e.target.value)
			.then(valid => {
				setErrors({
					...errors,
					[e.target.name]: ''
				});
			})
			.catch(err => {
				setErrors({
					...errors,
					[e.target.name]: err.errors
				});
			});
	};

	return (
		<form>
			<label htmlFor="name">
				Name:
				<input id="name" type="text" name="name" value={formState.name} />
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

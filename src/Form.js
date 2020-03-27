import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as yup from 'yup';

const formSchema = yup.object().shape({
	name: yup
		.string()
		.min(2)
		.required('Name must be more than 2 characters'),
	size: yup.string(),
	toppings: yup.boolean().oneOf([true], 'Choose a topping'),
	instructions: yup.string()
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

	const inputChange = e => {
		e.persist();
		const newFormData = {
			...formState,
			[e.target.name]:
				e.target.type === 'checkbox' ? e.target.checked : e.target.value
		};
		validateChange(e);
		setFormState(newFormData);
	};

	const formSubmit = e => {
		e.preventDefault();
		axios
			.post('https://reqres.in/api/users', formState)
			.then(response => {
				setPost(response.data);

				setFormState({
					name: '',
					size: '',
					toppings: '',
					instructions: ''
				});
			})
			.catch(err => {
				console.log(err.res);
			});
	};

	return (
		<form onSubmit={formSubmit}>
			<label htmlFor="name">
				Name:
				<input
					id="name"
					type="text"
					name="name"
					value={formState.name}
					onChange={inputChange}
				/>
				{errors.name.length > 0 ? <p className="error">{errors.name}</p> : null}
			</label>
			<label htmlFor="size">
				What pizza size would you like?
				<select
					id="size"
					name="size"
					value={formState.size}
					onChange={inputChange}>
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
						<input
							type="checkbox"
							name="toppings"
							value={formState.toppings}
							onChange={inputChange}
						/>
						Sausage
					</label>
					<label>
						<input
							type="checkbox"
							name="toppings"
							value={formState.toppings}
							onChange={inputChange}
						/>{' '}
						Pepperoni
					</label>
					<label>
						<input
							type="checkbox"
							name="toppings"
							value={formState.toppings}
							onChange={inputChange}
						/>{' '}
						Bacon
					</label>
					<label>
						<input
							type="checkbox"
							name="toppings"
							value={formState.toppings}
							onChange={inputChange}
						/>
						Ham
					</label>
				</p>
			</fieldset>

			<label
				htmlFor="instructions"
				value={formState.instructions}
				onChange={inputChange}>
				Any Special Instructions?
				<textarea id="instructions" name="instructions" />
			</label>
			<pre>{JSON.stringify(post, null, 2)}</pre>
			<button disabled={buttonDisabled}>Order!</button>
		</form>
	);
}

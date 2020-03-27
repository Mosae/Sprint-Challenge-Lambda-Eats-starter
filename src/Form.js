import React, { useState, useEffect } from 'react';
import * as yup from 'yup';

const formSchema = yup.object().shape({
	name: yup.string().required('Name is required')
});

export default function Form() {
	const [formState, setFormState] = useState({
		name: ''
	});
	return (
		<form>
			<label htmlFor="name">
				Name:
				<input id="name" type="text" name="name" />
			</label>

			<label htmlFor="pizza-size">
				What pizza size would you like?
				<select id="pizza-size" name="pizza-size">
					<option value="small">Small</option>
					<option value="medium"> Medium</option>
					<option value="large"> Large</option>
					<option value="xlarge"> Extra Large</option>
				</select>
				<fieldset>
					<h3>Choose your toppings</h3>

					<p>
						<label>
							<input type="checkbox" name="topping[]" value="cycling" /> Sausage
						</label>
						<label>
							<input type="checkbox" name="topping[]" value="running" />{' '}
							Pepperoni
						</label>
						<label>
							<input type="checkbox" name="topping[]" value="visit gym" /> Bacon
						</label>
						<label>
							<input type="checkbox" name="stopping[]" value="swimming" />
							Ham
						</label>
					</p>
				</fieldset>
			</label>
		</form>
	);
}

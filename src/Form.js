import React, { useState, useEffect } from 'react';
import * as yup from 'yup';

const formSchema = yup.object().shape({
	name: yup.string().required('Name is required')
});

export default function Form() {
	return (
		<form>
			<label htmlFor="name">
				Name:
				<input id="name" type="text" name="name" />
			</label>
		</form>
	);
}

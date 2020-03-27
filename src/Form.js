import React, { useState, useEffect } from 'react';

export default function Form() {
	return (
		<form>
			<label htmlFor="name">
				Name:
				<input type="text" name="name" />
			</label>
		</form>
	);
}

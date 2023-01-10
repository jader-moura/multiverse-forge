import { FormControl, InputLabel, TextField } from '@mui/material';
import React, { ChangeEventHandler } from 'react';

// import { Container } from './styles';

interface Props {
	name: string;
	onChange?:
		| ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
		| undefined;
	label?: string;
	placeholder?: string;
	error?: string;
	rows?: number;
	required?: boolean;
	type?: 'text' | 'number' | 'email' | 'password';
}

const Input: React.FC<Props> = ({
	name,
	onChange,
	label,
	placeholder,
	error,
	rows = 0,
	required,
	type = 'text',
}) => {
	return (
		<FormControl fullWidth>
			<InputLabel shrink htmlFor={`${name}-input"`}>
				{label}
			</InputLabel>
			<TextField
				type={type}
				onChange={onChange}
				error={Boolean(error)}
				helperText={error}
				name={name}
				multiline={rows > 0}
				rows={rows}
				required={required}
				placeholder={placeholder}
				variant="outlined"
			/>
		</FormControl>
	);
};

export default Input;

import {
	Checkbox,
	FormControl,
	FormHelperText,
	InputLabel,
	ListItemText,
	MenuItem,
	OutlinedInput,
} from '@mui/material';
import React from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';

// import { Container } from './styles';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250,
		},
	},
};

interface Props {
	name: string;
	options: string[];
	// onChange?:
	// 	| ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
	// 	| undefined;
	label?: string;
	placeholder?: string;
	error?: string;
}

const SelectInput: React.FC<Props> = ({
	name,
	options,
	// onChange,
	label,
	placeholder,
	error,
}) => {
	const [value, setValue] = React.useState<string[]>([]);

	const handleChange = (event: SelectChangeEvent<typeof value>) => {
		const {
			target: { value: InputValue },
		} = event;
		setValue(
			typeof InputValue === 'string' ? InputValue.split(',') : InputValue
		);
	};

	return (
		<FormControl fullWidth>
			<InputLabel id={`${name}-input-label-id`}>{label}</InputLabel>
			<Select
				labelId={`${name}-label-id`}
				id={name}
				name={name}
				multiple
				value={value}
				onChange={handleChange}
				input={
					<OutlinedInput placeholder={placeholder} error={Boolean(error)} />
				}
				renderValue={(selected) => selected.join(', ')}
				MenuProps={MenuProps}
			>
				{options.map((name) => (
					<MenuItem key={name} value={name}>
						<Checkbox checked={value.includes(name)} />
						<ListItemText primary={name} />
					</MenuItem>
				))}
			</Select>
			{Boolean(error) && <FormHelperText>{error}</FormHelperText>}
		</FormControl>
	);
};

export default SelectInput;

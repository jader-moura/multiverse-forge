import React from 'react';
import { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { TextField } from '@mui/material';

interface Props {
	name: string;
	value?: Dayjs;
	onChange: (
		value: Dayjs | null | undefined,
		keyboardInputValue?: string | undefined
	) => void;
	label?: string;
	placeholder?: string;
}

const DateInput: React.FC<Props> = ({
	name,
	value,
	onChange,
	label,
	placeholder,
}) => {
	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<DesktopDatePicker
				label={label}
				inputFormat="MM/DD/YYYY"
				value={value}
				onChange={onChange}
				renderInput={(params: any) => (
					<TextField name={name} placeholder={placeholder} {...params} />
				)}
			/>
		</LocalizationProvider>
	);
};

export default DateInput;

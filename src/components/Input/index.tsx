import { ChangeEvent } from 'react';
import { InputProps } from './types';
import './styles.css';

function Input({
	label,
	onChange,
	name,
	className,
	onUpdate,
	isValid = true,
	icon,
	...props
}: InputProps) {
	const onInputValueChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;

		if (onUpdate) onUpdate({ [name]: value });
		if (onChange) onChange(value);
	};
	return (
		<div className={`input ${className} ${!isValid ? 'invalid' : ''}`}>
			{icon && icon}
			<div className='input__wrapper'>
				<label htmlFor={name} className='input__label'>
					{label}
				</label>
				<input
					id={name}
					name={name}
					onChange={onInputValueChange}
					className='input__field'
					{...props}
				/>
			</div>
		</div>
	);
}

export default Input;

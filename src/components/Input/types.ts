import { InputHTMLAttributes } from 'react';

export interface InputProps
	extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'name'> {
	label: string;
	name: string;
	onChange?: (val: string) => void;
	onUpdate?: (val: Record<string, string>) => void;
	isValid?: boolean;
	icon?: JSX.Element;
}

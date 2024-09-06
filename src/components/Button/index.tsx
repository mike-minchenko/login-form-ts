import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import './styles.css';

const Button = ({
	children,
	className = '',
	...props
}: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) => {
	return (
		<button {...props} className={`btn ${className}`}>
			{children}
		</button>
	);
};

export default Button;

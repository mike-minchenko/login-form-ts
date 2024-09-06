import { FormEvent } from 'react';
import { useUpdateState } from '../../hooks/useUpdateState';
import Input from '../Input';
import Button from '../Button';
import './styles.css';
import Icon from '../Icon';

const LoginForm = () => {
	const [formState, updateFormState] = useUpdateState({
		email: '',
		password: '',
		error: '',
	});

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const { email, password } = formState;

		// Здесь должна быть логика аутентификации
		if (email === '' || password === '') {
			updateFormState({ error: 'Email and password are required fields' });
			return;
		}

		updateFormState({ error: '' });

		// Дальнейшие действия, такие как отправка данных на сервер
	};

	return (
		<div className='login-container'>
			<div className='login-container__icon-block'>
				<div className='login-container__icon pulse'>
					<Icon icon='done_all' className='' />
				</div>
			</div>

			<form onSubmit={handleSubmit} noValidate>
				<Input
					className='login-container__input'
					label='Email'
					name='email'
					type='email'
					value={formState.email}
					onUpdate={updateFormState}
					isValid={!formState.error}
					icon={<Icon icon='account_circle' />}
				/>

				<Input
					className='login-container__input'
					label='Password'
					name='password'
					type='password'
					value={formState.password}
					onUpdate={updateFormState}
					isValid={!formState.error}
					icon={<Icon icon='lock' />}
				/>

				<p className='login-container__error'>
					{formState.error ? <span>{formState.error}</span> : <span>&nbsp;</span>}
				</p>

				<Button type='submit'>Sign in</Button>

				<p className='login-container__unregistered'>
					Don't have an account? <a href='#'>Sign up</a>
				</p>
			</form>
		</div>
	);
};

export default LoginForm;

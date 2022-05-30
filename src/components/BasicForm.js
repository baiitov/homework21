import { useState, useEffect } from 'react'

const BasicForm = (props) => {
	const [firstname, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [email, setEmail] = useState('')
	const [isValidTouched, setIsValidTouched] = useState(false)
	const [isValidLastNameTouched, setIsValidLastNameTouched] = useState(false)
	const [isValidEmail, setIsValidEmail] = useState(false)
	const [isForm, setIsForm] = useState(false)
	const enteredNameIsValid = firstname.trim() !== ''
	const lastNameIsValid = lastName.trim() !==''
	const emaliIsValid = email.includes('@')
	const inputEnteredNameIsValid =
		!enteredNameIsValid   && isValidTouched 
	const inputEnteredEmailIsValid =!emaliIsValid&& isValidEmail 
	const inputEnteredLastName =  !lastNameIsValid && isValidLastNameTouched
	useEffect(() => {
		if (enteredNameIsValid && lastNameIsValid && emaliIsValid) {
			setIsForm(true)
		} else {
			setIsForm(false)
		}
	}, [enteredNameIsValid, lastNameIsValid, emaliIsValid])

	const firstnameHandler = (e) => {
		setFirstName(e.target.value)
	}
	const firstnameBlur = () => {
		setIsValidTouched(true)
	}

	const lastNameHandler = (e) => {
		setLastName(e.target.value)
	}
	const lastNameBlur = () => {
		setIsValidLastNameTouched(true)
	}
	const emailHanlder = (e) => {
		setEmail(e.target.value)
	}
	const emailBlur = () => {
		setIsValidEmail(true)
	}
	const submitHandler = (e) => {
		e.preventDefault()
		setIsValidTouched(true)

		if (!enteredNameIsValid) {
			return
		}
		setIsValidTouched(false)
		setIsValidLastNameTouched(true)
		if (!lastNameIsValid) {
			return
		}
		setIsValidLastNameTouched(false)

		setIsValidEmail(true)
		if (!emaliIsValid) {
			return
		}
		setIsValidEmail(false)
	}

	const inputClass = inputEnteredNameIsValid
		? 'form-control invalid '
		: 'form-control'
		const lastclass = inputEnteredLastName ? 'form-control invalid' : 'form-control'
		const emailclass = inputEnteredEmailIsValid ? 'form-control invalid' : 'form-control'
	return (
		<form onSubmit={submitHandler}>
			<div className='control-group'>
				<div className={inputClass}>
					<label htmlFor='name'>First Name</label>
					<input
						onBlur={firstnameBlur}
						value={firstname}
						onChange={firstnameHandler}
						type='text'
						id='name'
					/>
					{inputEnteredNameIsValid && <p>Name must not be empty</p>}
				</div>
				<div className={lastclass}>
					<label htmlFor='name'>Last Name</label>
					<input
						onBlur={lastNameBlur}
						value={lastName}
						onChange={lastNameHandler}
						type='text'
						id='name'
					/>
					{inputEnteredLastName && <p>Name must not be empty</p>}
				</div>
			</div>
			<div className={emailclass}>
				<label htmlFor='name'>E-Mail Address</label>
				<input
					onBlur={emailBlur}
					value={email}
					onChange={emailHanlder}
					type='text'
					id='name'
				/>
					{inputEnteredEmailIsValid && <p>Name must not be ('@')</p>}
			</div>
		
			<div className='form-actions'>
				<button disabled={!isForm}>Submit</button>
			</div>
		</form>
	)
}

export default BasicForm

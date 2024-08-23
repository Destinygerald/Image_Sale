import './style.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { IoIosArrowBack } from 'react-icons/io'

import MessageBox from '../../components/MessageBox.jsx'

const NameRegex = new RegExp(`^[a-zA-Z0-9]{3,50}`)
const EmailRegex = new RegExp(`^[^\s@]+@[^\s@]+\.[^\s@]+$`)


// const PhoneRegex = new RegExp(`^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$`)
// const PasswordRegex = new RegExp(`^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$`)


function RegInput ({ type, value, name, placeholder, changeEvent, errMsg, blurEvent, focusEvent, blurred }) {

	return (
		<div className='reg-input'>
			<input name={name} type={type} placeholder={placeholder} value={value} onChange={changeEvent} onBlur={blurEvent} />
			{ errMsg && <span className='reg-err'> {errMsg} </span> }
		</div>
	)
}

function RegisterForm () {

	const [ info, setInfo ] = useState({
		name: '',
		email: '',
		phone: '',
		password1: '',
		password2: ''
	})

	const [ infoBlurred, setInfoBlurred ] = useState({
		name: false,
		email: false,
		phone: false,
		password1: false,
		password2: false
	})

	const [ errMsg, setErrMsg ] = useState({
		name: '',
		email: '',
		phone: '',
		password1: '',
		password2: ''
	})

	const [ loading, setLoading ] = useState(false)

	const navigate = useNavigate()

	function submitHandler (e) {
		e.preventDefault()
		setLoading(true)

		setTimeout(() => {
			setLoading(false)
		}, 2000)
	}

	function redirect () {
		navigate('/login')
	}

	function changeHandler(e, regex) {
		setInfo({ ...info, [e.target.name]: e.target.value })

		if (infoBlurred[e.target.name]) {
			if(regex.test(e.target.value)) {
				setErrMsg({...errMsg, [e.target.name]: ''})
			}
		}
	}

	function blurHandler(e, regex){

		setInfoBlurred({...infoBlurred, [e.target.name]: true})

		if(!regex.test(e.target.value)) {
			switch (e.target.name) {
				case 'name':
					setErrMsg({...errMsg, [e.target.name]: 'Must have more than 2 letters'})
					break;

				case 'email':
					setErrMsg({...errMsg, [e.target.name]: 'Invalid Email format, Should contain @gmail. ' })
					break;

				case 'phone':
					setErrMsg({...errMsg, [e.target.name]: '' })
					break;

				case 'password1':
					setErrMsg({...errMsg, [e.target.name]: '' })
					break;

				case 'password2':
					setErrMsg({...errMsg, [e.target.name]: '' })
					break;

				default:
					return
			}
			
		}
	}

	return (
		<div className='reg-form'>
			<div>Create an Account</div>
			<form onSubmit={submitHandler}>
				
				<RegInput name='name' type='text' placeholder='Name' value={info.name} changeEvent={(e) => changeHandler(e, NameRegex)} blurred={infoBlurred.name} errMsg={errMsg.name} blurEvent={ (e) => {blurHandler(e, NameRegex)}} />
				<RegInput name='email' type='email' placeholder='Email' value={info.email} changeEvent={(e) => changeHandler(e, EmailRegex)} blurred={infoBlurred.email} errMsg={errMsg.email} blurEvent={ (e) => {blurHandler(e, EmailRegex)}} />
				<RegInput name='phone' type='text' placeholder='Phone' value={info.phone} changeEvent={(e) => changeHandler(e, NameRegex)} blurred={infoBlurred.phone} errMsg={errMsg.phone} blurEvent={ (e) => {blurHandler(e, NameRegex)}} />
				<RegInput name='password1' type='password' placeholder='Password' value={info.password1} changeEvent={(e) => changeHandler(e, NameRegex)} blurred={infoBlurred.password1} errMsg={errMsg.password1} blurEvent={ (e) => {blurHandler(e, NameRegex)}} />
				<RegInput name='password2' type='password' placeholder='Confirm Password' value={info.password2} changeEvent={(e) => changeHandler(e, NameRegex)} blurred={infoBlurred.password2} errMsg={errMsg.password2} blurEvent={ (e) => {blurHandler(e, NameRegex)}} />

				{
					!loading
					?
					<button> Register </button>
					:
					<button className='loading' disabled> <div /> </button>
				}
			</form>

			<div className='reg-redir' onClick={redirect}>Already have an Account? Login</div>
		</div>
	)
}

function Page () {

	const [ err, setErr ] = useState({
		message: '',
		status: ''
	})

	const navigate = useNavigate()

	function closeErrorBox () {
		setErr({ message: '', status: '' })
	}

	function goHome () {
		navigate('/')
	}

	return (
		<div className='logger'>
			<div className='logger-right'>
				{/* <img src={} />*/}
			</div>

			<div className='logger-main'>
				<RegisterForm />
				<span className='back' onClick={goHome}> <IoIosArrowBack /> </span>
			</div>

			<MessageBox message={err.message} status={err.status} clickHandler={closeErrorBox} />
		</div>
	)
}

export default Page
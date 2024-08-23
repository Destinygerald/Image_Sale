import '../register/style.css'
import '../register/mobile_style.css'
import { useState } from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'

import MessageBox from '../../components/MessageBox.jsx'

function LoginForm () {

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
		navigate('/register')
	}


	return (
		<div className='reg-form'>
			<div>Welcome Back.</div>
			<form onSubmit={submitHandler}>
				<input type='email' placeholder='Email' />
				<input type='password' placeholder='Password' />

				{
					!loading
					?
					<button> Login </button>
					:
					<button className='loading'> <div /> </button>
				}
			</form>

			<div className='reg-redir' onClick={redirect}>Don't have an Account? Register</div>
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

	function backHome() {
		navigate('/')
	}

	return (
		<div className='logger'>
			<div className='logger-right'>
				{/* <img src={} />*/}
			</div>

			<div className='logger-main'>
				<LoginForm />

				<span className='back' onClick={backHome}> <IoIosArrowBack/> </span>
			</div>

			<MessageBox message={err.message} status={err.status} clickHandler={closeErrorBox} />
		</div>
	)
}

export default Page
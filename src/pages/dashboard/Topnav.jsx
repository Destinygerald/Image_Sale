import './style.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaBell } from 'react-icons/fa'
import { IoPerson, IoSearchOutline } from 'react-icons/io5'


function Topnav () {

	const [ search, setSearch ] = useState('')
	const navigate = useNavigate()

	function changeHandler (e) {
		setSearch(e.target.value)
	}

	function toProfile() {
		navigate('/dashboard/profile')
	}

	return (
		<div className='topnav'>
			<div className='top-search'>
				<input type='text' placeholder='Search' value={search} onChange={changeHandler} />
				<span className='search-icon'> <IoSearchOutline />  </span>
			</div>

			<div className='top-right'>
				<div className='top-notification'> <FaBell /> </div>
				<div className='top-profile' onClick={toProfile}>
					<div> <IoPerson /> </div>
					<div>Username</div>
				</div>
			</div>
		</div>
	)
}

export default Topnav
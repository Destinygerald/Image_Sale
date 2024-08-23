import './style.css'
import './mobile_style.css'
import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'
import { IoPerson } from 'react-icons/io5'
import Transactions from './Transactions.jsx'
import Bids from './Bids.jsx'
import { DeletePopup, EditPopup } from './Popups.jsx'

function ProfileDetails ({ editHandler, deleteHandler }) {

	const [ userInfo, setUserInfo ] = useState({
		name: 'Jane Doe',
		phone: '+123 4567 890',
		email: 'janedoe@gmail.com',
		token: '1000',
		profileImg: ''
	})

	const navigate = useNavigate()

	useEffect(() => {
		// fetch user profile
	}, [])

	function goBack() {
		navigate('/dashboard')
	}

	return (
		<div className='profile-details'>
			<span className='profile-back' onClick={goBack}> <IoIosArrowBack /> </span>
			<div className='profile-img'> {userInfo.profileImg ? <img src={userInfo.profileImg}/> : <span className='profile-img-placeholder'> <IoPerson /> </span> } </div>
			
			<div className='profile-info'>
				<div className='profile-info-top'>
					<div> <span> Name: </span> { userInfo?.name ? <span>{userInfo?.name}</span>  : <span className='profile-placeholder' /> } </div>
					<div> <span> Phone: </span> { userInfo?.phone ? <span>{userInfo?.phone}</span>  : <span className='profile-placeholder' /> } </div>
					<div> <span> Email: </span> { userInfo?.email ?  <span>{userInfo?.email}</span> : <span className='profile-placeholder' /> } </div> 
					<div> <span> Balance: </span> { userInfo?.token ?   <span>{userInfo?.token} DZT</span> : <span className='profile-placeholder' /> } </div>
				</div>
				<div className='profile-btns'>
					<button onClick={editHandler}>Edit Profile</button>
					<button onClick={deleteHandler}>Delete Account</button>
				</div>
			</div>
		</div>
	)
}

function ProfileBottomHdrCta ({ name, handleClick, selected }) {
	return (
		<div onClick={() => handleClick(name)} className={selected == name ? 'profile-btm-cta profile-selected' : 'profile-btm-cta' }>{name}</div>
	)
}


function ProfileBottom () {
	
	const [ selected, setSelected ] = useState('Transactions')

	function reselect (arg) {
		setSelected(arg)
	}

	return (
		<div className='profile-bottom'>
			<div className='profile-btm-hdr'>
				<ProfileBottomHdrCta name='Transactions' selected={selected} handleClick={reselect} />
				<ProfileBottomHdrCta name='Bids' selected={selected} handleClick={reselect} />
			</div>

			{
				selected == 'Transactions'
				?
				<Transactions />
				:
				<Bids />
			}
		</div>
	)
}

function Page () {

	const [ deletePopup, setDeletePopup ] = useState(false)
	const [ editPopup, setEditPopup ] = useState(false)

	const delRef = useRef(null)
	const editRef = useRef(null)

	useEffect(() => {
		// fetch user data
	}, [])

	return (
		<div className='profile'>
			<ProfileDetails deleteHandler={() => setDeletePopup(true)} editHandler={() => setEditPopup(true)} />
			<ProfileBottom />

			<DeletePopup state={deletePopup} setState={setDeletePopup} compRef={delRef} />
			<EditPopup state={editPopup} setState={setEditPopup} compRef={editRef} />
		</div>
	)
}

export default Page;
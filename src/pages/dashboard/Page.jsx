import './style.css'
import './mobile_style.css'
import { useState, useEffect, useRef } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { BsMenuAppFill, BsX } from 'react-icons/bs'
import { BiSolidDashboard } from 'react-icons/bi'
import { CiMenuBurger } from 'react-icons/ci'
import { FaBell } from 'react-icons/fa'
import { FaCartShopping } from 'react-icons/fa6'
import { IoIosHeart } from 'react-icons/io'
import { RiAuctionFill } from 'react-icons/ri'
import { IoPerson, IoSearchOutline } from 'react-icons/io5'

import NotFound from '../404/Page.jsx'
import Index from './index/Page.jsx'
import Profile from './profile/Page.jsx'
import Auction from './auctions/Page.jsx'
import Favorites from './favorites/Page.jsx'

import BidPopup from './BidPopup.jsx'

// SidebarItem - for desktop and tablets that fit the screen description

function SidebarItem ({ icon, text, nav, setSlider }) {

	const { pathname } = useLocation()
	const navigate = useNavigate()

	function clickHandler () {
		navigate(nav)

		if (setSlider) {
			setSlider(false)
		}
		
	}

	return (
		<div className={ pathname == nav ? 'selected sdb-option' : 'sdb-option' } onClick={clickHandler}>
			<div> {icon} </div>

			<span>{text}</span>
		</div>
	)
}

// Sidebar - for desktop and tablets that fit the screen description

function Sidebar () {
	return (
		<div className='sidebar'>
			
			<div className='sdb-logo'> 
				<span> DZ </span>
				<span>Auction</span>
			</div>

			<div className='sdb-items'>
				<SidebarItem icon={<BiSolidDashboard /> } text='Home' nav='/dashboard'/>
				<SidebarItem icon={<RiAuctionFill /> } text='Auctions' nav='/dashboard/auctions'/>
				<SidebarItem icon={<IoIosHeart /> } text='Favorites' nav='/dashboard/favorite'/>
				<SidebarItem icon={<IoPerson /> } text='Profile' nav='/dashboard/profile'/>
				<SidebarItem icon={<BsMenuAppFill /> } text='Listings' nav='/dashboard/listings'/>
			</div>
		</div>
	)
}

// Slider - only for mobile

function Slider ({ slider, setSlider }) {

	const ref = useRef(null)

	function closeSlider() {
		setSlider(false)
	}

	function blurHandler (e) {
		if (!ref) return;

		if (!ref.current.contains(e.target)) {
			closeSlider()
		}
	}

	useEffect(() => {
		const dashboard = document.querySelector('.dashboard')
		const slider = document.querySelector('.slider')

		dashboard.addEventListener('pointerdown', blurHandler)

		return () => dashboard.removeEventListener('pointerdown', blurHandler)

	})

	return (
		<div className={slider ? 'slider' : 'no-slider'} ref={ref}>
			{
			slider
			?
			<>
				<span className='slider-exit' onClick={closeSlider}> <BsX /> </span>

				<div className='slider-items'>
					<SidebarItem setSlider={setSlider} icon={<BiSolidDashboard /> } text='Home' nav='/dashboard'/>
					<SidebarItem setSlider={setSlider} icon={<RiAuctionFill /> } text='Auctions' nav='/dashboard/auctions'/>
					<SidebarItem setSlider={setSlider} icon={<IoIosHeart /> } text='Favorites' nav='/dashboard/favorites'/>
					<SidebarItem setSlider={setSlider} icon={<IoPerson /> } text='Profile' nav='/dashboard/profile'/>
					<SidebarItem setSlider={setSlider} icon={<BsMenuAppFill /> } text='Listings' nav='/dashboard/listings'/>
				</div>
			</>
			:
			''
			}
		</div>
	)
}

// Navbar - only for mobile

function Navbar ({ setSlider }) {

	function openSlider () {
		setSlider(true)
	}

	return (
		<div className='navbar'>
			<div className='sdb-logo'> 
				<span> DZ </span>
			</div>

			<span className='navbar-menu' onClick={openSlider}> <CiMenuBurger /> </span>
		</div>
	)
}


function Page () {

	const [ slider, setSlider ] = useState(false)

	return (
		<div className='dashboard'>

			<Navbar setSlider={setSlider} />
			<Slider setSlider={setSlider} slider={slider} />
			<Sidebar />

			<div className='dashboard-main'>

				<Routes>
					<Route index element={<Index />} />
					<Route path='/profile' element={<Profile />} />
					<Route path='/auctions' element={<Auction />} />
					<Route path='/favorite' element={<Favorites />} />
					<Route path='*' element={<NotFound />} />
				</Routes>

				<BidPopup />
			</div>
		</div>
	)
}

export default Page;
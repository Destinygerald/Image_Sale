// import '../style.css'
import './style.css'
import './mobile_style.css'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { IoMdHourglass } from 'react-icons/io'
import { countdown } from '../helpers.functions.js'
import HotBids from './HotBids.jsx'
import TopCollections from './TopCollections.jsx'
import Topnav from '../Topnav.jsx'

import { openPopup } from '../../../context/Bidpopup.jsx'

const Listings = [
	{
		img: '/pic5.jpg',
		item: '',
		date: ''
	},
	{
		img: '/pic6.jpg',
		item: '',
		date: ''
	},
	{
		img: '/pic14.jpg',
		item: '',
		date: ''
	},
	{
		img: '/pic27.jpg',
		item: '',
		date: ''
	}
]

function IndexDisplayCard () {

	const navigate = useNavigate()

	return (
		<div className='index-top-display'>
			<span>Discover, Collect and Sell Valuables. </span>
			<span>Lorem ipsum dolor sit amet, consectetur adipiscing elit donec consectetur semper nunc in molestie. Lorem ipsum dolor sit amet consectetur adipiscing. </span>

			<div className='index-top-btn'>
				<button onClick={() => navigate('/dashboard/auctions')}>Explore</button>
				<button onClick={() => navigate('/dashboard/listings')}>Add Item</button>
			</div>
		</div>
	)
}

function OngoingAuctionCard () {

	const [ count, setCount ] = useState();
	const [ time, setTime ] = useState((60 * 60 * 8) + 170)

	const dispatch = useDispatch()

	useEffect(() => {
		// fetch the data for the card
		// and store it in a state
	}, [])

	useEffect(() => {


		// let counter = setInterval(() => {
		// 	countdown(time, setCount, setTime)
		// 	console.log(count)
		// }, 5000)

		// if (time <= 0 ) {
		// 	return clearInterval(counter)
		// }
	})

	function details () {
		// pass the auction info to the popup

		dispatch(openPopup())
	}

	return (
		<div className='index-ongoing-card'>
			<div className='ongoing-image'></div>

			<div className='ongoing-details'>
				<div className='ongoing-details-hdr'>
					<div> <img /> </div>
					<div> Owner Name </div> 
				</div>

				<div className='ongoing-details-name'>Item Name</div>

				<div className='ongoing-time-highest-bid'>
					
					<div className='ongoing-time'>
						<span>Auction Time</span>
						<div>
							<span> <IoMdHourglass /> </span>
							<span> 00 : 00 : 00</span>
						</div>
					</div>

					<div className='ongoing-highest-bid'>
						<span>Highest Bid</span>
						<div> 12SRP </div>
					</div>

				</div>

				<div className='ongoing-btn'>
					<button onClick={details}>Bid Now</button>
				</div>

			</div>
		</div>
	)
}

function IndexTop () {
	return (
		<div className='index-top'>
			<IndexDisplayCard />
			<OngoingAuctionCard />
		</div>
	)
}


function Page() {
	return (
		<div className='index'>
			<Topnav />
			<IndexTop />
			<HotBids />
			<TopCollections />
		</div>
	)
}

export default Page
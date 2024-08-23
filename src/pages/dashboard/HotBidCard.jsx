import './index/style.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { IoMdHourglass, IoIosHeart } from 'react-icons/io'

import { openPopup } from '../../context/Bidpopup.jsx'

function HotBidCards ({ itemImg, itemName, itemOwner, time, bid }) {
	
	const [ fave, setFave ] = useState(false)
	const dispatch = useDispatch()

	function placeBid () {
		// pass the item info to the popup

		dispatch(openPopup())
	}

	function toggleFave () {
		// pass the item info to add or remove from favorites

		setFave(!fave)
	}

	return (
		<div className='hot-bids-card'>
			
			<div className={fave ? 'hot-bid-fav-mbl fav' : 'hot-bid-fav-mbl'} onClick={toggleFave}> <IoIosHeart /> </div>	

			<div className='hot-bids-img'> 
			{
				itemImg 
				? 
				<img src={itemImg} /> 
				: 
				''
			}
			</div>

			<div className='hot-bids-details'>

				<div className={fave ? 'hot-bid-fav fav' : 'hot-bid-fav'} onClick={toggleFave}> <IoIosHeart /> </div>

				<div className='hot-bids-details-cnt'>
					{itemName ? <span className='hot-bid-details-name'>{itemName}</span>: <span className='hot-bid-details-name-placeholder'/> }

					<div className='ongoing-time'>
						<span>Auction Time</span>
						<div>
							<span> <IoMdHourglass /> </span>
							{time ? <span> 00 : 00 : 00</span> : <span className='hot-bid-details-time-placeholder' />}
						</div>
					</div>

					<div className='ongoing-highest-bid'>
						<span>Highest Bid</span>
						{bid ? <div> 12SRP </div> : <span className='hot-bid-details-time-placeholder' />}
					</div>
				</div>

				<button className='hot-bids-btn' onClick={placeBid}>Bid Now</button>
			</div>

		</div>
	)
}

export default HotBidCards;
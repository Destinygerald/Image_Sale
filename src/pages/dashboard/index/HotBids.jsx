import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import HotBidCard from '../HotBidCard.jsx'


function HotBids () {

	const [hotBids, setHotBids] = useState([])

	const navigate = useNavigate()

	function seeMore() {
		navigate('/dashboard/auctions')
	}

	useEffect(() => {
		// fetch hot bids data
	}, [])

	return (
		<div className='hot-bids'>
			<div className='hot-bids-hdr'>
				<span>🔥Hot Bids</span>
				<button onClick={seeMore}>See more</button>
			</div>

			<div className='hot-bids-cnt'>
			{
				Array.from(Array(3)).map((item, i) => (
					<HotBidCard key={'hot-bid-card ' + i} />
				))
			}
			</div>
		</div>
	)
}

export default HotBids;
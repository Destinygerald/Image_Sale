import './style.css'
import { useEffect } from 'react'

import BidCard from '../HotBidCard.jsx'

function Page () {

	useEffect(() => {
		// fetch the list of favorites item
	}, [])

	return (
		<div className='favorites'>

			<div className='favorites-hdr'> Favorites </div>

			<div className='favorites-cnt'>
				{
					Array.from(Array(12)).map((itm, i) => (
						<BidCard key={'fav' + i}  />
					))
				}
			</div>
		</div>
	)
}

export default Page;
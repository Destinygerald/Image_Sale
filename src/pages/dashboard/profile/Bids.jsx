import { useState, useEffect } from 'react'

function Bids () {

	const [ bids, setBids ] = useState('')

	useEffect(() => {
		// fetch user's transaction history
	}, [])

	return (
		<div className='bids'>
			{
				bids ?
				<></>
				:
				<div className='no-bids'>No Bids</div>
			}
		</div>
	)
}

export default Bids;
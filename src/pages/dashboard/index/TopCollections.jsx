import { useState, useEffect } from 'react'

function TopCollectionsCard ({ imgSrc, name, bid }) {
	return (
		<div className='tp-cllt-card'>
			<div className='tp-cllt-img'> 
				<img src={imgSrc} /> 
			</div>

			<div className='tp-cllt-cnt'>
				{ name ? <div>{name}</div> : <div className='tp-cllt-name-placeholder' /> }
				{ bid ? <div>${bid}</div> : <div className='tp-cllt-bid-placeholder' /> }
			</div>
		</div>
	)
}

function TopCollections () {

	const [ topCollections, SetTopCollections ] = useState([])

	useEffect(() => {
		// fetch top collections data
	}, [])

	return (
		<div className='top-collections'>
			<div className='hot-bids-hdr'>
				<span>⭐Top Collections</span>
				<button>See more</button>
			</div>

			<div className='top-collections-cnt'>
				{
					Array.from(Array(6)).map((item,i) => (
						<TopCollectionsCard key={'tp-cllt ' + i} />
					))
				}
			</div>
		</div>
	)
}

export default TopCollections;
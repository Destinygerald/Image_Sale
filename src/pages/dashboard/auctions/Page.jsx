import './style.css'
import './mobile_style.css'
import { useEffect, useState } from 'react'
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai'
import Topnav from '../Topnav.jsx'
import HotBidCard from '../HotBidCard.jsx'

function AuctionCard () {
	return (
		<div className='auction-card'>
		</div>
	)
}

function AuctionPageHdr ({ sort, setSort }) {

	const [ opened, setOpened ] = useState(false)

	function toggleState () {
		setOpened(!opened)
	}

	function selectSort (arg) {
		setSort(arg)
		setOpened(false)
	}

	return (
		<div className='auctions-main-hdr'>
			<div className='auctions-hdr-sort'>
				<div onClick={toggleState}>
					<span>{sort}</span>
					<span>{ opened ? <AiOutlineCaretUp /> : <AiOutlineCaretDown />}</span>
				</div>

				{
					opened &&
					<div className='sort-option'>
						<span onClick={() => selectSort('All')}>All</span>
						<span onClick={() => selectSort('English Auction')}>English Auction</span>
						<span onClick={() => selectSort('Dutch Auction')}>Dutch Auction</span>
					</div>
				}
			</div>

			<button> New Auction</button>
		</div>
	)
}

function Page() {

	const [ sort, setSort ] = useState('All')

	useEffect(() => {
		// fetch available auctions
	}, [])

	return (
		<div className='auctions'>
			<Topnav />

			<div className='auctions-main'>
				<AuctionPageHdr sort={sort} setSort={setSort} />
					

				<div className='auctions-cnt'>
					<div className='auctions-grid'>
						{
							Array.from(Array(12)).map((item, i) => (
								<HotBidCard key={'auction-bid-card ' + i} />
							))
						}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Page;
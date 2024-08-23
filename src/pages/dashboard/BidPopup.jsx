import './style.css'
import { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BsX } from 'react-icons/bs'
import { closePopup } from '../../context/Bidpopup.jsx'

function BidPopup () {

	const ref = useRef(null)
	const popup = useSelector(state => state.bid_popup.value)
	const dispatch = useDispatch()

	useEffect(() => {
		const dashboard = document.querySelector('.dashboard')
		const popup_itm = document.querySelector('.popup')

		function close(e) {
			if (!popup_itm) return

			if (!ref.current.contains(e.target)) {
				dispatch(closePopup())
			}
		}

		dashboard.addEventListener('pointerdown', close)

		return () => dashboard.removeEventListener('pointerdown', close)
	})

	function exit () {
		dispatch(closePopup())
	}

	return (
		<div className={popup ? 'popup bid-popup' : 'popup-hide'} ref={ref}>
			<span className='exit' onClick={exit}> <BsX /> </span>

			<div className='popup-img'></div>

			<div className='popup-desc'></div>
		</div>
	)
}

export default BidPopup;
import "../../pages/landingpage/style.css"
import { motion, useMotionValue } from 'framer-motion'
import { useEffect, useState } from "react"
import { useLocation, useNavigate } from 'react-router-dom'

const ItemsArray = Array.from(Array(6))

function Items () {
	return (
		<div className='hr-items'>
			<div className='hr-carousel'>
				{
					ItemsArray.map((item, i) => (
						<div key={'item' + i} className='hr-carousel-card'></div>
					))
				}
			</div>
		</div>
	)
}

function Cursor ({ x, y, setHasHovered, hasHovered }) {

	const navigate = useNavigate()

	function initHover () {
		if (hasHovered) return;
		setHasHovered(true)
	}

	function clickHandler () {
		navigate('/register')
	}

	return (
		<motion.div onClick={clickHandler} className='hr-cursor' style={{ top: y, left: x }} onMouseEnter={initHover}>
			Get Started
		</motion.div>
	)
}

function Herosection() {

	const [ container, setContainer ] = useState(document.querySelector('.hr-cursor')?.getBoundingClientRect())
	const [ hasHovered, setHasHovered ] = useState(false)

	const x = useMotionValue(null)
	const y = useMotionValue(null)



	function mouseHandler (e) {
		if (!container || !hasHovered) return

		// Pause this shit for now

		// if (e.clientY - (container.height / 2) <= 0) {
		// 	y.set(0)		
		// } else {
		// 	y.set(e.clientY - (container.height / 2) )
		// }

		// if (e.clientX - (container.width / 2) <= 0) {
		// 	x.set(0)		
		// } else {
		// 	x.set(e.clientX - (container.width / 2) )
		// }

		

		// console.log('client-x: ', e.clientX, ' client-y: ',  e.clientY)
		// console.log('cursor-x: ', container.x - container.width, ' cursor-y: ', container.y - container.height)
	}

	useEffect(() => {
		setContainer(document.querySelector('.hr-cursor').getBoundingClientRect())
	}, [])

	return (
		<div className="hr-sect" onMouseMove={mouseHandler}>
			<div className='hr-sect-main'>
				<div className='hr-cnt'>
					<img src='/bg_img.jpg' / > 	
					
					<div className='hr-head'> DZ </div>
					<div className='hr-txt'>Create, Sell and Discover Auctions</div>
				</div>


				<Cursor x={x} y={y} setHasHovered={setHasHovered} hasHovered={hasHovered} />
			</div>

			<Items />
		</div>
	)
}

export default Herosection;
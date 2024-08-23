import { motion, useMotionValue } from 'framer-motion'
import { useEffect, useState } from 'react'
import img1 from '/pic5.jpg'
import img2 from '/pic6.jpg'
import img3 from '/pic21.jpg'
import img4 from '/pic27.jpg'

const FeaturesArray = [
	{
		title: 'Building',
		img: img1,
		color: '#FF66FF'
	},
	{
		title: 'Design',
		img: img2,
		color: '#66FFFF'
	},
	{
		title: 'Connectivity',
		img: img3,
		color: '#CDDCDD'
	},
	{
		title: 'Amenities',
		img: img4,
		color: '#CCCCDD'
	}
]

function FeaturesCard ({ title, x, y, color, img }) {


	return (
		<div className='features-card'>
			<span>{title}</span>
			<motion.div className='features-cursor' style={{left: x, top: y}}> <img src={img} /> </motion.div>
		</div>
	)
}

function Features () {

	const [ cursor, setCursor ]  = useState(document.querySelectorAll('.features-card'))

	const x = useMotionValue(0)
	const y = useMotionValue(0)

	

	function mouseHandler(e) {

		if (!cursor[0]) return;
		
		x.set(e.clientX - (cursor[0].getBoundingClientRect().width / 2))
		y.set(e.clientY - (cursor[0].getBoundingClientRect().height / 2))
	}

	useEffect(() => {
		setCursor(document.querySelectorAll('.features-card'))
	}, [])

	return (
		<div className='features' onMouseMove={mouseHandler} >
			{
				FeaturesArray.map((item, i) => (
					<FeaturesCard key={'feature' + i} img={item.img} color={item.color} title={item.title} x={x} y={y} />
				))
			}
		</div>
	)
}

export default Features
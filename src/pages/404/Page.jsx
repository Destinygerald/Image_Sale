import './style.css'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router'

const variants_4 = {
	initial: {
		rotate: 0
	},

	animate: {
		rotate: 10,

		transition: {
			delay: .8
		}
	}
}

const variants_0 = {
	initial: {
		rotate: 0,
		y: 0
	},

	animate: {
		rotate: -5,
		y: `${5}%`,

		transition: {
			delay: .6
		}
	}
}

function Page () {

	const navigate = useNavigate()

	function clickHandler () {
		navigate('/')
	}

	return (
		<div className='not-found'>
			<div className='not-found-hdr'>
				<div>4</div>
				<motion.div initial='initial' animate='animate' variants={variants_0}>0</motion.div>
				<motion.div className='break' initial='initial' animate='animate' variants={variants_4}>4</motion.div>
			</div>

			<div className='not-found-link' onClick={clickHandler}>Page Not Found. Click to go Home</div>
		</div>
	)
}

export default Page;
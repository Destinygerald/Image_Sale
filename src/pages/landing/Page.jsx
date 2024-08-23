import './style.css'
import './mobile_style.css'
import { useEffect, useState } from 'react'
import { motion, useSpring, useTransform } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { FaTwitter, FaPhoneAlt } from 'react-icons/fa'
import { IoLogoWhatsapp, IoMdMail } from 'react-icons/io'

// import background from './landingPage/backdrop-img2.jpg'
import man from '/landingPage/man.jpg'
import fractal from '/landingPage/fractal.jpg'
import time from '/landingPage/time.jpg'
import galaxy from '/landingPage/galaxy.png'
import digital_art from '/landingPage/digital-art.png'
import ink from '/landingPage/ink.jpg'
import woman from '/landingPage/woman.jpg'


function ImageTemplate1 ({ posX, posY, width, height }) {

	const y = useTransform( posY, [0, height.current], [0, 20])
	const x = useTransform( posX, [0, width.current], [0, 20])
	const degY = useTransform(posY, [0, height.current], [0, 12])
	const degX = useTransform(posX, [0, height.current], [0, 10])

	return (
		<motion.div className='img-tmpl-1' style={{ y, x }}>
			<motion.div style={{ rotateY: degY, rotateX: degX }}> <img src={man} /> </motion.div>
			<motion.div style={{ rotateY: degY, rotateX: degX }}> <img src={fractal} /> </motion.div>
			<motion.div style={{ rotateY: degY, rotateX: degX }}> <img src={time} /> </motion.div>
			<motion.div style={{ rotateY: degY, rotateX: degX }}> <img src={galaxy} /></motion.div>
		</motion.div>
	)
}

function ImageTemplate2 ({ posX, posY, width, height }) {

	const y = useTransform( posY, [0, height.current], [0, -28])
	const x = useTransform( posX, [0, width.current], [0, -24])
	const degY = useTransform(posY, [0, height.current], [0, -8])
	const degX = useTransform(posX, [0, height.current], [0, -10])

	return (
		<motion.div className='img-tmpl-2' style={{ y, x }}>
			<motion.div style={{ rotateY: degY, rotateX: degX }}> <img src={digital_art} /> </motion.div>
			<motion.div style={{ rotateY: degY, rotateX: degX }}> <img src={woman} /> </motion.div>
			<motion.div style={{ rotateY: degY, rotateX: degX }}> <img src={ink} /> </motion.div>
		</motion.div>
	)
}

function NavTemplate () {

	const navigate = useNavigate()

	function login () {
		navigate('/login')
	}

	return (
		<div className='txt-tmpl-hdr'>
			<span className='txt-tmpl-hdr-logo'>DZ</span>

			<div className='txt-tmpl-hdr-item'>
				<span> Home </span>
				<span> About </span>
				<span> Features </span>
			</div>

			<button onClick={login}>Login</button>
		</div>
	)
}

function Socials () {

	return (
		<div className='lp-socials'>
			<div>
				<span> <FaPhoneAlt /> </span>
				<span> +234 812 345 6789  </span>
			</div>
			
			<div>
				<span> <IoMdMail /> </span>
				<span> dzauctions@gmail.ciom </span>
			</div>
			
			<div>
				<span> <IoLogoWhatsapp /> </span>
				<span> +234 812 345 6789  </span>
			</div>
		</div>
	)
}

function TextTemplate () {

	const navigate = useNavigate()

	function register() {
		navigate('/register')
	}

	return (
		<div className='txt-tmpl'>
			<NavTemplate />

			<div className='txt-tmpl-cnt'>
				<div>
					<span>DZ</span>
					<span>Auctions</span>
				</div>

				<div> Create, Sell and Buy all sort of Digital Arts </div>

				<button onClick={register}>Get Started</button>

			</div>
		</div>
	)
}

function Page () {

	const width = useSpring(window.innerWidth)
	const height = useSpring(window.innerHeight)

	const x = useSpring(0)
	const y = useSpring(0)

	function resizeHandler () {
		width.set(window.innerWidth)
		height.set(window.innerHeight)
	}

	useEffect(() => {
		window.addEventListener('resize', resizeHandler)

		return () => window.removeEventListener('resize', resizeHandler)
	}, [])


	function mousehandler (e) {

		if (!document.querySelector('.landing_page')) return;

		x.set(e.clientX)
		y.set(e.clientY)
	}

	return (
		<div className='landing_page' onMouseMove={mousehandler}>
			<ImageTemplate1 posX={x} posY={y} width={width} height={height} />
			<ImageTemplate2 posX={x} posY={y} width={width} height={height} />
			<TextTemplate />
			<Socials />
		</div>
	)
}

export default Page;
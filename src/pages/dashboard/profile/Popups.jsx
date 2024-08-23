import { useState, useEffect } from 'react'
import { BsX } from 'react-icons/bs'

export function DeletePopup ({ compRef, state, setState }) {
	
	function blurHandler (e) {
		if (!compRef) return;

		if (!compRef?.current?.contains(e.target)) {
			setState(false)
		}
	}

	useEffect(() => {
		const profile = document.querySelector('.profile')
		const popup = document.querySelector('.delete-popup')

		if (!profile || !popup) return;

		profile.addEventListener('pointerdown', blurHandler)

		return () => profile.removeEventListener('pointerdown', blurHandler)

	})

	function exit() {
		setState(false)
	}

	return (
		<div className={state ? 'delete-popup' : 'hide-popup'} ref={compRef}>
			<span className='exit-icon' onClick={exit}> <BsX /> </span>
		</div>
	)
}

export function EditPopup ({ compRef, state, setState }) {

	function blurHandler (e) {
		if (!compRef) return;

		if (!compRef?.current?.contains(e.target)) {
			setState(false)
		}
	}
	
	useEffect(() => {
		const profile = document.querySelector('.profile')
		const popup = document.querySelector('.edit-popup')

		if (!profile || !popup) return;

		profile.addEventListener('pointerdown', blurHandler)

		return () => profile.removeEventListener('pointerdown', blurHandler)
	})

	function exit() {
		setState(false)
	}

	return (
		<div className={state ? 'edit-popup' : 'hide-popup'} ref={compRef}>
			<span className='exit-icon' onClick={exit}> <BsX /> </span>
		</div>
	)
}
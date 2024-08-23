import './style.css'
import { BsX } from 'react-icons/bs'
import { useState } from 'react'

function MessageBox ({ message, status, clickHandler }) {

	return (
		<div className={message ? 'msg' : 'msg-hide'}>
			<span className={status == 'success' ?'msg-info success' : 'msg-info failure'}> { message } </span>
			<span className='msg-exit' onClick={clickHandler}> <BsX /> </span>
		</div>
	)
}

export default MessageBox;
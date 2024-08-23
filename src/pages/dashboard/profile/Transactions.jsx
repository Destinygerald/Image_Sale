import { useState, useEffect } from 'react'

function Transactions () {

	const [ transactions, setTransactions ] = useState('')

	useEffect(() => {
		// fetch user's transaction history
	}, [])

	return (
		<div className='transactions'>
			{
				transactions ?
				<></>
				:
				<div className='no-transactions'>No Transaction Found</div>
			}
		</div>
	)
}

export default Transactions
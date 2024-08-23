import img14 from '/pic14.jpg'

function Explanation () {
	return (
		<div className='explain'>
			<div className='expl-main'>
				<div className='expl-hdr'>Place Valuable Items For Auction </div>

				<div className='expl-txt'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit donec consectetur semper nunc in molestie. 

					Sed velit lectus, porttitor eu convallis sit amet, semper eget mauris. Integer in pulvinar mauris. Donec facilisis placerat magna sed cursus. Mauris vel tristique arcu. Duis congue orci id libero dictum sollicitudin. Curabitur dapibus arcu leo, condimentum tempus augue condimentum sed. Aliquam sed auctor ex. Nunc quis neque non eros dictum scelerisque ut ac urna.
				</div>
			</div>

			<div className='expl-img'> <img src={img14} /> </div>
			<div className='expl-right' />
		</div>
	)
}

export default Explanation;
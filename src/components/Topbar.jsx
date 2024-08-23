import { useNavigate, useLocation } from 'react-router-dom'
import { CiMenuBurger } from 'react-icons/ci'
import './style.css'


function Topbar() {

	const { pathname } = useLocation()
	const navigate = useNavigate()

	function active(arg) {
		if (pathname === arg ) return 'active nav-item'
		return 'nav-item'
	}

	function handleClick (arg) {
		navigate(arg)
	}

	return (
		<div className="topbar">

				<span className={active('/')} onClick={() => navigate('/')}>Home</span>
				<span className={active('/community')}> Community </span>

				<div className='logo'>DzAuction</div>

				<span className={active('/about')} onClick={() => navigate('/about')}>About us</span>
				<span className={active('/contact')} onClick={() => navigate('/contact')}>Contact us</span>

			<span className='menu-icon'> <CiMenuBurger /> </span>
		</div>
	)
}

export default Topbar;
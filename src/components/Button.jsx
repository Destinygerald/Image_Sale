import "./style.css"
import { motion } from "framer-motion"

function Button ({ text, action, type, icon, border }) {
	return (
		<button className={`btn ${type} ${border}`} onClick={action}>
			<span>{text}</span>
			<span>{icon}</span>
		</button>
	)
}

export default Button;
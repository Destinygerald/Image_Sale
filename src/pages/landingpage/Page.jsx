import "./style.css"
import Herosection from "../../components/landingpage/Herosection"
import Sectors from "../../components/landingpage/Sectors"
import Features from "../../components/landingpage/Features"
import Explanation from '../../components/landingpage/Explanation'

function Page () {
	return (
		<div className="landing-page">
			<Herosection />
			<Sectors />
			<Features />
			<Explanation />
		</div>
	)
}

export default Page;
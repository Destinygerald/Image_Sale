export function countdown (time, setState, setTime ) {

	let timeDisplay = ''

	// for hour display
	timeDisplay += Math.floor(time / (60 * 60)) + ' : '

	// for minute display
	timeDisplay += Math.floor(( time - ( Math.floor(time / (60 * 60)) * 60 * 60)) / (60)) + ' : '

	// for seconds display
	timeDisplay += Math.floor(( time - ( Math.floor(time / (60 * 60)) * 60 * 60)) % (60))

	setTime((time) => time - 1)

	setState(timeDisplay)
}
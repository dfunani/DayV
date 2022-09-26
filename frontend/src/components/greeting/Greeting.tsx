import { useState } from "react"

export default function Greeting(props: any) {
	const [greet, setGreet] = useState({to: '', from: '', select: 'Greeting will go here'})
	return (
		<div className="Main Greet">
			<div className="Display-Greeting">
			{greet.to} {greet.select} {greet.from}
			</div>
			<div className="To-Container">
				<label htmlFor="ToInput">To:</label>
				<input type="text" id="ToInput" onInputCapture={(e: any) => setGreet((prev) => ({...prev, to: e.target.value.toUpperCase() + ', '}))}/>
			</div>
			<div className="Select-Greeting">
				<label htmlFor="SelectGreeting">Select Greeting:</label>
				<select name="Select Greeting" id="SelectGreeting" onChange={(e: any) => setGreet((prev) => ({...prev, select: e.target.value}))}>
					<option value="Greeting will go here">--Select greeting--</option>
					<option value="I choo choo choose you! 🚂">I choo choo choose you! 🚂</option>
					<option value="You are my sunshine! 🌞">You are my sunshine! 🌞</option>
					<option value="Happy Valentine's! 💘">Happy Valentine's! 💘</option>
				</select>
			</div>
			<div className="From-Container">
				<label htmlFor="FromInput">From:</label>
				<input type="text" id="FromInput" onInputCapture={(e: any) => setGreet((prev) => ({...prev, from: 'From: ' + e.target.value.toUpperCase(e)}))}/>
			</div>
		</div>
	)
}
import { useState } from "react"

export default function Grammar(props: any) {
	let [phrase, setPhrase] = useState("")
	function Corrector()
	{
		setPhrase((prev: any) => prev.split(' ').map((elem: any) => elem.slice(0, 1).toUpperCase() + elem.slice(1).toLowerCase()).join(' ')) 
		console.log("hi")
	}
	return (
		<div className="Main">
			<div className="Grammar-Header">
				<h1>Romantic Grammar <br></br> Corrector 💘</h1>
				</div>
			<div className="GrammarInput-Container">
				<input type="text" aria-label="Grammar-Input" value={phrase} onChange={(e) => setPhrase(() => e.target.value)}/>
			</div>
			<button className="Grammar-Button" type="button" onClick={() => { Corrector() }}>Correct Grammar</button>
		</div>

	)
}
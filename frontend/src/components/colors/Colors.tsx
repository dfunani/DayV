import { useEffect, useState } from "react"

function Colors(props: any)
{
	const [color, setColor] = useState(getComputedStyle(document.body).getPropertyValue('--'))
	
	async function ColorPicker()
	{
		document.documentElement.style.setProperty('--HeartColor',color)
		console.log('clicked')
		let response = await fetch('https://apis.scrimba.com/hexcolors/?count=1')
		let result = await response.json()
		console.log(result.colors[0].value)
		setColor(result.colors[0].value)
		
	}
 	return (
		  <div className="Main Color" style={{ backgroundColor: color }}>
			  <div className="ColorPicker"></div>
			  <div className="ColorPicker-Button"><button type="submit" onClick={() => ColorPicker()} className="Change-Button">Change</button></div>
		</div>
	)
}

export default Colors
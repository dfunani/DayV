export default function Welcome() {
	const themes: any[] = ["#ffeabd", "#c7bdff", "#ff9fcf", "#fff99f", "#ec9fff"]
	function ThemeSelect(e: any)
	{
		document.documentElement.style.setProperty("--MainBGColor", themes[parseInt(e.target.dataset.id) - 1])
	}
	return (
		<div className="Main Welcome">
			<p>💘 Explore The Love</p>
			<p>DayVeeeeeee 💘💘💘💘💘</p>
			<div className="Radio-Group">
				<div><input name="Select_Theme" type="radio" id="app1" className="Radio-Buttons" data-id="1" aria-label="app1" value="Theme 1" onClick={(e) => ThemeSelect(e)}/><label htmlFor="app1">Theme 1</label></div>
				<div><input name="Select_Theme" type="radio" id="app2" className="Radio-Buttons" data-id="2" aria-label="app2" value="Theme 2" onClick={(e) => ThemeSelect(e)}/><label htmlFor="app1">Theme 2</label></div>
				<div><input name="Select_Theme" type="radio" id="app3" className="Radio-Buttons" data-id="3" aria-label="app3" value="Theme 3" onClick={(e) => ThemeSelect(e)}/><label htmlFor="app1">Theme 3</label></div>
				<div><input name="Select_Theme" type="radio" id="app4" className="Radio-Buttons" data-id="4" aria-label="app4" value="Theme 4" onClick={(e) => ThemeSelect(e)}/><label htmlFor="app1">Theme 4</label></div>
				<div><input name="Select_Theme" type="radio" id="app5" className="Radio-Buttons" data-id="5" aria-label="app5" value="Theme 5" onClick={(e) => ThemeSelect(e)}/><label htmlFor="app1">Theme 5</label></div>
			</div>
		</div>
	)
}
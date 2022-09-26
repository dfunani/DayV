import { useState } from "react"

export default function Filter(props: any) {
	let [list, setList] = useState(['🎈', '💌', '💘', '💐', '🌹', '🎀', '🎁', '🧸', '💍', '🍇', '🍉', '🍊', '🍋', '🍌', '🍍','🍋', '🍌', '🍍',
		,'🍎','🍐','🍑','🍒','🍓',
		'🥝','🍅','🥥','🥑','🥔','🥕','🌽','🌶','🥒','🥦',
		'🚂', '🚃', '🚎', '🚑', '🚒', '🚓', '🚕', '🚗', '🎈', '💌', '💘', '💐', '🌹', '🎀', '🎁', '🧸', '💍', '🍇', '🍉', '🍊', '🍋', '🍌', '🍍','🍋', '🍌', '🍍',
		,'🍎','🍐','🍑','🍒','🍓',
		'🥝','🍅','🥥','🥑','🥔','🥕','🌽','🌶','🥒','🥦',
		'🚂', '🚃', '🚎', '🚑', '🚒', '🚓', '🚕', '🚗'])
	let [clicked, setClicked] = useState(false)
	let [clickedList, setClickedList]: any[] = useState([])
	let newlist = list.map((e) => <div onClick={(event) => setClickedList((prev: any) => ([e, ...prev]))}>{e}</div>)
	return (
		<div className="Main">
			<h1>Filter Duplicate Emojis 💘</h1>
			<div className="Selection-Block">
				{newlist}
			</div>
			<div className="Selection-Block">
				{clicked && new Set(list)} 
				{clickedList}
			</div>
			<button className="Grammar-Button" onClick={() => setClicked(true)} type="button">Correct Grammar</button>
		</div>
		
	)
}
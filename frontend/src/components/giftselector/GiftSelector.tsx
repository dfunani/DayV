import React, { useEffect } from "react";
import { useState } from "react";
import DisplayCost from "./DisplayCost"
import SelectItem from "./SelectItem";
import ToggleItem from "./ToggleItem";
import AddOns from "../../assets/data/AddOns";

export default function GiftSelector()
{
	const [cost, setCost] = useState(0)
	const [clicked, setClicked] = useState(false)
	const [addBalloon, setAddBalloon] = useState(false)
	const [foodCost, setFoodCost] = useState(false)
	const [transportCost, setTransportCost] = useState(false)
	const [balloons, setBalloons] = useState([])
	
	useEffect(() => {
		setBalloons(() => AddOns[Math.floor(Math.random() * AddOns.length)])
	},
	[])
	let d: React.ReactNode;
	!transportCost || !foodCost ? d = <button type="submit" disabled>Calculate</button> : d = <button type="submit" onClick={()=>setClicked(()=> {return true})}>Calculate</button>

	return (
		<div className="Main">
			<h1>Gift Selector 💝</h1>
			<DisplayCost clicked={clicked} cost={cost}/>
			<div>
				<SelectItem setItemCost={setFoodCost} setCost={setCost} item="Food" />
				<SelectItem setItemCost={setTransportCost} setCost={setCost} item="Transport" />
				<ToggleItem addBalloon={addBalloon} setAddBalloon={setAddBalloon} balloons={balloons[0]} setCost={setCost} price={balloons[2]}>
				{balloons[1]}
				</ToggleItem>
				
				{d}
		</div>
		</div>
	)
}
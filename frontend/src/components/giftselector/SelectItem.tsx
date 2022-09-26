import food from "../../assets/data/food";
import transport from "../../assets/data/transport";

export default function SelectItem(props: any)
{
	const items: any = {
		Food: food,
		Transport: transport
	}
	const itemList: React.ReactNode[] = []
	
	Object.keys(items[props.item]).forEach((element: string) => {
		itemList.push(<option value={items[props.item][element][1]}>{items[props.item][element][0]} {element} - ${items[props.item][element][1]}
			</option>) 
	});
	
	return (
		<div className="Select-Container">
			<div>
				Select {props.item}:
			</div>
					<select aria-label={`Select${props.item}`} required name={`Select ${props.item}`} id={`Select${props.item}`} autoFocus onChange={(e) => {
						props.setItemCost(() => { return true })
						props.setCost((prev: any) => {
							return (prev + parseFloat(e.target.value))
						})
					}}>
					<option selected disabled>--Please select an option--</option>
					{itemList}
				</select>
			</div>
	)
}
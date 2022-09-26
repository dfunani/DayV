export default function DisplayCost(props: any)
{
	return (
		<div className="Display-Cost">
				<div>Total Gift Cost: </div><div>{props.clicked && `$${props.cost}`}</div>
			</div>
	)
}
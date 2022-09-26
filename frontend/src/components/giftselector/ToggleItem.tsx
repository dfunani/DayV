export default function ToggleItem(props: any)
{
	return (
		<div className="AddBalloon-Icon">
			<label htmlFor="BalloonCheck"> Add {props.balloons} for ${props.price}? </label>
			<div>{!props.addBalloon && props.children}</div>
			
			{
				!props.addBalloon &&
				<div><input type="checkbox" name="Balloon Check" id="BalloonCheck" onClick={() => {
				props.setAddBalloon((prev: any) => !prev)
				props.setCost((prev: any) => prev + props.price)
				}} /></div>
			}
						
						{props.addBalloon && <div onClick={() => 
				props.setAddBalloon((prev: any) => !prev)}>{props.children}</div>}
			
				</div>
	)
}
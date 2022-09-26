type props = {
	icons: any[],
	app: any
}

export default function Menu({icons, app} : props)
{
	return (
		<div className="Menu" id="MenuContainer">
			{icons.map((e, i) => {
				
				return (
					<img src={e} className="Menu-Icons" onClick={(event) => app(e)} alt={`Icon ${i}`} />
						)
					
			})}
		</div>
	)
}
function Header(props: any)
{
	return (
		<div className="Header">
			<div className="Home-Button" onClick={() => props.app('Welcome')}>
				Day-V
				</div>
			
			<div className="RandomColor-Button">
			💞
			</div>
		</div>
	)
}

export default Header
import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
	return (
		<div>
			<NavLink
				to='/'
				exact
				style={linkStyles}
				activeStyle={{
					background: 'darkblue',
				}}
			>
				Home Page
			</NavLink>
			<NavLink
				to='/mountainlist'
				exact
	
				activeStyle={{
					background: 'darkblue',
				}}
			>
				See a list of 14ers with some cool info
			</NavLink>
			<NavLink
				to='/info'
				exact
				style={linkStyles}
				activeStyle={{
					background: 'darkblue',
				}}
			>
				What is a 14er?
			</NavLink>
			<NavLink
				to='/review'
				exact
				style={linkStyles}
				activeStyle={{
					background: 'darkblue',
				}}
			>
				Reviews
			</NavLink>
		</div>
	);
}

export default NavBar;

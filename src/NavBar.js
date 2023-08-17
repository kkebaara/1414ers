import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
	return (
		<nav className='navbar'>
			<div className='navbar-brand'>
				<NavLink to='/' className='navbar-logo'>
					Logo
				</NavLink>
			</div>
			<ul className='navbar-nav'>
				<li className='nav-item'>
					<NavLink to='/mountainlist' exact className='nav-link'>
						See a list of 14ers with some cool info
					</NavLink>
				</li>
				<li className='nav-item'>
					<NavLink to='/info' className='nav-link'>
						What is a 14er?
					</NavLink>
				</li>
				<li className='nav-item'>
					<NavLink to='/review' className='nav-link'>
						Reviews
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;

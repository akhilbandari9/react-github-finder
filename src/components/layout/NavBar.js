import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
function NavBar({ title = 'Github Finder', icon = 'fab fa-github' }) {
	return (
		<nav className='navbar bg-primary'>
			<h1>
				<i className={icon}></i>
				{title}
			</h1>
			<ul>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/about'>About</Link>
				</li>
			</ul>
		</nav>
	);
}
NavBar.propTypes = {
	title: PropTypes.string,
	icon: PropTypes.string,
};
export default NavBar;

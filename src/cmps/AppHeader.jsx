
import { NavLink } from 'react-router-dom';

import logo from '../assets/imgs/logo.png';

export function AppHeader() {
	return (
		<div className="app-header">
			<div className="header-logo">
				<img src={logo} alt="logo" />
			</div>
			<div className="nav-links">
				<NavLink activeClassName="active-nav" exact to="/">
					Home
				</NavLink>
				<NavLink activeClassName="active-nav" to="/prev">
					PrevSearch
				</NavLink>

			</div>
		</div>
	);
}

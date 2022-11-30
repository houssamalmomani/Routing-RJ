import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';

const ManiNavigation = () => {
	return (
		<header className={classes.header}>
			<div className={classes.logo}>Create quotes</div>
			<nav className={classes.nav}>
				<ul>
					<li>
						<NavLink
							to='/quotes'
							activeClassName={classes.active}
						>
							All Quotes
						</NavLink>
					</li>
					<li>
						<NavLink
							to='/new-quote'
							activeClassName={classes.active}
						>
							Add a Quote
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};
export default ManiNavigation;

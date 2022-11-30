import { Fragment } from 'react';
import classes from './Layout.module.css';
import ManiNavigation from './MainNavigation';

const Layout = (props) => {
	return (
		<Fragment>
			<ManiNavigation />
			<main className={classes.main}>{props.children}</main>
		</Fragment>
	);
};
export default Layout;

import React from 'react';
import classes from './NavigationItems.module.css';

const navigationItems = () => (
<ul className={classes.NavigationItems}>
    <li><a href="/" className={classes.active}>Burger Builder</a></li>
    <li><a href="/">My orders</a></li>
</ul>
);

export default navigationItems;
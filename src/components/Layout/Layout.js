import React, { Component } from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar'
import classes from './Layout.module.css';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false })
    }

    showDrawerOpenHandler = () => {
        this.setState({ showSideDrawer: true })
    }

    render() {
        return (
            <>
                <SideDrawer
                    closed={this.sideDrawerClosedHandler}
                    show={this.state.showSideDrawer} />
                <Toolbar showDrawerOpenHandler={this.showDrawerOpenHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </>
        );
    }
}

export default Layout;
import React, { Component } from 'react';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';
import Dashboard from 'material-ui/svg-icons/action/dashboard';
import List from 'material-ui/svg-icons/action/list';
import { Link } from 'react-router-dom'

const style = {
    bottom: '0px',
    position: 'absolute'
};



class SideMenuPage extends Component {

    constructor(props) {
        super(props);
        this.state = { open: false };
    }

    handleToggle = () => this.setState({open: !this.state.open});

    render() {
        return (
      <div>
        <Drawer docked={true} containerStyle={style}>
          <Link to="/"><MenuItem leftIcon={<Dashboard />}>Dashboard </MenuItem></Link>
          <Link to="/listings"><MenuItem leftIcon={<List />}>Listings</MenuItem></Link>
        </Drawer>
      </div>

        );
    }

}

export default SideMenuPage;


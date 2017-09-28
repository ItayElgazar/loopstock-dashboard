import React,{PropTypes, Component} from 'react';
import UserMap from './UserMap';

class UserRow extends Component {

  

    constructor(props) {
        super(props);
        this.state = {showMap: false};
    }

    showMapToggle() {
        this.setState({showMap: !this.state.showMap});
    }

    render() {
        return(
            <tr>
                <td>{this.props.user.name}</td>
                <td>{this.props.user.username}</td>
                <td>{this.props.user.email}</td>
                <td>
                    <a className="pointer" onClick={this.showMapToggle.bind(this)}>
                        {!this.state.showMap ? <span>Show Map</span> : <span>Hide Map</span> }
                    </a> 
                    {this.state.showMap ? <UserMap latitude={parseFloat(this.props.user.address.geo.lat)} longitude={parseFloat(this.props.user.address.geo.lng)} /> : null }
                </td>
            </tr>
        );
    }
}

UserRow.propTypes = {
    user: PropTypes.object.isRequired,
};

export default UserRow;
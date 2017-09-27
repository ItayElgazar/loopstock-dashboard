import React, { Component, PropTypes } from 'react';
import UsersList from './UsersList';
import TextField from 'material-ui/TextField';
import { Tabs, Tab } from 'material-ui/Tabs';

import { connect } from 'react-redux';


class ListingsPage extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            users: Object.assign([], this.props.users),
            errors: {}
        };
    }

    componentWillReceiveProps(nextProps) {
        this.state = {
            users: Object.assign([], nextProps.users)
        }
    }

    filterUsersList(event) {
        if (!event.target.value) {
            console.log(this.props.users);
            this.setState({ users: this.props.users });
        } else {
            let updatedList = Object.assign([], this.state.users);
            updatedList = updatedList.filter((user) => {
                return user.name.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1

            });
            this.setState({ users: updatedList });
        }
    }


    render() {
        const { users } = this.state;
        return (


                <Tabs className="spacing">
                    <Tab label="Users" >
                        <div className="wrapper">
                            <TextField className="full-width" hintText="Search Users" onChange={this.filterUsersList.bind(this)} />
                            <UsersList users={users} />
                        </div>
                    </Tab>
                    <Tab label="I WANT YOU TO LAUGH!" >
                        <div className="wrapper">
                            <img className="img-responsive center-block" src="http://react.rocks/images/converted/react-komik.jpg" />
                        </div>
                    </Tab>

                </Tabs>
    

        );
    }

}

ListingsPage.propTypes = {
    users: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
    this.state = state;
    return {
        users: state.users
    };
}

export default connect(mapStateToProps)(ListingsPage);


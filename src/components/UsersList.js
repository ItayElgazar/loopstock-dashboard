import React,{PropTypes, componentWillUpdate} from 'react';
import UserRow from './UserRow';
import UserMap from './UserMap';

const UsersList = ({users}) => {

    return(
        <div>
        <table className="table">
            <thead>
            <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Map</th>
            </tr>
            </thead>
            <tbody>
            {users.map(user=>
                <UserRow key={user.id} user={user} /> 
            )}
            </tbody>
            </table>
        </div>
    
    );
};
UsersList.propTypes = {
    users: PropTypes.array.isRequired
};

export default UsersList;
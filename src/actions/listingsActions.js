export function loadUsersSuccess(users)  {
    return {type: 'LOAD_USERS_SUCCESS', users};
}




export function loadUsers() {
    return (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                if (!response.ok) {
                    
                    throw Error(response.statusText);
                }

                return response;
            })
            .then((response) => response.json())
            .then((users) => dispatch(loadUsersSuccess(users)))
            .catch(err=>{
               // dispatch(loadUsersFailed('Failed to load users'));  
               console.log('failed to load users');  
            });
    };
}
export default function listingsReducer(state = [],action) {
    switch(action.type) {
        case 'LOAD_USERS_SUCCESS': {
            return action.users;
        }

        default:
            return state;
    }
}


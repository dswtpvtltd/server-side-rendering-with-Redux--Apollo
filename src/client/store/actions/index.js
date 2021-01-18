import { GET_ALL_HOME_SECTION_DATA } from '../../graphql/query';

export const FETCH_USERS = 'fetch_users';

export const fetchUsers = () => async (dispatch, getState, client) => {
    const variables = {
        mainslider: 1,
        fourboxdata: 2,
        identifier: "home",
        limit: 10,
        page: 1
    };

    const response = await client.query({ query: GET_ALL_HOME_SECTION_DATA, variables });

    dispatch({
        type: FETCH_USERS,
        payload: response.data
    });
}

export const FETCH_CURRENT_USER = 'fetch_current_user';

export const fetchCurrentUser = () => async (dispatch, getState, client) => {

    dispatch({
        type: FETCH_CURRENT_USER,
        payload: {}
    });
}
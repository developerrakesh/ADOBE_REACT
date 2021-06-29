import React, {useEffect} from 'react';
// import {fetchUsers} from './redux/thunk/thunkapi';
import {FETCH_USERS_REQUEST} from './redux/Actions';

import { useSelector, useDispatch } from 'react-redux';

export default function Users() {
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    let {loading, error, users} = state;

    useEffect(() => {
        // dispatch(fetchUsers());
        dispatch({type: FETCH_USERS_REQUEST});
    },[]);

    return (
        <div>
            <button type="button" 
                onClick={() => dispatch({type: FETCH_USERS_REQUEST})}>
                    Refresh
            </button>
            {
                loading ? <h1>Loading....</h1> : error ? error.message: 
                users.map(user => <h2 key={user.id}>{user.name} {user.email}</h2>)
            }
        </div>
    )
}

import {fetchUsers} from './redux/thunk/thunkapi';
import { useSelector, useDispatch } from 'react-redux';

export default function Users() {
    const state = useSelector(state => state);
    const dispatch = useDispatch();

    let {loading, error, users} = state;
    React.useEffect(() => {
        dispatch(fetchUsers());
    },[]);

    return (
        <div>
            {
                loading ? <h1>Loading....</h1> : error ? error.message: 
                users.map(user => <h2 key={user.id}>{user.name} {user.email}</h2>)
            }
        </div>
    )
}

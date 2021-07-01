import React from 'react'

export default function Users() {
    const [users, setUsers] = React.useState([]);
    React.useEffect(() => {
        let url = 'https://jsonplaceholder.typicode.com/users';
        fetch(url).then(response => {
            response.json().then( data => {
                setUsers(data);
            })
        }).catch(err => console.log("offline users"))
    },[]);
    return (
        <div>
            <h1>Users</h1>
            {
                users.map((user,index) => {
                    return <h2 key={index}> {user.username} {user.email} </h2>
                })
            }
        </div>
    )
}

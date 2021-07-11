import React, { useEffect, useContext } from 'react';
import UserContext from '../context/User/UserContext';

function UserList() {

    const { users, getUsers, getProfile } = useContext(UserContext);

    useEffect(() => {
        getUsers();
    }, [])

    return (
        <div className="list-group h-100 container">
            {
                users.map(user => (
                    <a 
                        className="list-group-item list-group-item-action d-flex flex-row justify-content-start" 
                        onClick={() => getProfile(user.id)}
                        key={user.id}
                        href="#" 
                    >
                        <img src={user.avatar} className="img-fluid mr-4 rounded-circle" alt="" width="70" />
                        <p>{`${user.first_name} ${user.last_name}`}</p>
                    </a>
                ))
            }
        </div>
    )
}

export default UserList

import React, { useContext } from 'react';
import UserContext from '../context/User/UserContext';

function Profile() {

    const {selectedUser} = useContext(UserContext);

    return (
        <div>
            {selectedUser ? (<div className="card card-body text-center">
                <img src={selectedUser.avatar} className="card-img-top rounded-circle m-auto img-fluid" alt="" />
                <h1>{`${selectedUser.first_name} ${selectedUser.last_name}`}</h1>
                <h3>{selectedUser.email}</h3>
            </div>): (<p>No user selected</p>)}
        </div>
    )
}

export default Profile

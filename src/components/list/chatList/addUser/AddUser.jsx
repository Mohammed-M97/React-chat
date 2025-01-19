import React, { useState } from 'react';
import './addUser.css';

function AddUser() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add user logic here
        console.log('User added:', { username, email });
    };

    return (
        <div className='addUser'>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={username}
                    placeholder='Enter username'
                    name='username'
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
            <div className="user">
                <div className="detail">
                    <img src="avatar.png" alt="" />
                    <span>Aziz</span>
                </div>
                <button>Add User</button>
            </div>
        </div>
    );
}

export default AddUser;
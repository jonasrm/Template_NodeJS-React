import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';
import './User.css';

export default function User({ match }) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function loadUsers() {
            const id = match.params.id;
            var response = undefined;

            if (id)
                response = await api.get(`/user/${id}`);
            else
                response = await api.get('/user');

            setUsers(response.data);
        }

        loadUsers();
    }, [match.params.id])

    async function handleOK(id) {
        console.log("OK -> ", id);
    }

    async function handleNOK(id) {
        console.log("NOK -> ", id);
        setUsers(users.filter(user => user._id !== id)); //set value to users - define in useState
    }

    return (
        <div>
            <Link to="/">
                <h1>Users</h1>
            </Link>
            {users.length > 0 ? (
                <div>
                    {users.map(u => (
                        <div key={u._id}>
                            {u.name} - {u.email} - Id: {u._id}
                            <button type="button" onClick={() => handleOK(u._id)}>OK</button>
                            <button type="button" onClick={() => handleNOK(u._id)}>NOK</button>
                        </div>
                    ))}

                </div>
            ) : (
                    <div>Vazio...</div>
                )}

        </div>
    );
}

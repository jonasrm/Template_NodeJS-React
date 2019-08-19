import React, { useState } from 'react';
import './Login.css';

import api from '../services/api';

export default function Login({ history }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();

        const response = await api.get('/log')

        console.log(response);
        history.push('/main');
    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <img src="" alt="Logo" />
                <input
                    placeholder="Digite seu usuário"
                    type="text"
                    value={username}
                    onChange={e => setUsername(e.target.value)} />
                <input
                    placeholder="Digite sua senha"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)} />
                <button type="submit">
                    Entrar
                </button>
            </form>
        </div>
    );
}
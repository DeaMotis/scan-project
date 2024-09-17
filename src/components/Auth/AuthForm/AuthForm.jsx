import React, { useState } from 'react';
import './AuthForm.css';

const AuthForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsSubmitting(true);

        try {
            const response = await fetch('account/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (!response.ok) {
                throw new Error('Ошибка авторизации');
            }

            const data = await response.json();
            localStorage.setItem('accessToken', data.accessToken);
            localStorage.setItem('expire', data.expire);
        } catch (error) {
            console.error('Ошибка:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="auth-form-container">
            <h2>Форма авторизации</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Логин:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Пароль:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" disabled={!username || !password || isSubmitting}>
                    Войти
                </button>
            </form>
            <div className="links">
                <a href="/register">Зарегистрироваться</a>
                <a href="/recover-password">Восстановить пароль</a>
            </div>
            <div className="social-login">
                <button>Войти через Google</button>
                <button>Войти через Facebook</button>
                <button>Войти через Яндекс</button>
            </div>
        </div>
    );
};

export default AuthForm;
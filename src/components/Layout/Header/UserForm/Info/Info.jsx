import React from 'react';
import { useAuth } from '../../../../../context/Context';
import './Info.css';
import loading_icon from '../../../../../images/loading_icon.svg';

const UserInfo = ({ userName, userPicture, isLoading }) => {
    const { setIsLoggedIn } = useAuth();

    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('accessToken');
        localStorage.removeItem('tokenExpire');
    };

    return (
        <div className="user-info">
            <div className="user-details">
                <div className="user-name">{userName}</div>

                <a href="#" className="logout-link" onClick={handleLogout}>Выйти</a>
            </div>
            {isLoading ? (
                <img src={loading_icon} alt="Loading" className="loading_icon" />
            ) : (
                <img src={userPicture} alt="User" className="user-picture" />
            )}
        </div>
    );
};

export default UserInfo;
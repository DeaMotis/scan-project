import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Actions from './Actions/Actions';
import UserInfo from './Info/Info';
import './UserForm.css';
import user_pic_example from '../../../../images/user_pic_example.png';

const UserForm = ({ isLoggedIn, userName, userPicture, setUserName, setUserPicture, isMobile, isMenuVisible }) => { // Изменено на UserForm
    const [isLoadingActions, setIsLoadingActions] = useState(true);
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/auth');
    };

    useEffect(() => {
        setIsLoadingActions(true);
        setTimeout(() => {
            const userData = {
                name: 'Анастасия С.',
                picture: user_pic_example
            };
            setUserName(formatName(userData.name));
            setUserPicture(userData.picture);
            setIsLoadingActions(false);
        }, 2000);
    }, []);

    function formatName(fullName) {
        const parts = fullName.split(' ');
        if (parts.length > 1) {
            return `${parts[0]} ${parts[1].charAt(0)}.`;
        }
        return fullName;
    }

    return (
        <div className="user-forms">
            {isMobile && isLoggedIn && !isMenuVisible && (
                <Actions isLoading={isLoadingActions} />
            )}

            {isMobile && isLoggedIn && isMenuVisible && (
                <UserInfo
                    userName={userName}
                    userPicture={userPicture}
                    isLoading={isLoadingActions}
                />
            )}

            {!isMobile && isLoggedIn && (
                <>
                    <Actions isLoading={isLoadingActions} />
                    <UserInfo userName={userName} userPicture={userPicture} isLoading={isLoadingActions} />
                </>
            )}
        </div>
    );
};

export default UserForm;
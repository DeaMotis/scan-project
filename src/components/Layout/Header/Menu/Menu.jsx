import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import './Menu.css';

import Button from '../../../../general/Button/Button';
import { showMenu } from '../../../../redux/features/MenuSlice';
import { logout } from '../../../../redux/features/UserSlice';

function Menu() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userInfo = useSelector((state) => state.user.active);

    return (
        <>
            <div className="menu">
                <div className="menu_header">
                    <img
                        className="menu_logo"
                        src={require('../../../../images/logo_scan_footer.png')}
                        alt='logo'
                    />
                    <Button
                        btnClass='login_enter'
                        btnName='Закрыть' // Заменено на текстовую кнопку
                        disabled={false}
                        onClick={() => { dispatch(showMenu()) }}
                    />
                </div>
                {userInfo ? (
                    <div className="profile">
                        <div className='login_pic' />
                        <span className='menu_name'>Анна С.</span>
                    </div>
                ) : (
                    <></>
                )}
                <div className="menu_list">
                    <a className="menu_list_item" href='/' onClick={() => dispatch(showMenu())}>Главная</a>
                    <a className="menu_list_item" href='#'>Тарифы</a>
                    <a className="menu_list_item" href='#'>FAQ</a>
                </div>
                {userInfo ? (
                    <div className='menu_buttons'>
                        <Button
                            btnClass='menu_enter'
                            btnName='Выйти'
                            disabled={false}
                            onClick={() => { dispatch(logout()) }}
                        />
                    </div>
                ) : (
                    <div className='menu_buttons'>
                        <Button
                            btnClass='menu_reg'
                            btnName='Зарегистрироваться'
                            disabled={false}
                            onClick={() => {
                                dispatch(showMenu());
                                navigate('/loginPage');
                            }}
                        />
                        <Button
                            btnClass='menu_enter'
                            btnName='Войти'
                            disabled={false}
                            onClick={() => {
                                navigate('/loginPage');
                                dispatch(showMenu());
                            }}
                        />
                    </div>
                )}
            </div>
        </>
    );
}

export default Menu;
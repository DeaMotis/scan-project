import styles from "./Auth.module";
import KEY from "../../images/key";
import CASTLE from "../../images/castle";
import GOOGLE from "../../images/google";
import FACEBOOK from "../../images/facebook";
import YANDEX from "../../images/yandex";
import {useContext , useState} from "react";
import {Context} from "../../main";
import {Link} from "react-router-dom";



function Auth() {

    const [loginOrPhone, setLoginOrPhone] = useState('');
    const [password, setPassword] = useState('');
    const [isValid, setIsValid] = useState(true);
    const {store} = useContext(Context);


    const handleChange = (e) => {
        const { name, value } = e.target;
        let pattern;

        if (name === 'loginOrPhone') {
            if (value.startsWith('+7') || value.startsWith('8')) {
                pattern = /^(\+7|8)[0-9]{10}$/;
            } else {
                pattern = /^[a-zA-Z0-9_]*$/;
            }

            if (pattern.test(value)) {
                setLoginOrPhone(value);
                setIsValid(true);
            } else {
                setLoginOrPhone(value);
                setIsValid(false);
            }
        } else if (name === 'password') {
            setPassword(value);
        }
    };






    return (
        <section className={styles.container}>
            <div className={styles.info}>
                <div className={styles.text}>
                    Для оформления подписки на тариф, необходимо авторизоваться.
                </div>
                <img className={styles.key} src={KEY} alt={"Картинка два человечка с ключом"} />

            </div>
            <img className={styles.castle} src={CASTLE} alt={"Картинка замочка"}/>
            <div className={styles.form}>
                <div className={styles.title}>
                    <div className={styles.enter}>Войти</div>
                    <div className={styles.registration}>Зарегистрироваться</div>
                </div>
                <form className={styles.input}>
                    <p className={styles.login}>Логин или номер телефона:</p>
                    <input
                        type="text"
                        name="loginOrPhone"
                        value={loginOrPhone}
                        onChange={handleChange}
                        className={isValid ? styles.validlogin : styles.invalidlogin}
                        autoComplete={"username"}
                    />
                    {!isValid && <p className={styles.loginerror}>Введите корректные данные</p>}
                    <p className={styles.passwordtext}>Пароль:</p>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                        className={styles.password}
                        autoComplete={"current-password"}
                    />

                </form>
                <Link to={"/"}>
                    <button
                        onClick={() => store.login(loginOrPhone, password)}
                        className={loginOrPhone && password ? styles.buttonActive : styles.button}>
                        Войти
                    </button>

                </Link>



                <div className={styles.recover}>Восстановить пароль</div>
                <div className={styles.loginVia}>Войти через:</div>
                <div className={styles.social}>
                    <div className={styles.google}>
                        <img src={GOOGLE} alt={"Google"} />
                    </div>
                    <div className={styles.facebook}>
                        <img src={FACEBOOK} alt={"Facebook"} />
                    </div>
                    <div className={styles.yandex}>
                        <img src={YANDEX} alt={"Yandex"} />
                    </div>


                </div>

            </div>

        </section>

    )
}

export default Auth;
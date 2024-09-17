import styles from "./Header.css";
import logo_scan from "../../../images/logo_scan.png";
import {Link} from "react-router-dom";

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src={logo_scan} alt={""} />
            </div>

            <nav className={styles.nav}>
                <ul>
                    <li><a href="/">Главная</a></li>
                    <li><a href="#">Тарифы</a></li>
                    <li><a href="#">FAQ</a></li>
                </ul>
            </nav>
            <div className={styles.registration}>
                <div className={styles.reg}><a href="#">Зарегистрироваться</a></div>
                <div className={styles.separator}></div>
                <Link to={"/auth"}>
                    <button className={styles.enter}>Войти</button>
                </ Link>
            </div>



        </header>
    );
}

export default Header;
import styles from './Tariff.css';
import Tariff_Beginner from "./Tariff_Beginner/Tariff_Beginner.jsx";
import Tariff_Business from "./Tariff_Business/Tariff_Business.jsx";
import Tariff_Pro from "./Tariff_Pro/Tariff_Pro.jsx";
import Tariff_Auth from "./Tariff_Auth/Tariff_Auth";
import { Context } from "../../../main.jsx";

import { useContext } from "react";

function Tariffs() {
    const { store } = useContext(Context);

    if (!store.isAuth) {
        return (
            <section className={styles.container}>
                <div className={styles.text}>НАШИ ТАРИФЫ</div>
                <div className={styles.blocks}>
                    <Tariff_Beginner />
                    <Tariff_Business />
                    <Tariff_Pro />
                </div>
            </section>
        );
    }

    return (
        <section className={styles.container}>
            <div className={styles.text}>НАШИ ТАРИФЫ</div>
            <div className={styles.blocks}>
                <Tariff_Auth/>
                <Tariff_Business />
                <Tariff_Pro />
            </div>
        </section>
    );
}

export default Tariffs;
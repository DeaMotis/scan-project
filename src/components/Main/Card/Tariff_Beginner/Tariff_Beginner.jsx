import styles from "../../../../styles/Tariff.css";
import LAMP from "../../../../images/lamp.png";
import CHECK from "../../../../images/check_mark.png";

function TariffsBlock1() {
    return(
        <section className={styles.container}>
            <div className={styles.head1}>
                <div className={styles.info}>
                    <div className={styles.title}>Beginner</div>
                    <div className={styles.subtitle}>Для небольшого исследования</div>
                </div>
                <img className={styles.icon1} src={LAMP} alt={'лампочка'}/>

            </div>
            <div className={styles.main}>
                <div className={styles.prices}>
                    <div className={styles.price}>799 ₽</div>
                    <div className={styles.oldprice}>1 200 ₽</div>
                </div>
                <div className={styles.text}>или 150 ₽/мес. при рассрочке на 24 мес.</div>
                <div className={styles.tariff}>В тариф входит:</div>
                <div className={styles.list}>

                    <div className={styles.item}><img src={CHECK} alt={'галочка'}/>Безлимитная история запросов</div>
                    <div className={styles.item}><img src={CHECK} alt={'галочка'}/>Безопасная сделка</div>
                    <div className={styles.item}><img src={CHECK} alt={'галочка'}/>Поддержка 24/7</div>


                </div>


            </div>
            <button className={styles.button}>Подробнее</button>



        </section>
    )

}

export default TariffsBlock1;
import styles from "../../../../styles/Tariff.css";
import TARGET from "../../../../images/target.png";
import CHECK from "../../../../images/check_mark.png";

function TariffsBlock2() {
    return(
        <section className={styles.container}>
            <div className={styles.head2}>
                <div className={styles.info}>
                    <div className={styles.title}>Pro</div>
                    <div className={styles.subtitle}>Для HR и фрилансеров</div>
                </div>
                <img className={styles.icon2} src={TARGET} alt={'мишень'}/>

            </div>
            <div className={styles.main}>
                <div className={styles.prices}>
                    <div className={styles.price}>1 299 ₽</div>
                    <div className={styles.oldprice}>2 600 ₽</div>
                </div>
                <div className={styles.text}>или 279 ₽/мес. при рассрочке на 24 мес.</div>
                <div className={styles.tariff}>В тариф входит:</div>
                <div className={styles.list}>

                    <div className={styles.item}><img src={CHECK} alt={'галочка'}/>Все пункты тарифа Beginner</div>
                    <div className={styles.item}><img src={CHECK} alt={'галочка'}/>Экспорт истории</div>
                    <div className={styles.item}><img src={CHECK} alt={'галочка'}/>Рекомендации по приоритетам</div>


                </div>


            </div>
            <button className={styles.button}>Подробнее</button>



        </section>
    )

}

export default TariffsBlock2;
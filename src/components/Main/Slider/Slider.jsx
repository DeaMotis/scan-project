import { useEffect, useState } from 'react';
import uniqid from 'uniqid';

import styles from "../../../styles/slaiderblock.css";
import CLOCK from "../../../images/clock.png";
import LOOP from "../../../images/loop.png";
import SHIELD from "../../../images/shield.png";


function MainSlaiderBlock({ image, altText, text }) {
    return (
        <section className={styles.container}>
            <img className={styles.image} src={image} alt={altText} />
            <p className={styles.text}>{text}</p>
        </section>
    );
}

const sliderData = [
    {
        image: CLOCK,
        altText: "Clock",
        text: "Высокая и оперативная скорость обработки заявки"
    },
    {
        image: LOOP,
        altText: "Loop",
        text: "Огромная комплексная база данных, обеспечивающая объективный ответ на запрос"
    },
    {
        image: SHIELD,
        altText: "Shield",
        text: "Защита конфиденциальных сведений, не подлежащих разглашению по федеральному законодательству"
    },
];


function MainSlider() {
    return (
        <div>
            {sliderData.map((item) => (
                <MainSlaiderBlock
                    key={uniqid()}
                    image={item.image}
                    altText={item.altText}
                    text={item.text}
                />
            ))}
        </div>
    );
}


function ClockDuplicates() {
    return (
        <section className={styles.container}>
            {[...Array(4)].map((_, index) => (
                <img key={index} className={styles.image} src={CLOCK} alt={`Clock duplicate ${index + 1}`} />
            ))}
            <p className={styles.text}>(</p>
        </section>
    );
}

export { MainSlider, ClockDuplicates };
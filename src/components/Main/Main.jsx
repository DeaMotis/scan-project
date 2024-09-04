import React from 'react';
import './Main.css';
import {MainSlaiderBlock, MainSlider, ClockDuplicates} from './Slider/Slider.jsx';
import TariffBeginner from './Card/Tariff_Beginner/Tariff_Beginner.jsx';
import TariffBusiness from './Card/Tariff_Business/Tariff_Business.jsx';
import TariffPro from './Card/Tariff_Pro/Tariff_Pro.jsx';
import ResultPage from './ResultPage/ResultPage.jsx';
import SearchForm from '../Search/SearchForm/SearchForm.jsx';

const Main = () => {
    return (
        <main className="main-container">
            {/* Форма поиска */}
            <SearchForm />

            {/* Слайдер */}
            <Slider />

            {/* Тарифы */}
            <section className="tariffs">
                <h2>Наши Тарифы</h2>
                <TariffBeginner />
                <TariffBusiness />
                <TariffPro />
            </section>

            {/* Страница результатов */}
            <ResultPage />
        </main>
    );
};

export default Main;
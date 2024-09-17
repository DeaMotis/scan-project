import React from 'react';
import './Main.css';
import { MainSliderBlock, MainSlider, ClockDuplicates } from './Slider/Slider';
import TariffBeginner from './Card/Tariff_Beginner/Tariff_Beginner';
import TariffBusiness from './Card/Tariff_Business/Tariff_Business';
import TariffPro from './Card/Tariff_Pro/Tariff_Pro';
import SearchForm from '../Search/SearchForm/SearchForm';

const Main = () => {
    return (
        <main className="main-container">
            {/* Форма поиска */}
            <SearchForm />

            {/* Слайдер */}
            <section className="slider-section">
                <MainSliderBlock />
                <MainSlider />
                <ClockDuplicates />
            </section>

            {/* Тарифы */}
            <section className="tariffs">
                <h2>Наши Тарифы</h2>
                <TariffBeginner />
                <TariffPro />
                <TariffBusiness />
            </section>
        </main>
    );
};

export default Main;
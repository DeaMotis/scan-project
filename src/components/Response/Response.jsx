import React, { useEffect } from "react";
import "./Response.css";
import { store } from "../../redux/store";
import target from "../../images/target.png";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router";
import { MainSlider } from "../Main/Slider/Slider";
import { Link } from "react-router-dom";
import { LoaderCircle } from "../../general/Loader/Loaders";

const SearchResult = observer(() => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!store.token) {
      navigate("/auth");
    }
  }, [navigate]);

  return (
    <div className="search-result">
      <div className="search-result__top">
        <div>
          <h1 className="search-title search-result__title">
            Результаты поиска
          </h1>

          {store.isSummaryLoading ? (
            <p className="search-details">
              Поиск может занять некоторое время, <br />
              просим сохранять терпение.
            </p>
          ) : (
            <p className="search-details">
              По вашему запросу найдены <br /> следующие данные.
            </p>
          )}
        </div>
        <img
          src={target}
          className="search-result__img"
          alt="Цель"
        />
      </div>

      {store.isSummaryError ? (
        <p className="search-result__error search-result-error__info">
          Что-то пошло не так :( <br />
          Попробуйте <Link to="/search">изменить параметры поиска</Link>
        </p>
      ) : (
        <div>
          {store.isSummaryLoading ? (
            <div className="slider-loader">
              <LoaderCircle />
              <p className="loading-data">Загружаем данные</p>
            </div>
          ) : (
            <MainSlider />
          )}
        </div>
      )}
    </div>
  );
});

export default SearchResult;
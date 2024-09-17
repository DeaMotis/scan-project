import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './SearchForm.css';

const SearchForm = () => {
    const navigate = useNavigate();

    const [companyINN, setCompanyINN] = useState('');
    const [tonality, setTonality] = useState('Любая');
    const [documentCount, setDocumentCount] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        const isValid = companyINN && documentCount && startDate && endDate;
        setIsFormValid(isValid);
    }, [companyINN, documentCount, startDate, endDate]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (isFormValid) {
            const searchParams = {
                companyINN,
                tonality,
                documentCount: Number(documentCount),
                dateRange: {
                    startDate: `${startDate}T00:00:00`,
                    endDate: `${endDate}T23:59:59`
                }
            };

            console.log('Отправка запроса на сервер с данными:', searchParams);
            navigate('/result', { state: { searchParams } });
        } else {
            console.log('Форма не валидна');
        }
    };

    return (
        <section className="search-form-container">
            <h2 className="form-title">Поиск данных</h2>
            <form onSubmit={handleSubmit} className="search-form">
                <div className="form-group">
                    <label htmlFor="companyINN">ИНН компании:</label>
                    <input
                        type="text"
                        id="companyINN"
                        value={companyINN}
                        onChange={(e) => setCompanyINN(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="tonality">Тональность:</label>
                    <select
                        id="tonality"
                        value={tonality}
                        onChange={(e) => setTonality(e.target.value)}
                    >
                        <option value="Любая">Любая</option>
                        <option value="Позитивная">Позитивная</option>
                        <option value="Негативная">Негативная</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="documentCount">Количество документов:</label>
                    <input
                        type="number"
                        id="documentCount"
                        value={documentCount}
                        onChange={(e) => setDocumentCount(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="startDate">Дата начала:</label>
                    <input
                        type="date"
                        id="startDate"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="endDate">Дата окончания:</label>
                    <input
                        type="date"
                        id="endDate"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        required
                    />
                </div>

                <button type="submit" disabled={!isFormValid}>
                    Найти
                </button>
            </form>
        </section>
    );
};

export default SearchForm;
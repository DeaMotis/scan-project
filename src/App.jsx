import "./App.css";
import Result from "./components/Main/ResultPage/ResultPage.jsx";
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Layout/Footer/Footer';
import Header from './components/Layout/Header/Header';
import Main from './components/Main/Main';
import Auth from './components/Auth/AuthForm/AuthForm';
import Search from './components/Search/SearchForm/SearchForm';
import ClipLoader from 'react-spinners/ClipLoader';

function App() {
    const isLoading = useSelector((state) => state.example.isLoading);
    const isAuth = useSelector((state) => state.example.isAuth);

    if (isLoading) {
        return (
            <div className="loader">
                <ClipLoader
                    color={"#123abc"}
                    loading={true}
                    size={150}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            </div>
        );
    }

    return (
        <>
            <Header /> {/* Заголовок показывается для всех */}
            <Routes>
                <Route exact path="/" element={<Main />} />
                <Route exact path="/auth" element={<Auth />} />
                {isAuth && <Route exact path="/search" element={<Search />} />}
                {isAuth && <Route exact path="/result" element={<Result />} />}
            </Routes>
            <Footer />
        </>
    );
}

export default App;

import Header from "./components/Layout/Header/Header.jsx";
import Footer from "./components/Layout/Footer/Footer.jsx";
import Main from "./components/Main/Main.jsx";
import Auth from "./components/Auth/AuthForm/AuthForm.jsx";
import Search from "./components/Search/SearchForm/SearchForm.jsx";
import { Route, Routes } from "react-router-dom";
import { Context } from "./main.jsx";
import { useContext } from "react";
import { observer } from "mobx-react-lite";
import { ClipLoader } from "react-spinners";
import "./App.css";
import Result from "./components/Main/ResultPage/ResultPage.jsx";

function App() {
    const { store } = useContext(Context);

    if (store.isLoading) {
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
            {store.isAuth ? <HeaderAuth /> : <Header />}
            <Routes>
                <Route exact path="/" element={<Main />} />
                <Route exact path="/auth" element={<Auth />} />
                {store.isAuth && <Route exact path="/search" element={<Search />} />}
                {store.isAuth && <Route exact path="/result" element={<Result />} />}

            </Routes>
            <Footer />
        </>
    );
}

export default observer(App);
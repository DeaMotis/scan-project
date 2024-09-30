import Main from "./components/Main/Main";
import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer/Footer";
import SearchForm from "./components/Search/SearchForm/SearchForm";
import Response from "./components/Response/Response";
import AuthForm from "./components/Auth/AuthForm/AuthForm"

import { BrowserRouter, Routes, Route } from "react-router-dom";

const routesData = [
  { path: "/", element: <Main /> },
  { path: "/auth", element: <AuthForm /> },
  { path: "/search", element: <SearchForm /> },
  { path: "/response", element: <Response /> },
];

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            {routesData.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
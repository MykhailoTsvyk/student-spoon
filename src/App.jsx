import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from "../pages/HomePage/HomePage.jsx";
import { Register } from "../pages/Auth/Register.jsx";
import { Login } from "../pages/Auth/Login.jsx";
import { RecipesPage } from "../pages/RecipesPage/RecipesPage.jsx";
import { RecipePage } from "../pages/RecipePage/RecipePage.jsx";
import { UploadPage } from "../pages/UploadPage/UploadPage.jsx";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        const savedStatus = localStorage.getItem('isLoggedIn');
        return savedStatus === 'true'; // Converts string back to a real boolean
    });

    const handleLogin = () => {
        setIsLoggedIn(true);
        localStorage.setItem('isLoggedIn', 'true');
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<HomePage />} />
                <Route path={'/register'} element={<Register />} />
                <Route path={'/login'} element={<Login onLoginSuccess={handleLogin} />} />
                <Route path={'/list'} element={<RecipesPage isLoggedIn={isLoggedIn} />} />
                <Route path={'/recipes/:id'} element={<RecipePage isLoggedIn={isLoggedIn} />} />
                <Route path={'/upload'} element={<UploadPage isLoggedIn={isLoggedIn} />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
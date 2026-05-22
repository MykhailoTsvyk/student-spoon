import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from "../pages/HomePage/HomePage.jsx";
import { Register } from "../pages/Auth/Register.jsx";
import { Login } from "../pages/Auth/Login.jsx";
import { RecipesPage } from "../pages/RecipesPage/RecipesPage.jsx";
import { RecipePage } from "../pages/RecipePage/RecipePage.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<HomePage />} />
                <Route path={'/register'} element={<Register />} />
                <Route path={'/login'} element={<Login />} />
                <Route path={'/list'} element={<RecipesPage />} />

                {/* FIX: Change '/list/:id' to '/recipes/:id' */}
                <Route path={'/recipes/:id'} element={<RecipePage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
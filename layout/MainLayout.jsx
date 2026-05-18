import {Button} from "../components/Button/Button.jsx";

export const MainLayout = ({
    children
}) =>{

    return (
        <>
            <header>
                <nav>
                    <img src="" alt="Logo"/>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">Recipes</a></li>
                    </ul>
                    <Button>Sign Up</Button>
                </nav>
            </header>

            <main>
                {children}
            </main>

            <footer>

            </footer>
        </>
    )}
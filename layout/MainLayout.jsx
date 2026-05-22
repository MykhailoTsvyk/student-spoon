import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button/Button.jsx";
import darkLogo from "../src/assets/img/dark-logo.svg"
import lightLogo from "../src/assets/img/light-logo.svg";
import styles from "./MainLayout.module.css";

export const MainLayout = ({ children, isLoggedIn, handleLogoutFromApp }) => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [user, setUser] = useState(() => {
        const loggedInUser = localStorage.getItem("currentUser");
        return loggedInUser ? JSON.parse(loggedInUser) : null;
    });

    useEffect(() => {
        const loggedInUser = localStorage.getItem("currentUser");
        setUser(loggedInUser ? JSON.parse(loggedInUser) : null);
    }, [isLoggedIn]);

    const handleLogout = () => {
        localStorage.removeItem("currentUser");

        if (handleLogoutFromApp) {
            handleLogoutFromApp();
        } else {
            localStorage.removeItem('isLoggedIn');
        }

        setUser(null);
        setIsMenuOpen(false);
        navigate('/');
    };

    const handleNavigation = (path) => {
        setIsMenuOpen(false);
        navigate(path);
    };

    const hasActiveSession = isLoggedIn || !!user;

    return (
        <>
            <header className={styles.header}>
                <nav className={`container ${styles.header__navbar}`}>
                    <img
                        src={darkLogo}
                        alt="Logo"
                        onClick={() => handleNavigation('/')}
                        style={{ cursor: 'pointer' }}
                    />

                    <div
                        className={`${styles.burger} ${isMenuOpen ? styles.burgerActive : ""}`}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <div className={`${styles.menuWrapper} ${isMenuOpen ? styles.menuOpen : ""}`}>
                        <ul className={styles.header__menu}>
                            <li>
                                <a
                                    className={`${styles.link__header} ${styles.link}`}
                                    href="/"
                                    onClick={(e) => { e.preventDefault(); handleNavigation('/'); }}
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    className={`${styles.link__header} ${styles.link}`}
                                    href="/list"
                                    onClick={(e) => { e.preventDefault(); handleNavigation('/list'); }}
                                >
                                    Recipes
                                </a>
                            </li>

                            {hasActiveSession && (
                                <li>
                                    <Button
                                        variant="orange"
                                        onClick={() => handleNavigation('/upload')}
                                        className={styles.uploadBtn}
                                        style={{ padding: '5px 15px', fontSize: '20px', minWidth: '40px' }}
                                    >
                                        +
                                    </Button>
                                </li>
                            )}
                        </ul>

                        <div className={styles.authContainer}>
                            {user ? (
                                <div className={styles.userInfo}>
                                    <span className={styles.userName}>Hi, {user.fullName}</span>
                                    <button onClick={handleLogout} className={styles.logoutBtn}>
                                        Log Out
                                    </button>
                                </div>
                            ) : (
                                <Button onClick={() => handleNavigation('/login')}>Sign In</Button>
                            )}
                        </div>
                    </div>
                </nav>
            </header>

            <main className={styles.main__content}>
                {children}
            </main>

            <footer className={styles.footer}>
                <section className="container">
                    <section className={styles.footer__flex}>
                        <a href="/" onClick={(e) => { e.preventDefault(); handleNavigation('/'); }}>
                            <img src={lightLogo} alt="Logo Light"/>
                        </a>
                        <ul className={styles.footer__nav}>
                            <li><a className={`${styles.link__footer} ${styles.link}`} href="/">Home</a></li>
                            <li><a className={`${styles.link__footer} ${styles.link}`} href="/list">Recipes</a></li>
                        </ul>
                    </section>
                    <p className={styles.footer__copyright}>© {new Date().getFullYear()} Student Spoon</p>
                </section>
            </footer>
        </>
    );
};
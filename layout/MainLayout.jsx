import {Button} from "../components/Button/Button.jsx";
import darkLogo from "../src/assets/img/dark-logo.svg"
import lightLogo from "../src/assets/img/light-logo.svg"
import styles from "./MainLayout.module.css"

export const MainLayout = ({
    children
}) =>{
    console.log(styles)

    return (
        <>
            <header>
                <nav className={`container ${styles.header__navbar}`}>
                    <img src={darkLogo} alt="Logo"/>
                    <ul className={styles.header__menu}>
                        <li><a className={`${styles.link__header} ${styles.link}`} href="">Home</a></li>
                        <li><a className={`${styles.link__header} ${styles.link}`} href="">Recipes</a></li>
                    </ul>
                    <Button>Sign Up</Button>
                </nav>
            </header>

            <main className={styles.main__content}>
                {children}
            </main>

            <footer className={styles.footer}>
                <section className="container">

                    <section className={styles.footer__flex}>
                        <a href=""><img src={lightLogo} alt=""/></a>
                        <ul className={styles.footer__nav}>
                            <li><a className={`${styles.link__footer} ${styles.link}`} href="">Home</a></li>
                            <li><a className={`${styles.link__footer} ${styles.link}`} href="">Recipes</a></li>
                        </ul>
                    </section>

                    <p className={styles.footer__copyright}>© {new Date().getFullYear()} Student Spoon</p>

                </section>
            </footer>
        </>
    )}
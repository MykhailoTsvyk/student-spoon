import {MainLayout} from "../../layout/MainLayout.jsx";
import {Button} from "../../components/Button/Button.jsx";
import styles from "./HomePage.module.css"

export const HomePage = (

) => {

    return (
        <MainLayout>
            <section className="container">
                <section className={styles.hero__container}>
                    <h1 className={styles.hero__h1}>Affordable meals made by students, for students.</h1>
                    <p className={styles.hero__p}>Discover budget-friendly recipes, share your favorite meals, and eat well without overspending.</p>
                    <Button variant="orange">Browse Recipes</Button>
                </section>
            </section>

            <section className={styles.stats__container}>
                <section className="container">
                    <div className="card">
                        <img src="" alt=""/>
                        <span>Student Recipes</span>
                        <h1>500+</h1>
                    </div>
                    <div className="card">
                        <img src="" alt=""/>
                        <span>Meal Price</span>
                        <h1>£5 Avg</h1>
                    </div>
                    <div className="card">
                        <img src="" alt=""/>
                        <span>Community Recipes</span>
                        <h1>1000+</h1>
                    </div>
                </section>
            </section>

        </MainLayout>
    )
}
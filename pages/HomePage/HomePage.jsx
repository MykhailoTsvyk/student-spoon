import { useNavigate } from "react-router-dom";
import { MainLayout } from "../../layout/MainLayout.jsx";
import { Button } from "../../components/Button/Button.jsx";
import { StatsCard } from "../../components/StatsCard/StatsCard.jsx";
import styles from "./HomePage.module.css";
import recipeIcon from "../../src/assets/img/hero-stats/recipe-icon.svg";
import priceIcon from "../../src/assets/img/hero-stats/price-icon.svg";
import communityIcon from "../../src/assets/img/hero-stats/community-icon.svg";

export const HomePage = () => {
    const navigate = useNavigate();

    return (
        <MainLayout>
            <section className="container">
                <section className={styles.hero__container}>
                    <h1 className={styles.hero__h1}>
                        Affordable meals made by students, for students.
                    </h1>
                    <p className={styles.hero__p}>
                        Discover budget-friendly recipes, share your favorite meals, and eat well without overspending.
                    </p>
                    <Button variant="orange" onClick={() => navigate('/list')}>Browse Recipes</Button>
                </section>
            </section>

            <section className={styles.stats__section}>
                <div className={`container ${styles.stats__container}`}>

                    <StatsCard
                        icon={recipeIcon}
                        title="Student Recipes"
                        value="500+"
                    />

                    <StatsCard
                        icon={priceIcon}
                        title="Meal Price"
                        value="£5 Avg"
                    />

                    <StatsCard
                        icon={communityIcon}
                        title="Community Recipes"
                        value="1000+"
                    />

                </div>
            </section>
        </MainLayout>
    );
};
// HomePage.jsx
import { MainLayout } from "../../layout/MainLayout.jsx";
import { Button } from "../../components/Button/Button.jsx";
import { StatsCard } from "../../components/StatsCard/StatsCard.jsx";
import styles from "./HomePage.module.css";

// FIX 2: Imported the missing asset icons
import recipeIcon from "../../src/assets/img/hero-stats/recipe-icon.svg";
import priceIcon from "../../src/assets/img/hero-stats/price-icon.svg";
import communityIcon from "../../src/assets/img/hero-stats/community-icon.svg";

export const HomePage = () => {
    return (
        <MainLayout>
            {/* Hero Banner Section */}
            <section className="container">
                <section className={styles.hero__container}>
                    <h1 className={styles.hero__h1}>
                        Affordable meals made by students, for students.
                    </h1>
                    <p className={styles.hero__p}>
                        Discover budget-friendly recipes, share your favorite meals, and eat well without overspending.
                    </p>
                    <Button variant="orange">Browse Recipes</Button>
                </section>
            </section>

            {/* Statistics Section */}
            <section className={styles.stats__section}>
                {/* FIX 3: Changed comments to the correct JSX format {...} */}
                <div className={`container ${styles.stats__container}`}>

                    {/* Card 1: Student Recipes */}
                    <StatsCard
                        icon={recipeIcon}
                        title="Student Recipes"
                        value="500+"
                    />

                    {/* Card 2: Meal Price */}
                    <StatsCard
                        icon={priceIcon}
                        title="Meal Price"
                        value="£5 Avg"
                    />

                    {/* Card 3: Community Recipes */}
                    <StatsCard
                        icon={communityIcon}
                        title="Community Recipes"
                        value="1000+"
                    />

                </div>
            </section> {/* FIX 4: Removed the duplicate duplicate closing section tag that was below this line */}
        </MainLayout>
    );
};
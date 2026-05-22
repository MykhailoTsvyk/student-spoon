import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RecipeCard } from '../../components/RecipeCard/RecipeCard.jsx';
import mealImg1 from '../../src/assets/img/recipes/meal1.jpg';
import mealImg2 from '../../src/assets/img/recipes/meal2.jpg';
import mealImg3 from '../../src/assets/img/recipes/meal3.jpg';
import mealImg4 from '../../src/assets/img/recipes/meal4.jpg';
import styles from './RecipesPage.module.css';
import { MainLayout } from "../../layout/MainLayout.jsx";
import { Button } from "../../components/Button/Button.jsx";

const MOCK_RECIPES = [
    {
        id: "vietnamese-spicy-soup",
        title: "Spicy Noodle Soup",
        cookTime: 40,
        image: mealImg1,
        description: "A rich, budget-friendly student broth loaded with rice noodles, protein, fresh greens, and chili oil essence.",
        macros: { protein: 24, carbs: 55, fat: 12, fiber: 5 }
    },
    {
        id: "creamy-tomato-pasta",
        title: "Tomato Pasta",
        cookTime: 15,
        image: mealImg2,
        description: "Rich tomato sauce tossed with penne pasta, garlic, olive oil, and topped with a generous sprinkle of parmesan.",
        macros: { protein: 12, carbs: 65, fat: 8, fiber: 6 }
    },
    {
        id: "sweet-potato-curry",
        title: "Chickpea Curry",
        cookTime: 30,
        image: mealImg3,
        description: "A comforting, one-pot coconut curry loaded with sweet potatoes, chickpeas, and fresh baby spinach.",
        macros: { protein: 10, carbs: 52, fat: 11, fiber: 12 }
    },
    {
        id: "beef-stir-fry",
        title: "Beef Stir Fry",
        cookTime: 20,
        image: mealImg4,
        description: "Tender beef strips flash-fried with colorful bell peppers and snap peas in a savory ginger-soy glaze.",
        macros: { protein: 32, carbs: 18, fat: 13, fiber: 5 }
    },

    {
        id: "chicken-ramen-bowl",
        title: "Quick Chicken Ramen",
        cookTime: 20,
        image: mealImg1,
        description: "Instant ramen upgraded with shredded chicken, a soft-boiled egg, soy sauce, and fresh spring onions.",
        macros: { protein: 28, carbs: 42, fat: 14, fiber: 2 }
    },
    {
        id: "garlic-butter-salmon",
        title: "Baked Salmon",
        cookTime: 25,
        image: mealImg2,
        description: "Flaky salmon fillet baked in a rich garlic butter glaze, served alongside crisp roasted broccoli.",
        macros: { protein: 34, carbs: 6, fat: 22, fiber: 4 }
    },
    {
        id: "bbq-chicken-wrap",
        title: "BBQ Chicken Wrap",
        cookTime: 12,
        image: mealImg3,
        description: "Grilled chicken breast tossed in smoky BBQ sauce with crisp lettuce wrapped tightly in a tortilla.",
        macros: { protein: 26, carbs: 35, fat: 9, fiber: 3 }
    },
    {
        id: "cheesy-turkey-burger",
        title: "Lean Turkey Burger",
        cookTime: 25,
        image: mealImg4,
        description: "A juicy, seasoned lean turkey patty grilled to perfection and served on a toasted brioche bun with cheddar.",
        macros: { protein: 35, carbs: 24, fat: 15, fiber: 2 }
    },

    // --- Round 3 (Images 1 to 4) ---
    {
        id: "beef-pho-broth",
        title: "Easy Beef Pho",
        cookTime: 45,
        image: mealImg1,
        description: "An aromatic Vietnamese classic made simple with thin beef slices, rice noodles, and a fragrant spiced broth.",
        macros: { protein: 30, carbs: 48, fat: 10, fiber: 3 }
    },
    {
        id: "avocado-toast-egg",
        title: "Avocado Egg Toast",
        cookTime: 10,
        image: mealImg2,
        description: "Sourdough toast topped with mashed seasoned avocado, a sunny-side-up egg, and chili flakes.",
        macros: { protein: 14, carbs: 28, fat: 18, fiber: 8 }
    },
    {
        id: "mediterranean-salad",
        title: "Greek Feta Salad",
        cookTime: 10,
        image: mealImg3,
        description: "Crisp cucumbers, juicy cherry tomatoes, olives, and cubed feta cheese tossed in a light oregano dressing.",
        macros: { protein: 8, carbs: 12, fat: 16, fiber: 4 }
    },
    {
        id: "protein-pancake-stack",
        title: "Oat Pancakes",
        cookTime: 15,
        image: mealImg4,
        description: "Fluffy, high-protein blender pancakes made with oats, banana, and protein powder, served with maple syrup.",
        macros: { protein: 22, carbs: 44, fat: 5, fiber: 7 }
    }
];

export const RecipesPage = () => {
    const [recipes, setRecipes] = useState(MOCK_RECIPES);
    const navigate = useNavigate();

    const handleLoadMore = () => {
        const uniqueAppend = MOCK_RECIPES.map((recipe, index) => ({
            ...recipe,
            id: `${recipe.id}-load-${Date.now()}-${index}`
        }));

        setRecipes(prevRecipes => [...prevRecipes, ...uniqueAppend]);
    };

    return (
        <MainLayout>
            <h1 className={styles.heading}>Best Recipes For Students</h1>

            <div className={styles.bg}>
                <section className={`container ${styles.recipes__container}`}>
                    {recipes.map(item => (
                        <RecipeCard
                            key={item.id}
                            recipe={item}
                            onClick={() => navigate(`/recipes/${item.id}`, { state: { recipe: item } })}
                        />
                    ))}
                </section>

                <Button
                    className={styles.btn}
                    variant='orange'
                    onClick={handleLoadMore}
                >
                    More Recipes
                </Button>
            </div>
        </MainLayout>
    );
};
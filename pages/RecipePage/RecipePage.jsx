import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PieChart } from "@mui/x-charts/PieChart";
import { MainLayout } from "../../layout/MainLayout.jsx";
import { Button } from "../../components/Button/Button.jsx";
import styles from "./RecipePage.module.css";

const DATA_LOOKUP = [
    {
        id: "vietnamese-spicy-soup",
        title: "Spicy Noodle Soup",
        cookTime: 40,
        description: "A rich, budget-friendly student broth loaded with rice noodles, protein, fresh greens, and chili oil essence.",
        macros: { protein: 24, carbs: 55, fat: 12, fiber: 5 }
    },
    {
        id: "creamy-tomato-pasta",
        title: "Tomato Pasta",
        cookTime: 15,
        description: "Rich tomato sauce tossed with penne pasta, garlic, olive oil, and topped with a generous sprinkle of parmesan.",
        macros: { protein: 12, carbs: 65, fat: 8, fiber: 6 }
    },
    {
        id: "sweet-potato-curry",
        title: "Chickpea Curry",
        cookTime: 30,
        description: "A comforting, one-pot coconut curry loaded with sweet potatoes, chickpeas, and fresh baby spinach.",
        macros: { protein: 10, carbs: 52, fat: 11, fiber: 12 }
    },
    {
        id: "beef-stir-fry",
        title: "Beef Stir Fry",
        cookTime: 20,
        description: "Tender beef strips flash-fried with colorful bell peppers and snap peas in a savory ginger-soy glaze.",
        macros: { protein: 32, carbs: 18, fat: 13, fiber: 5 }
    },
    {
        id: "chicken-ramen-bowl",
        title: "Quick Chicken Ramen",
        cookTime: 20,
        description: "Instant ramen upgraded with shredded chicken, a soft-boiled egg, soy sauce, and fresh spring onions.",
        macros: { protein: 28, carbs: 42, fat: 14, fiber: 2 }
    },
    {
        id: "garlic-butter-salmon",
        title: "Baked Salmon",
        cookTime: 25,
        description: "Flaky salmon fillet baked in a rich garlic butter glaze, served alongside crisp roasted broccoli.",
        macros: { protein: 34, carbs: 6, fat: 22, fiber: 4 }
    },
    {
        id: "bbq-chicken-wrap",
        title: "BBQ Chicken Wrap",
        cookTime: 12,
        description: "Grilled chicken breast tossed in smoky BBQ sauce with crisp lettuce wrapped tightly in a tortilla.",
        macros: { protein: 26, carbs: 35, fat: 9, fiber: 3 }
    },
    {
        id: "cheesy-turkey-burger",
        title: "Lean Turkey Burger",
        cookTime: 25,
        description: "A juicy, seasoned lean turkey patty grilled to perfection and served on a toasted brioche bun with cheddar.",
        macros: { protein: 35, carbs: 24, fat: 15, fiber: 2 }
    },
    {
        id: "beef-pho-broth",
        title: "Easy Beef Pho",
        cookTime: 45,
        description: "An aromatic Vietnamese classic made simple with thin beef slices, rice noodles, and a fragrant spiced broth.",
        macros: { protein: 30, carbs: 48, fat: 10, fiber: 3 }
    },
    {
        id: "avocado-toast-egg",
        title: "Avocado Egg Toast",
        cookTime: 10,
        description: "Sourdough toast topped with mashed seasoned avocado, a sunny-side-up egg, and chili flakes.",
        macros: { protein: 14, carbs: 28, fat: 18, fiber: 8 }
    },
    {
        id: "mediterranean-salad",
        title: "Greek Feta Salad",
        cookTime: 10,
        description: "Crisp cucumbers, juicy cherry tomatoes, olives, and cubed feta cheese tossed in a light oregano dressing.",
        macros: { protein: 8, carbs: 12, fat: 16, fiber: 4 }
    },
    {
        id: "protein-pancake-stack",
        title: "Oat Pancakes",
        cookTime: 15,
        description: "Fluffy, high-protein blender pancakes made with oats, banana, and protein powder, served with maple syrup.",
        macros: { protein: 22, carbs: 44, fat: 5, fiber: 7 }
    }
];

export const RecipePage = ({ isLoggedIn }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    console.log("Current URL Dynamic ID parameter detected:", id);
    const baseId = id ? id.split("-load-")[0] : "";
    const recipe = DATA_LOOKUP.find(r => r.id === baseId);

    // Comments Section State
    const [comments, setComments] = useState([
        { id: 1, user: "ChefStudent", text: "Tried making a placeholder version of this, can't wait for the full feature!" },
    ]);
    const [newComment, setNewComment] = useState('');

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (!newComment.trim()) return;

        const commentObj = {
            id: Date.now(),
            user: "You",
            text: newComment
        };
        setComments([...comments, commentObj]);
        setNewComment('');
    };

    if (!recipe) {
        return (
            <MainLayout isLoggedIn={isLoggedIn}>
                <div style={{ textAlign: "center", padding: "100px 20px" }}>
                    <h2>Recipe data lookup failed</h2>
                    <p>Could not match route dynamic identifier: <strong>"{id}"</strong></p>
                    <Button variant="orange" onClick={() => navigate("/list")}>
                        Return to List
                    </Button>
                </div>
            </MainLayout>
        );
    }

    const chartData = [
        { id: 0, value: recipe.macros.protein, label: `Protein (${recipe.macros.protein}g)`, color: '#FF9800' },
        { id: 1, value: recipe.macros.carbs, label: `Carbs (${recipe.macros.carbs}g)`, color: '#4CAF50' },
        { id: 2, value: recipe.macros.fat, label: `Fat (${recipe.macros.fat}g)`, color: '#E91E63' },
        { id: 3, value: recipe.macros.fiber, label: `Fiber (${recipe.macros.fiber}g)`, color: '#00BCD4' },
    ];

    return (
        <MainLayout isLoggedIn={isLoggedIn}>
            <div className={`container ${styles.pageContainer}`}>
                <button className={styles.backButton} onClick={() => navigate(-1)}>
                    ← Back to Recipes
                </button>

                <div className={styles.gridContainer}>
                    <div className={styles.mediaColumn}>
                        <h1 className={styles.recipeTitle}>{recipe.title}</h1>
                        <div className={styles.timeBadge}>⏱ Cooking Time: {recipe.cookTime} mins</div>
                        <p className={styles.description}>{recipe.description}</p>
                    </div>

                    <div className={styles.infoColumn}>
                        <div className={styles.cardBlock}>
                            <h3 className={styles.blockTitle}>Macronutrient Profile</h3>
                            <div className={styles.chartWrapper}>
                                <PieChart
                                    series={[
                                        {
                                            data: chartData,
                                            innerRadius: 40,
                                            outerRadius: 90,
                                            paddingAngle: 4,
                                            cornerRadius: 6,
                                        },
                                    ]}
                                    width={380}
                                    height={200}
                                />
                            </div>
                        </div>

                        <div className={styles.cardBlock}>
                            <h3 className={styles.blockTitle}>Ingredients</h3>
                            <ul className={styles.listStructure}>
                                <li>Standard grocery base portions</li>
                                <li>Primary protein selection item</li>
                                <li>Spices & household seasoning mixes</li>
                            </ul>
                        </div>

                        <div className={styles.cardBlock}>
                            <h3 className={styles.blockTitle}>Instructions</h3>
                            <ol className={styles.listStructure}>
                                <li>Wash, rinse, and chop up all dynamic ingredients clean.</li>
                                <li>Combine over a hot skillet pan or pot and heat thoroughly.</li>
                                <li>Serve warm immediately and preserve standard leftovers.</li>
                            </ol>
                        </div>
                    </div>
                </div>

                <hr className={styles.divider} />

                {/* Interactive Comment Section */}
                <div className={styles.commentSection}>
                    <h3>Community Discussion</h3>

                    {isLoggedIn ? (
                        <form onSubmit={handleCommentSubmit} className={styles.commentForm}>
                            <input
                                type="text"
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                                placeholder="Write a public comment..."
                                required
                            />
                            <Button type="submit" variant="orange">Post</Button>
                        </form>
                    ) : (
                        <div className={styles.loginWarning}>
                            <p>⚠️ You must be logged in to participate in the discussion.</p>
                        </div>
                    )}

                    <div className={styles.commentsList}>
                        {comments.map(c => (
                            <div key={c.id} className={styles.commentCard}>
                                <strong>@{c.user}</strong>
                                <p>{c.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};
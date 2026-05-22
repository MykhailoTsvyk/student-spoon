import { useState } from 'react';
import { MainLayout } from '../../layout/MainLayout.jsx';
import { Button } from '../../components/Button/Button.jsx';
import styles from './UploadPage.module.css';

export const UploadPage = ({ isLoggedIn }) => {
    // Recipe Form State
    const [title, setTitle] = useState('');
    const [cookTime, setCookTime] = useState('');
    const [description, setDescription] = useState('');

    // Image Upload State
    const [imagePreview, setImagePreview] = useState(null);

    // Handle Local Image Preview
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Generates a temporary local URL for the selected file
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        alert(`Recipe "${title}" submitted successfully with an image (Mock action)!`);
        setTitle('');
        setCookTime('');
        setDescription('');
        setImagePreview(null); // Clear preview after submit
    };

    return (
        <MainLayout isLoggedIn={isLoggedIn}>
            <div className={`container ${styles.uploadContainer}`}>
                <h1>Upload New Student Recipe</h1>

                <form onSubmit={handleFormSubmit} className={styles.uploadForm}>
                    <div className={styles.formGroup}>
                        <label>Recipe Title</label>
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required placeholder="e.g., Midnight Ramen Upgrade" />
                    </div>

                    <div className={styles.formGroup}>
                        <label>Cooking Time (Minutes)</label>
                        <input type="number" value={cookTime} onChange={(e) => setCookTime(e.target.value)} required placeholder="e.g., 15" />
                    </div>

                    <div className={styles.formGroup}>
                        <label>Recipe Image</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className={styles.fileInput}
                        />
                        {imagePreview && (
                            <div className={styles.previewContainer}>
                                <p>Image Preview:</p>
                                <img src={imagePreview} alt="Recipe Preview" className={styles.imagePreview} />
                            </div>
                        )}
                    </div>

                    <div className={styles.formGroup}>
                        <label>Description & Instructions</label>
                        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required placeholder="Share your cheap, quick cooking secrets..." rows="5" />
                    </div>

                    <Button type="submit" variant="orange">Submit Recipe</Button>
                </form>
            </div>
        </MainLayout>
    );
};
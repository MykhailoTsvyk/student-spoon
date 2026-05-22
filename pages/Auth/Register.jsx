
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from '../../components/Button/Button.jsx';
import styles from './Auth.module.css';
import logo from "../../src/assets/img/dark-logo.svg"

export const Register = () => {
    const navigate = useNavigate();

    // State management for form fields
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState({ text: '', isError: false });

    const handleRegister = (e) => {
        e.preventDefault();

        // Basic validation check
        if (!fullName || !email || !password) {
            setMessage({ text: 'Please fill out all fields.', isError: true });
            return;
        }

        // Check if a user with this email already exists in localStorage
        const existingUser = localStorage.getItem(email);
        if (existingUser) {
            setMessage({ text: 'An account with this email already exists.', isError: true });
            return;
        }

        // Create user data object
        const userData = {
            fullName: fullName,
            email: email,
            password: password
        };

        // Save the data to localStorage using the email as the unique key
        localStorage.setItem(email, JSON.stringify(userData));

        // Show success message with redirection hint
        setMessage({ text: 'Account created successfully! Redirecting to home...', isError: false });

        // Clear input fields
        setFullName('');
        setEmail('');
        setPassword('');

        // Redirect to home page after 1.5 seconds
        setTimeout(() => {
            navigate('/');
        }, 1500);
    };

    return (
        <section className={styles.auth__bg}>
            <div className={styles.authWrapper}>
                <div className={styles.authCard}>
                    <div className={styles.form__info__container}>
                        <h2 className={styles.authTitle}>Sign Up</h2>
                        {/* FIX: Wrapped navigate inside an inline arrow function */}
                        <a onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
                            <img src={logo} alt="Logo"/>
                        </a>
                    </div>

                    {/* Status/Error Messages */}
                    {message.text && (
                        <p className={message.isError ? styles.errorMessage : styles.successMessage}>
                            {message.text}
                        </p>
                    )}

                    <form className={styles.form} onSubmit={handleRegister}>
                        <div className={styles.inputGroup}>
                            <label>Full Name</label>
                            <input
                                type="text"
                                className={styles.inputField}
                                placeholder="John Doe"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label>Email Address</label>
                            <input
                                type="email"
                                className={styles.inputField}
                                placeholder="student@university.ac.uk"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label>Password</label>
                            <input
                                type="password"
                                className={styles.inputField}
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <Button variant="orange" type="submit">Create Account</Button>
                    </form>
                </div>
            </div>
        </section>
    );
};
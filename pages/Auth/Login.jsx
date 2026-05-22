// src/pages/Auth/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from '../../components/Button/Button.jsx';
import styles from './Auth.module.css';
import logo from "../../src/assets/img/dark-logo.svg";

export const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState({ text: '', isError: false });

    const handleLogin = (e) => {
        e.preventDefault();

        if (!email || !password) {
            setMessage({ text: 'Please fill out all fields.', isError: true });
            return;
        }

        const savedUserData = localStorage.getItem(email);

        if (!savedUserData) {
            setMessage({ text: 'No account found with this email.', isError: true });
            return;
        }

        const user = JSON.parse(savedUserData);

        if (user.password === password) {
            setMessage({ text: `Welcome back, ${user.fullName}! Login successful. Redirecting...`, isError: false });

            localStorage.setItem("currentUser", JSON.stringify(user));

            setEmail('');
            setPassword('');

            setTimeout(() => {
                navigate('/');
            }, 1500);
        } else {
            setMessage({ text: 'Incorrect password. Please try again.', isError: true });
        }
    };

    return (
        <section className={styles.auth__bg}>
            <div className={styles.authWrapper}>
                <div className={styles.authCard}>
                    <div className={styles.form__info__container}>
                        <h2 className={styles.authTitle}>Login</h2>
                        {/* FIX 1: Wrapped navigate inside an arrow function */}
                        <a onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
                            <img src={logo} alt="Logo"/>
                        </a>
                    </div>

                    {message.text && (
                        <p className={message.isError ? styles.errorMessage : styles.successMessage}>
                            {message.text}
                        </p>
                    )}

                    <form className={styles.form} onSubmit={handleLogin}>
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

                        <Button variant="primary" type="submit">Sign In</Button>

                        {/* FIX 2: Changed type to "button" and wrapped navigate in an arrow function */}
                        <Button
                            variant="orange"
                            type="button"
                            onClick={() => navigate('/register')}
                        >
                            Register
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    );
};
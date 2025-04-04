import { useState } from 'react';
import style from './styles/Login.module.css';

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [isLoginForm, setIsLoginForm] = useState(true);

    const handleShowPasswordToggle = () => {
        setShowPassword(!showPassword);
    };

    const toggleForm = () => {
        setIsLoginForm(!isLoginForm);
    };

    return (
        <div className={style.login}>
            <form action="/" className={isLoginForm ? style.loginForm : style.signupForm}>
                <h1>{isLoginForm ? 'Login' : 'Sign Up'}</h1>

                {!isLoginForm && (
                    <>
                        <label htmlFor="fullName">Full Name</label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            placeholder="Enter your full name"
                            required
                        />
                    </>
                )}

                <label htmlFor="user">Email</label>
                <input
                    type="email"
                    id="user"
                    name="user"
                    placeholder="Enter your email"
                    required
                />

                <div className={style.passwordContainer}>
                    <label htmlFor="pass">Password</label>
                    <input
                        type={showPassword ? "text" : "password"}
                        id="pass"
                        name="pass"
                        placeholder="Enter your password"
                        required
                        minLength={8}
                    />
                </div>

                {!isLoginForm && (
                    <div className={style.passwordContainer}>
                        <label htmlFor="confirmPass">Confirm Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            id="confirmPass"
                            name="confirmPass"
                            placeholder="Confirm your password"
                            required
                            minLength={8}
                        />
                    </div>
                )}

                <div className={style.showPasswordWrapper}>
                    <input
                        type="checkbox"
                        id="showPassword"
                        checked={showPassword}
                        onChange={handleShowPasswordToggle}
                    />
                    <label htmlFor="showPassword">Show Password</label>
                </div>

                <input
                    type="submit"
                    value={isLoginForm ? 'Login' : 'Sign Up'}
                />

                <div className={style.signUp}>
                    <label>
                        {isLoginForm
                            ? "Don't have an account? "
                            : "Already have an account? "}
                    </label>
                    <button
                        type="button"
                        onClick={toggleForm}
                        className={style.toggleFormBtn}
                    >
                        {isLoginForm ? 'Sign Up' : 'Login'}
                    </button>
                </div>
            </form>
        </div>
    );
}
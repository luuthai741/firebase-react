import React, { useEffect, useState } from 'react';
import './login.css';
import { Link, useHistory } from 'react-router-dom';
import { useAuthState } from "react-firebase-hooks/auth";
import { signInWithEmailAndPassword, signInWithGoogle, auth } from '../../services/firebase/index';
const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const history = useHistory();
    const [validate, setValidate] = useState("");

    useEffect(() => {
        if (loading) return;
        if (user) history.replace("/home");
        if (error) {
            setValidate("Something was wrong");
        }
    }, [user, loading])
    return (
        <div className="login">
            <input
                type="text"
                className="login__textBox"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
            />
            <input
                type="password"
                className="login__textBox"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
            />
            <button
                className="login__btn"
                onClick={() => signInWithEmailAndPassword(email, password)}
            > Login</button>
            <button className="login__btn login__google" onClick={signInWithGoogle}>
                Login with Google
            </button>
            <div>
                <Link to="/reset">Forgot Password</Link>
            </div>
            <div>
                Don't have an account? <Link to="/register">Register</Link> now.
            </div>
            <div>
                {validate}
            </div>
        </div>
    );
};

export default Login;
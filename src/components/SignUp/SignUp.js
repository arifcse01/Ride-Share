import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router-dom';
import './SignUp.css';
import { UserContext } from '../../App';



if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}


const SignUp = () => {
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignIn: false,
        name: "name",
        email: "email",
        password: "password",
        error: "",
        success: false
    });

    const handleBlur = (event) => {
        let isFieldValid = true;
        if (event.target.name === "email") {
            isFieldValid = /\S+@\S+\.\S+/.test(event.target.value);
        }
        if (event.target.name === "password" || "confirm-password") {
            const isPasswordValid = event.target.value.length > 6;
            const isPasswordValidNum = /\d{1}/.test(event.target.value);
            isFieldValid = isPasswordValid && isPasswordValidNum;
        }
        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[event.target.name] = event.target.value;
            setUser(newUserInfo);
        }
    }

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const provider = new firebase.auth.GoogleAuthProvider();

    const handleSignIn = () => {
        firebase.auth().signInWithPopup(provider)
            .then((result) => {
                const { displayName, email } = result.user
                const signIn = {
                    isSignIn: true,
                    name: displayName,
                    email: email
                }
                setUser(signIn);
                setLoggedInUser(signIn);
                history.replace(from);
            })
            .catch((error) => {
                var errorMessage = error.message;
            });
    }

    const handleSubmit = (event) => {
        if (newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then((result) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = "";
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                })
                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                });
        }

        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then((result) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = "";
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    setLoggedInUser(newUserInfo);
                    history.replace(from);
                })
                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                });
        }
        event.preventDefault();
    }

    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-6 offset-md-3">
                    <p style={{ color: 'red' }}>{user.error}</p>
                    {user.success && <p style={{ color: 'green' }}>Account {newUser ? "Create" : "logged In"} Successfully</p>}
                    <form style={{ border: '1px solid goldenRod', padding: '20px', borderRadius: '5px' }} onSubmit={handleSubmit}>
                        {newUser ? <h2>Create Account</h2> : <h2>Log In</h2>}

                        {newUser &&
                            <div className="form-group">
                                <input type="text" name="name" className="form-control" id="" placeholder="Enter Your Name" required />
                            </div>
                        }
                        <div className="form-group">
                            <input onBlur={handleBlur} type="email" name="email" className="form-control" id="" placeholder="Enter Email" required />
                        </div>

                        <div className="form-group">
                            <input onBlur={handleBlur} type="password" name="password" className="form-control" id="" placeholder="Enter Password" required />
                        </div>

                        {newUser &&
                            <div className="form-group">
                                <input onBlur={handleBlur} type="password" name="confirm-password" className="form-control" id="" placeholder="Enter Confirm Password" required />
                            </div>
                        }

                        <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id="" />
                        <label htmlFor="newUser"> Don't have an account?</label>
                        <input className="account" type="submit" value={newUser ? "Create an Account" : "Log In"} />

                    </form>
                    <p className="text-center mt-3">OR</p>
                    <div className="mb-5">
                        <input onClick={handleSignIn} className="google" type="button" value="Login With Google" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
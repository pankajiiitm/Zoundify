import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        axios.post('http://localhost:5000/signup', {
            name: name,
            password: password,
            email: email
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error('Error occurred while signing up:', error);
        });
    };

    return (
        <div className="login-page-new__main-form">
            <div className="login-page-new__main-form-title-brand"></div>
            <router-outlet></router-outlet>
            <cu-login-form>
                <h1 className="login-page-new__main-form-title"> Welcome back!</h1>
                <div className="login-page-new__main-form-router-outlet login-page-new__main-form-login">
                    <form noValidate aria-label="Login" data-form-type="login" className="ng-pristine ng-invalid ng-touched" onSubmit={handleSubmit}>
                        <div className="login-page-new__main-form-row">
                            <label htmlFor="login-email-input" className="login-page-new__main-form-row-label"> Email </label>
                            <input
                                id="login-email-input"
                                data-test="login-email-input"
                                placeholder="Enter your email"
                                formcontrolname="email"
                                type="email"
                                aria-describedby="cu-login-form__error_email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="cu-form__input ng-pristine ng-invalid ng-touched"
                                aria-invalid="false"
                            />
                            <div aria-hidden="true" className="login-page-new__main-form-row-icon icon">
                                {/* Add your icon SVG or image here */}
                            </div>
                            <p id="cu-login-form__error_email" data-test="form__error-email" className="cu-form__error cu-form__error_absolute">
                                <span aria-hidden="true" className="cu-form__error-icon icon">
                                    {/* Add your error icon SVG or image here */}
                                </span>
                                <span className="cu-form__error-text"> Email required! </span>
                            </p>
                        </div>
                        <div className="login-page-new__main-form-row">
                            <label htmlFor="login-password-input" className="login-page-new__main-form-row-label"> Password </label>
                            <input
                                id="login-password-input"
                                data-test="login-password-input"
                                type="password"
                                spellCheck="false"
                                autoComplete="off"
                                placeholder="Enter password"
                                formControlName="password"
                                maxLength="256"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="cu-form__input cu-form__input-pwd ng-pristine ng-invalid ng-touched"
                                aria-invalid="false"
                            />
                            <div aria-hidden="true" className="login-page-new__main-form-row-icon icon">
                                {/* Add your icon SVG or image here */}
                            </div>
                            <div className="login-page-new__main-form-options">
                                <a id="component-login-forgot" href="https://app.clickup.com/login/forgot" draggable="false" className="cu-show-pwd"> Forgot <span>Password</span>? </a>
                            </div>
                            <p id="cu-login-form__error_password" data-test="form__error-password" className="cu-form__error cu-form__error_relative">
                                <span aria-hidden="true" className="cu-form__error-icon icon">
                                    {/* Add your error icon SVG or image here */}
                                </span>
                                <span className="cu-form__error-text"> Password required! </span>
                            </p>
                        </div>
                        <button type="submit" data-test="login-submit" className="login-page-new__main-form-button" aria-disabled="true">
                            <span className="login-page-new__main-form-button-text"> Log In </span>
                            <div className="cu-btn__spinner">
                                <div className="cu-btn__bounce1"></div>
                                <div className="cu-btn__bounce2"></div>
                                <div className="cu-btn__bounce3"></div>
                            </div>
                        </button>
                    </form>
                </div>
            </cu-login-form>
            <a href="https://clickup.com/help" target="_blank" data-test="login__main-form-help" className="login-page-new__main-form-help">
                <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0 6a6 6 0 016-6h4a6 6 0 016 6v4a6 6 0 01-6 6H6a6 6 0 01-6-6V6zm2 0a4 4 0 014-4h4a4 4 0 014 4v4a4 4 0 01-4 4H6a4 4 0 01-4-4V6zm5.117-.483c-.12.25-.34.483-.617.483H6c-.552 0-1.016-.46-.836-.982A3.001 3.001 0 0111 6c0 1.126-.62 1.863-1.538 2.308C9.192 8.44 9 8.7 9 9a1 1 0 01-2 0v-.5c0-.828.724-1.313 1.482-1.647C8.787 6.72 9 6.467 9 6a1 1 0 00-1-1c-.512 0-.761.262-.883.517zM8 13a1 1 0 100-2 1 1 0 000 2z" fill="#fff"></path>
                </svg>
                <div className="login-page-new__main-form-help-text"> Help </div>
            </a>
        </div>
    );
};

export default Signup;

import React from "react";
import { Link } from "react-router-dom";
import SignupPage from "pages/signup";
import LoginPage from "pages/login";
import Header from "components/headers/light.js";

export function Home() {
    return (
        <div>
            <h1> This is home.</h1>
            <nav>
                <Link to="abouteodp">AboutEODP</Link>
            </nav>
        </div>
    );
}

export function MyProfile() {
    return (
        <div>
            <h1> This is My profile.</h1>
        </div>
    );
}

export function MyProjects() {
    return (
        <div>
            <h1> This is MyProjects.</h1>
        </div>
    );
}

export function Login(props) {
    return (
        <div>
            <LoginPage props={props} />
        </div>
    );
}

export function SignUp() {
    return (
        <div>
            <Header />
            <SignupPage />
        </div>
    );
}

export function Projects() {
    return (
        <div>
            <h1> This is Projects.</h1>
        </div>
    );
}

export function AboutEODP() {
    return (
        <div>
            <h1> This is About EODP.</h1>
        </div>
    );
}
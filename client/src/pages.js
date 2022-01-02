import React from "react";
import { Link } from "react-router-dom";
import SignupPage from "pages/signup";
import LoginPage from "pages/login";
import MyProfilePage from "pages/myprofile";
import EditMyProfilePage from "pages/editmyprofile";
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
            <Header />
            <MyProfilePage />
        </div>
    );
}

export function EditMyProfile() {
    return (
        <div>
            <Header />
            <EditMyProfilePage />
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
            <Header />
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
import React from "react";

// * styles import
import './sign-in-and-sign-up.styles.scss';

// ! components import
import SignIn from '../components/sign-in/sign-in.component';
    

const SignInAndSignUpPage = () => {
    return(
        <div className="sign-in-and-sign-up">
            <SignIn />
        </div>
    )
}

export default  SignInAndSignUpPage;
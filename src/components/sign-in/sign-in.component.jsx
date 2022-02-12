import React, {Component} from "react";
// * styles import
import './sign-in.styles.scss';

// ! component import 
// import SignInAndSignUpPage from "../../pages/sing-in-and-sign-up.component";
import FormInput from '../form-input/form-input.component';
import CustomButton from "../custom-button/custom-button.component";

// ? firebase import
import {auth, SignInWithGoogle} from '../../firebase/firebase-utils';

class SignIn extends Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async (event) =>{
        event.preventDefault();
        const {email, password} = this.state;

        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''});
        }catch(error){
            console.log(error);
        }





        this.setState({email: '', password: ''})
    }


    handleChange = (event) => {
        const {name, value} = event.target;

        this.setState({[name] : value})
    }


    render(){
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>sign in with your email and password</span>

                <form action="" onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email' 
                        type="email" 
                        handleChange={this.handleChange}    
                        value={this.state.email} 
                        label='email'
                        required 
                    />
                    <FormInput 
                        name='password'
                        type='password'
                        value={this.state.password}                        handleChange={this.handleChange}
                        label='password'
                        required
                    />

                    <div className="buttons">
                        <CustomButton type='submit' >Sign In</CustomButton>
                        <CustomButton onClick={SignInWithGoogle} isGoogleSignIn >Sign In with Google</CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    }


}


export default SignIn;
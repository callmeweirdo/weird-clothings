import React from 'react';
import './pages/homepage/homepage.styles.scss';
import { Route, Routes } from 'react-router-dom';


// !components import
import HomePage from './pages/homepage/HomePage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sing-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

// ! firebase
import {auth, createUserProfileDocument} from './firebase/firebase-utils';

// ! redux
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.action';

class App extends React.Component{

  unsubscribeFromAuth = null;

  componentDidMount(){

    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await  createUserProfileDocument(userAuth);

      userRef.onSnapshot(snapShot => {
        setCurrentUser({
          id: snapShot.id,
          ...snapShot.data()
        });

        console.log( this.state );


      } )
      }
      setCurrentUser(userAuth)
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div className="App">
        <Header/>
        <Routes>
          <Route  path='/' element={<HomePage />} />
          <Route  path='/shop' element={<ShopPage />} />
          <Route path='/signin' element={<SignInAndSignUpPage />} />
          <Route path='/checkout' element={<CheckoutPage />} />
        </ Routes> 
      </div>
    );
  }

}

const mapDispatchToProps = dispatch => ({
   setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
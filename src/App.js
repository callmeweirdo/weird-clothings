import React from 'react';
import './pages/homepage/homepage.styles.scss';
import { Route, Routes } from 'react-router-dom';


// !components import
import HomePage from './pages/homepage/HomePage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sing-in-and-sign-up.component';

import {auth} from './firebase/firebase-utils';

class App extends React.Component{
  constructor(){
    super();

    this.state = {
      currenUser: null
    }
  }

  unsubscribeFromAuth = null;
  
  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user})
          console.log(user);
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route  path='/' element={<HomePage />} />
          <Route  path='/shop' element={<ShopPage />} />
          <Route path='/signin' element={<SignInAndSignUpPage />} />
        </ Routes> 
      </div>
    );
  }
  
}

export default App;

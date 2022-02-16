import React from 'react';
import './pages/homepage/homepage.styles.scss';
import { Route, Routes } from 'react-router-dom';


// !components import
import HomePage from './pages/homepage/HomePage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sing-in-and-sign-up.component';

<<<<<<< HEAD
import {auth, createUserProfileDocument} from './firebase/firebase-utils';

class App extends React.Component{
  constructor(){
    super();

    this.state = {
      currenUser: null
    }
  }



  unsubscribeFromAuth = null;
  
  componentDidMount(){
=======
// ! firebase
import {auth, createUserProfileDocument} from './firebase/firebase-utils';

// ! redux
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.action';

class App extends React.Component{

  unsubscribeFromAuth = null;

  componentDidMount(){

    const {setCurrentUser} = this.props;

>>>>>>> 534f632 (added redux, implemented userReducer and userActions to header and app components)
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await  createUserProfileDocument(userAuth);

      userRef.onSnapshot(snapShot => {
<<<<<<< HEAD
        this.setState({
          currentUser:{
            id: snapShot.id,
            ...snapShot.data()
          }
        })
=======
        setCurrentUser({
          id: snapShot.id,
          ...snapShot.data()
        });
>>>>>>> 534f632 (added redux, implemented userReducer and userActions to header and app components)

        console.log( this.state );


      } )
      }
<<<<<<< HEAD
      this.setState({currentUser: userAuth})
=======
      setCurrentUser(userAuth)
>>>>>>> 534f632 (added redux, implemented userReducer and userActions to header and app components)
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div className="App">
<<<<<<< HEAD
        <Header currentUser={this.state.currentUser} />
=======
        <Header/>
>>>>>>> 534f632 (added redux, implemented userReducer and userActions to header and app components)
        <Routes> 
          <Route  path='/' element={<HomePage />} />
          <Route  path='/shop' element={<ShopPage />} />
          <Route path='/signin' element={<SignInAndSignUpPage />} />
        </ Routes> 
      </div>
    );
  }
  
}

<<<<<<< HEAD
export default App;
=======
const mapDispatchToProps = dispatch => ({
   setCurrentUser: user => dispatch(setCurrentUser(user))
});



export default connect(null, mapDispatchToProps)(App);
>>>>>>> 534f632 (added redux, implemented userReducer and userActions to header and app components)

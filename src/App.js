import './pages/homepage/homepage.styles.scss';
import { Route, Routes } from 'react-router-dom';


// !components import
import HomePage from './pages/homepage/HomePage.component';
import ShopPage from './pages/shop/shop.component';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route  path='/' element={<HomePage />} />
        <Route  path='/shop' element={<ShopPage />} />
      </ Routes> 
    </div>
  );

}

export default App;

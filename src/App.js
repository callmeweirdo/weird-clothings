import './pages/homepage/homepage.styles.scss';
import { Route, Routes } from 'react-router-dom';


// !components import
import HomePage from './pages/homepage/HomePage.component';

const HatsPage = () =>{
  return(
    <div>
      <h1>HTAS PAGE</h1>
    </div>
  )
}


function App() { 
  return (
    <div className="App">
      <Routes>
        <Route   path='/' element={<HomePage />} />
        <Route   path='/hats' element={<HatsPage />} />
      </ Routes >
    </div>
  );

}

export default App;

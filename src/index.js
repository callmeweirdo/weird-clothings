import React from 'react';
<<<<<<< HEAD
=======

>>>>>>> 534f632 (added redux, implemented userReducer and userActions to header and app components)
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';


<<<<<<< HEAD
=======
import {Provider} from 'react-redux';
import Store from './redux/store';


>>>>>>> 534f632 (added redux, implemented userReducer and userActions to header and app components)
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
<<<<<<< HEAD
    <BrowserRouter>
    <App />
    </ BrowserRouter>
=======
    <Provider store={Store}>
      <BrowserRouter>
        <App />
      </ BrowserRouter>
    </Provider>
>>>>>>> 534f632 (added redux, implemented userReducer and userActions to header and app components)
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

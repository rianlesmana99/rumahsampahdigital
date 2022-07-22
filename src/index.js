import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Content from './components/content/content';
import Navbar from './components/navbar/navbar';
import Admin from './pages/admin/admin';
import Dashbord from './pages/dashbord/dashbord';
import Home from './pages/home/home';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <div>
    <Content />
    <Home />
    <Navbar />
    <Admin />
    <Dashbord />
  </div>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

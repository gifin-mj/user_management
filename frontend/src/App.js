
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import { useEffect } from 'react';

function App() {

  return (

    <div className="App">

     
        <Routes>
          <Route path="/" >
              <Route index element={<Home/>}/>
              <Route path="login" element={<Login />}/>
              <Route path="signup" element={<Signup/>}/>  
          </Route>
        </Routes>
     
      
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, User, CreateUser} from './pages';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (    
    <Router>
      <Navbar/>
      <Routes>        
        <Route path='/' element ={<Home/>}/>
        <Route path='/user/:id' element ={<User/>}/>
        <Route path='/create' element ={<CreateUser/>}/>
      </Routes>
    </Router>
  );
}

export default App;

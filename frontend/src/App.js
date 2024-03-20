import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Header }  from './Components/Header';
import LoginForm from './Components/Lakmal/LoginForm';
import SignupForm from './Components/Lakmal/SignupForm';
import Index from './Components/Lakmal/Index';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/header' element={<Header/>} />
        <Route path='/' element={<LoginForm/>} />
        <Route path='/signup' element={<SignupForm/>} />
        <Route path='/index' element={<Index/>} />
      </Routes> 
    </Router>
  );
}

export default App;

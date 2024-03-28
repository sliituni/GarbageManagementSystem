import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Header }  from './Components/Header';
import LoginForm from './Components/Lakmal/LoginForm';
import SignupForm from './Components/Lakmal/SignupForm';
import Home from './Components/Lakmal/Home';
import UserProfile from './Components/Lakmal/UserProfile';
import AddGarbageReq from './Components/Binguni/AddGarbageReq';
import GoogleMapContainer from './Components/Binguni/GoogleMapContainer';
import Landing from './Components/Lakmal/Landing';



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/header' element={<Header/>} />
        <Route path='/' element={<LoginForm/>} />
        <Route path='/signup' element={<SignupForm/>} />
        <Route path='/landing' element={<Landing/>} />
        <Route path='/home' element={<Home/>}/>
        <Route path='/profile' element={<UserProfile/>} />
        <Route path='/addGarbageRequest' element={<AddGarbageReq/>}/>
        <Route path='/GoogleMapContainer' element={<GoogleMapContainer/>}/>

      </Routes> 
    </Router>
  );
}

export default App;

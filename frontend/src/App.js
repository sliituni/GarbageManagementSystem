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
import AddCSItem from './Components/Kavindu/AddCSItem';
import DisplayCS from './Components/Kavindu/DisplayCS';
import DisplayCSUserP from './Components/Kavindu/DisplayCSUserP';
import EditCSItem from './Components/Kavindu/EditCSItem';
import { PHeader } from './Components/PHeader';
import Notification from './Components/Lakmal/Notification';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/header' element={<Header/>} />
        <Route path='/pheader' element={<PHeader/>} />
        <Route path='/' element={<LoginForm/>} />
        <Route path='/signup' element={<SignupForm/>} />
        <Route path='/landing' element={<Landing/>} />
        <Route path='/home' element={<Home/>}/>
        <Route path='/profile' element={<UserProfile/>}/>
        <Route path='/Notification' element={<Notification/>}/>

        <Route path='/addGarbageRequest' element={<AddGarbageReq/>}/>
        <Route path='/GoogleMapContainer' element={<GoogleMapContainer/>}/>

        {/* kavindu */}
        <Route path="cs/main/addItems" element={<AddCSItem />} />
        <Route path="cs/main" element={<DisplayCS />} />
        <Route path="cs/userp" element={<DisplayCSUserP />} />
        <Route path="cs/userp/edit/:id" element={<EditCSItem />} />

      </Routes> 
    </Router>
  );
}

export default App;

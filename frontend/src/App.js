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
import Addana from './Components/Thimalka/Addana';
import ViewDetails from './Components/Thimalka/ViewDetails';
import EditDetails from './Components/Thimalka/EditDetails';
import Piechart from './Components/Thimalka/Piechart';
import Analiticsdash from './Components/Thimalka/Analiticsdash';
import AllGarbageRequests from './Components/Binguni/AllGarbageRequests';
import AddCSItem from './Components/Kavindu/AddCSItem';
import DisplayCS from './Components/Kavindu/DisplayCS';
import DisplayCSUserP from './Components/Kavindu/DisplayCSUserP';
import EditCSItem from './Components/Kavindu/EditCSItem';
import { PHeader } from './Components/PHeader';
import Notification from './Components/Lakmal/Notification';
import Users from './Components/Thimalka/Users';
import AddMonthlyDetails from './Components/Thimalka/AddMonthlyDetails';
import MonthlyDetailsChart from './Components/Thimalka/MonthlyDetailsChart';
import MonthlyDetailsTable from './Components/Thimalka/MonthlyDetailsTable';
import ScheduleUpdate from './Components/Binguni/ScheduleUpdate';
import AllContactDetails from './Components/Lakmal/AllContactDetails';
import AdminLogin from './Components/Thimalka/AdminLogin';
import GarbageAnalitics from './Components/Lakmal/GarbageAnalitics';

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
        <Route path='/AllContact' element={<AllContactDetails/>} />
        <Route path='/Allanalitics' element={<GarbageAnalitics/>} />

        <Route path='/addGarbageRequest' element={<AddGarbageReq/>}/>
        <Route path='/GoogleMapContainer' element={<GoogleMapContainer/>}/>

        <Route path='/addanalitics' element={<Addana/>} />
        <Route path='/viewanalitics' element={<ViewDetails/>}/>
        {/* <Route path='/updateanalitics' element={<EditDetails/>}/> */}
        <Route path='/updateanalitics/:id' element={<EditDetails />} />
        <Route path='/pie' element={<Piechart/>}/>
        <Route path='/admindash' element={<Analiticsdash/>}/>
        <Route path='/usermng' element={<Users/>}/>
        <Route path='/addmonthlyd' element={<AddMonthlyDetails/>}/>
        <Route path='/mchart' element={<MonthlyDetailsChart/>}/>
        <Route path='/mdtable' element={<MonthlyDetailsTable/>}/>
        <Route path='/admin' element={<AdminLogin/>}/>

        <Route path='/gbReq' element={<AllGarbageRequests/>}/>
        <Route path='/scheduleUpdate' element={<ScheduleUpdate/>} />



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

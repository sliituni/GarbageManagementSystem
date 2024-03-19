import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Header }  from './Components/Header';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/header' element={<Header/>} />
      </Routes>
    </Router>
  );
}

export default App;

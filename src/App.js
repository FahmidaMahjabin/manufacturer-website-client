
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/HomePage/Home';
import DashBoard from "./Components/DashBoard/DashBoard";
import Purchase from './Components/Purchase/Purchase';
import Navbar from './Components/HomePage/Navbar/Navbar';

function App() {

  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/purchase" element={<Purchase></Purchase>}></Route>
        <Route path="/dashBoard" element={<DashBoard></DashBoard>}></Route>
      </Routes>

    </div>

  );
}

export default App;

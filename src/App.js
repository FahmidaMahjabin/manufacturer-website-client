
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/HomePage/Home';
import DashBoard from "./Components/DashBoard/DashBoard";
import Purchase from './Components/Purchase/Purchase';
import Navbar from './Components/HomePage/Navbar/Navbar';
import MyOrders from "./Components/MyOrders/MyOrders";
import AddAReview from "./Components/AddAReview/AddAReview";
import MyProfile from "./Components/MyProfile/MyProfile";
import LogIn from './Components/LogIn/LogIn';
import Register from './Components/Register/Register';
import RequireAuth from './Components/LogIn/RequireAuth';
import Blog from './Components/Blog/Blog';
import MakeAdmin from "./Components/MakeAdmin/MakeAdmin";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {

  return (
    
    <div>
      <ToastContainer />
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>

        <Route path="/purchase/:id" element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        }></Route>
        <Route path="/dashBoard" element={
          // <RequireAuth>
            <DashBoard></DashBoard>
          // </RequireAuth>
        }>
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path="addAReview" element={<AddAReview></AddAReview>}></Route>
          <Route path="myProfile" element={<MyProfile></MyProfile>}></Route>
          {/* for admin */}
          <Route path="makeAdmin" element={<MakeAdmin></MakeAdmin>}></Route>
          <Route path="myProfile" element={<MyProfile></MyProfile>}></Route>
          <Route path="myProfile" element={<MyProfile></MyProfile>}></Route>
          <Route path="myProfile" element={<MyProfile></MyProfile>}></Route>
        </Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/logIn" element={<LogIn></LogIn>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        {/* <Route path="/dashBoard/myOrders" element={<MyOrders></MyOrders>}></Route>
        <Route path="/dashBoard/addAReview" element={<AddAReview></AddAReview>}></Route>
        <Route path="/dashBoard/myProfile" element={<MyProfile></MyProfile>}></Route> */}
      </Routes>

    </div>

  );
}

export default App;

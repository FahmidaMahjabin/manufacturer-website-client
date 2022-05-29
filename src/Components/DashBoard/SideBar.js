import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../init';
import UseAdmin from '../LogIn/UseAdmin';

const SideBar = () => {
    const [user] = useAuthState(auth);
    const admin = UseAdmin(user);
    return (
        <div className="drawer drawer-mobile">
            <input id="sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* {<!-- Page content here -->} */}
                <Outlet></Outlet>
                

            </div>
            <div className="drawer-side">
                <label for="sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content bg-green-100">
                    {/* <!-- Sidebar content here --> */}
                    {!admin &&<Link className='hover:bg-green-400 p-4 my-2 rounded-md font-bold' to = "/dashBoard">My Orders</Link>}
                    {!admin &&<Link className='hover:bg-green-400 p-4 my-2 rounded-md font-bold' to = "/dashBoard/addAReview">Add A Review</Link>}
                    {admin &&<Link className='hover:bg-green-400 p-4 my-2 rounded-md font-bold' to = "/dashBoard/myProfile">My Profile</Link>}
                    {/* for admin */}
                    
                    {admin && <Link className='hover:bg-green-400 p-4 my-2 rounded-md font-bold' to = "/dashBoard/makeAdmin">Make Admin</Link>}
                    {admin && <Link className='hover:bg-green-400 p-4 my-2 rounded-md font-bold' to = "/dashBoard/manageProduct">Manage Product</Link>}
                    {admin && <Link className='hover:bg-green-400 p-4 my-2 rounded-md font-bold' to = "/dashBoard/addAProduct">Add A Product</Link>}
                    {admin && <Link className='hover:bg-green-400 p-4 my-2 rounded-md font-bold' to = "/dashBoard/manageAllOrders">Manage All Orders</Link>}
                </ul>

            </div>
        </div>
    );
};

export default SideBar;
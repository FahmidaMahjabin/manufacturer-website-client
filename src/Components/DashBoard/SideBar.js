import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const SideBar = () => {
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
                    <Link className='hover:bg-green-400 p-4 my-2 rounded-md font-bold' to = "/dashBoard">My Orders</Link>
                    <Link className='hover:bg-green-400 p-4 my-2 rounded-md font-bold' to = "/dashBoard/addAReview">Add A Review</Link>
                    <Link className='hover:bg-green-400 p-4 my-2 rounded-md font-bold' to = "/dashBoard/myProfile">My Profile</Link>
                </ul>

            </div>
        </div>
    );
};

export default SideBar;
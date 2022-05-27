import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../../init';

const Navbar = () => {
    const [user] = useAuthState(auth);
    console.log("user:", user)
    return (
        <div className="navbar bg-base-100 bg-primary">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabindex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/" >Home</Link></li>
                        <li><Link to="/purchase" >Purchase</Link></li>
                        {user ?
                            <li tabindex="0">
                                <Link to="/dashBoard" className="justify-between">
                                    DashBoard
                                    {/* <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg> */}
                                </Link>
                                {/* <ul className="p-2">
                                    <li><Link to="/myOrders" >My Orders</Link></li>
                                    <li><Link to="/addAReview" >Add A Review</Link></li>
                                    <li><Link to="/myProfile" >My Profile</Link></li>
                                </ul> */}
                            </li>
                            :
                            <div className="navbar-end">
                                <Link to="/logOut" className="btn">Log In</Link>
                            </div>
                        }


                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">Computer Parts Manufactur </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/purchase">Purchase</Link></li>

                    {user ?
                        <li tabindex="0">
                            <Link to="/dashBoard" className="justify-between">
                                DashBoard
                                {/* <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg> */}
                            </Link>
                            {/* <ul className="p-2">
                                <li><Link to="/myOrders" >My Orders</Link></li>
                                <li><Link to="/addAReview" >Add A Review</Link></li>
                                <li><Link to="/myProfile" >My Profile</Link></li>
                            </ul> */}
                        </li>
                        :
                        <></>
                    }

                </ul>
            </div>
            {
                user ?
                    <div className="navbar-end">
                        {/* avatar */}
                        <div class="avatar">
                            <div class="w-16 rounded-full">
                                <img src={user?.photoURL} />
                            </div>
                        </div>
                        <div >
                            <button onClick={() => signOut(auth)} className="btn">Log Out</button>
                        </div>

                        <label tabindex="1" className="btn btn-ghost lg:hidden" for = "sidebar">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>

                    </div>
                    :
                    <div >
                        <NavLink to="/logIn" onClick={() => signOut(auth)} className="btn">Log In</NavLink>
                    </div>

            }

        </div>
    );
};

export default Navbar;
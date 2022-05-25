import React, { useState } from 'react';
import login from "../../images/login.webp";
import {useSignInWithEmailAndPassword, useSignInWithGoogle} from "react-firebase-hooks/auth"
import auth from '../../init';
const LogIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    // login using email password
    // step1:get email and password from email and password field when blur and set it to start
    // pass that email, password to the signInWithEmailPassword function when click to submite
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [
        signInWithEmailAndPassword
      ] = useSignInWithEmailAndPassword(auth);
    if (user){
        console.log("user:", user)
    }
    return (
        <div className="hero min-h-screen bg-base-200 bg-secondary">

            <div className="hero-content flex-col  items-stretch justify-start lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <img src={login}></img>
                </div>
                <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" required onBlur={(event) => setEmail(event.target.value)} placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text" >Password</span>
                            </label>
                            <input type="password" required placeholder="password" onBlur={(event) => setPassword(event.target.value)} className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type = "button" className="btn btn-primary" onClick={() => signInWithEmailAndPassword(email, password)}>Login</button>
                        </div>
                        {/* divider */}
                        <div className='divider'>OR</div>
                        <div className='btn btn-outline btn-primary' onClick={() => signInWithGoogle()}>LogIn with Google</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;
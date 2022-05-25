import React, { useState } from 'react';
import login from "../../images/login.webp";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth"
import auth from '../../init';
import { useForm } from "react-hook-form";
const LogIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    // login using email password
    // step1:get email and password from email and password field when blur and set it to start
    // pass that email, password to the signInWithEmailPassword function when click to submite
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [
    //     signInWithEmailAndPassword
    // ] = useSignInWithEmailAndPassword(auth);
    if (user) {
        console.log("user:", user)
    }
    
    // onsubmit for login
    const onSubmit = (data) => {
        console.log("data:", data)

    }
    return (
        <div className="hero min-h-screen bg-base-200 bg-secondary">

            <div className="hero-content flex-col  items-stretch justify-start lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <img src={login}></img>
                </div>
                <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        {/* form hook starts */}
                        
                        {/* form hook ends */}
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "email is required"
                                    },
                                    pattern: {
                                        value: /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
                                        message: 'email is not correct' // JS only: <p>error message</p> TS only support string
                                    }
                                })} />

                                {/* error message */}
                                {errors.email?.type === 'required' && <span className='text-red-700'>email  is required</span>}
                                {errors.email?.type === 'pattern' && <span className='text-red-700'>email is not corret</span>}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text" >Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "password is required"
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'character should be more than 6' // JS only: <p>error message</p> TS only support string
                                    }
                                })} />
                                {/* error message of password */}
                                {errors.password?.type === 'required' && <span className='text-red-700'>password is needed</span>}
                                {errors.password?.type === 'minLength' && <span className='text-red-700'>character should be more than 6</span>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary" >Login</button>
                            </div>
                        </form>
                        {/* divider */}
                        <div className='divider'>OR</div>
                        <div className='btn btn-outline btn-primary' onClick={() => signInWithGoogle() } >LogIn with Google</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;
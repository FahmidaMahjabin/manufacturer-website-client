import React, { useState } from 'react';
import login from "../../images/login.webp";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth"
import auth from '../../init';
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from 'react-router-dom';
import UseToken from '../../Hooks/UseToken';
const LogIn = () => {
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from.pathname || "/";
    const navigation = useNavigate();

    // login using email password
    // step1:get email and password from email and password field when blur and set it to start
    // pass that email, password to the signInWithEmailPassword function when click to submite
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    
    const [token] = UseToken(user || guser);
    if (token){
        
        navigate(from, { replace: true });
    }
    
    
    // onsubmit for login
    const onSubmit = (data) => {
        console.log("data:", data);
        signInWithEmailAndPassword(data.email, data.password)

    };
    
    const gotoRegisterPage = () =>{
        navigation("/register")

    }
    if (loading || gloading) {
        return (
            <div className='text-center'>
                <svg role="status" class="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
            </div>
        )

    }
    // function gotoRegisterPage
    
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
                                
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary" >Login</button>
                            </div>
                            <p>New here?
                                    <button className='text-green-600 btn btn-link d-inline' onClick = {gotoRegisterPage}
                                    >Create new account</button>
                            </p>

                            {/* error for login */}
                            {error || gerror ?
                                <p className='text-red-500'>{error?.message || gerror.message}</p> : ""
                            }
                        </form>
                        {/* divider */}
                        <div className='divider'>OR</div>
                        <div className='btn btn-outline btn-primary' onClick={() => signInWithGoogle()} >LogIn with Google</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;
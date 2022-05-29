import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../init';

const RequireAuth = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    // console.log("location:", location);
    if (loading){
        return <p>....loading</p>
    }
    if (!user){
        return <Navigate to = "/logIn" state = {{from: location}} replace></Navigate>
    }
    return (
        children
    );
};

export default RequireAuth;
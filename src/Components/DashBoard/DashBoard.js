import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../init';
import SideBar from './SideBar';

const DashBoard = () => {
    const [user, loading] = useAuthState(auth);
    if(loading){
        return <p>Loading..</p>
    }

    return (
        <div>
            <SideBar></SideBar>
        </div>
    );
};

export default DashBoard;
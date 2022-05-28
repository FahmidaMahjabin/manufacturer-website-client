import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../init';
import ProfileForm from './ProfileForm';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const {displayName, photoURL, email} = user;
    const [myProfile, setMyProfile] = useState({});
    useEffect(()=>{
        fetch('https://damp-shelf-41309.herokuapp.com/myProfile')
        .then(res => res.json())
        .then(data => setMyProfile(data[0]))
    },
    [])
    console.log("myProfile:",myProfile )
    return (
        <div>
            <h1 className='text-5xl text-center my-8'>My Profile</h1>
            <div class="card card-side bg-base-100 shadow-xl bg-gray-100">
                <figure><img src={photoURL} alt="propic"/></figure>
                <div class="card-body">
                    <h2 class="card-title">{displayName}</h2>
                    <div>
                        <span className='font-bold'>Email:</span>{email}
                        {(myProfile.location)?(<p><span className='font-bold'>Location:</span>{myProfile?.location}</p> ) : ""}
                        {myProfile.education?(<p><span className='font-bold'>Education:</span>{myProfile?.education}</p> ) : ""}
                        {myProfile.phoneNo?(<p><span className='font-bold'>ContactNo:</span>{myProfile?.phoneNo}</p> ) : ""}
                        {myProfile.socialProfile?(<p><span className='font-bold'>Social Profile:</span>{myProfile?.socialProfile}</p>)  : ""}

                    </div>
                    
                </div>
            </div>
            <ProfileForm></ProfileForm>
        </div>
    );
};

export default MyProfile;
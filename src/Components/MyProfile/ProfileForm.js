import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const ProfileForm = () => {
    const { register, handleSubmit } = useForm();
   
    const onSubmit = data =>{
        console.log(data);
        fetch('https://damp-shelf-41309.herokuapp.com/myProfile', {
            method: 'PUT',
            headers:{
                'content-type': "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => console.log(result))

    } 
    return (
        <form onSubmit={handleSubmit(onSubmit)} className='mx-auto my-5 bg-red-200 p-4 rounded-sm w-1/2 '>
            <div className='form-control'>
                <label for="education" className='font-bold'>Eduaction:</label>
                <input name="education" {...register("education")} type="text" placeholder="Institution" class="input input-bordered input-primary w-full max-w-xs " />
            </div>

            <div className='form-control'>
                <label for="location" className='font-bold'>location:</label>
                <input name="location" {...register("location")} type="text" placeholder="location" class="input input-bordered input-primary w-full max-w-xs" />
            </div>

            <div className='form-control'>
                <label for="phoneNo" className='font-bold'>phoneNo:</label>
                <input name="phoneNo" {...register("phoneNo")} type="number" placeholder="phoneNo" class="input input-bordered input-primary w-full max-w-xs" />
            </div>

            <div className='form-control'>
                <label for="socialProfile" className='font-bold'>socialProfile:</label>
                <input name="socialProfile" {...register("socialProfile")} type="text" placeholder="linkedIn/facebook" class="input input-bordered input-primary w-full max-w-xs" />
            </div>
            <button className='btn btn-primary btn-block my-6 w-1/2'>Submit</button>
        </form>
    );
};

export default ProfileForm;
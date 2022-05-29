import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const MakeAdmin = () => {
    const [users, setUsers] = useState([]);
    const makeAdmin = (email) =>{
        fetch(`https://damp-shelf-41309.herokuapp.com/user/admin/${email}`, {
            method: "PUT",
        })
        .then(res =>{
            if(res.status === 403){
                toast.error("Can't make admin")
            }

        } )
        .then(data => {console.log("data from makeAdmin:", data);
    toast.success("Successfully make admin")})
    }
    useEffect(
        ()=>{
            axios.get("https://damp-shelf-41309.herokuapp.com/user")
            .then(data => setUsers(data.data))
        },
        []
    )
    return (
        <div>
            <h1 className='text-3xl text-red-600 text-center'>All Users</h1>
            {/* table */}
            <div className='my-4'>
                <table class="table table-normal w-full">
                    
                    <thead>
                        <tr>
                            
                            <th>No.</th>
                            <th>email</th>
                            <th>Make Admin</th>
                            <th>Cancel Admin</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {users?.map((user, index)  =><tr
                        key = {user._id}> 
                            <th>{index + 1}</th>
                            <td>{user.email}</td>
                            {(user?.role !== "admin")? <td><button onClick={() =>makeAdmin(user.email)} className='btn btn-secondary'>Make Admin</button></td> : <td></td>}
                            <td><button className='btn btn-primary'>Cancel Admin</button></td>
                        </tr>)}
                        
                        
                      
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;
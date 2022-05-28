import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../init';

const MyOrders = () => {
    const [user, loading] = useAuthState(auth)
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();
    useEffect(
        () => {
            if (user) {
                fetch(`https://damp-shelf-41309.herokuapp.com/purchase?buyer=${user.email}`,
                {
                    method: "GET",
                    headers: {
                        "authorization": `Bearer ${localStorage.getItem("accessToken")}`
                    }
                })
                    .then(res =>{
                        if (res.status === 401 || res.status === 403){
                            navigate("/")

                        }
                        return res.json()

                    } )
                    .then(data => setOrders(data))
            }


        },
        [user]
    )
    return (
        <div>
            <h1 className='text-3xl text-red-600 text-center'>My Orders</h1>
            {/* table */}
            <div className='my-4'>
                <table class="table table-normal w-full">
                    
                    <thead>
                        <tr>
                            
                            <th>No.</th>
                            <th>email</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Payment</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders?.map((order, index)  =><tr
                        key = {order._id}> 
                            <th>{index + 1}</th>
                            <td>{order.buyer}</td>
                            <td>{order.purchedQuantity}</td>
                            <td>{order.price}</td>
                            <td><button className='btn btn-secondary'>Payment</button></td>
                            <td><button className='btn btn-primary'>Cancel</button></td>
                        </tr>)}
                        
                        
                      
                    </tbody>
                </table>
            </div>
        </div>


    );
};

export default MyOrders;
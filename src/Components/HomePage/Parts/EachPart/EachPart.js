import React from 'react';
import { useNavigate } from 'react-router-dom';

const EachPart = ({part}) => {
    //function = gotoPurchasePage  ("buy Now" button click korle purchase page e jabe)
    const navigate = useNavigate();
    const gotoPurchasePage = (id) =>{
        navigate(`/purchase/${id}`)

    }
    const {_id, balance, picture, name, about, quantity, minimumQuantity} = part;
    return (
        <div className="card bg-secondary bg-base-100 shadow-xl">
            <figure><img src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>
                    <h5 className='font-bold'>Price: {balance}</h5>
                    <br></br>
                    <h5 className='font-bold'>Description: </h5>{about}
                    <br></br>
                    <h5 className='font-bold'>Quantity: {quantity}</h5>
                    <br></br>
                    <h5 className='font-bold'>Minimum purchase Quantity: {minimumQuantity}</h5>
                </p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary" onClick={() => gotoPurchasePage(_id)}>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default EachPart;
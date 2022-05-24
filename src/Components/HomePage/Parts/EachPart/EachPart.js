import React from 'react';

const EachPart = ({part}) => {
    const {balance, picture, name, about, quantity} = part;
    return (
        <div className="card bg-secondary bg-base-100 shadow-xl">
            <figure><img src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>
                    Price: {balance}
                    <br></br>
                    Description: {about}
                    <br></br>
                    Quantity: {quantity}
                </p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default EachPart;
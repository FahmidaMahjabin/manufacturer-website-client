import React from 'react';

const PurchaseItem = ({item}) => {
    const {name, quantity, minimumQuantity, picture, balance} = item;
    return (
        <div class="card lg:card-side bg-base-100 shadow-xl w-1/2 mx-auto my-16">
            <figure><img src={picture} alt="Album"/></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <div>
                    <h5>Price: {balance}</h5>
                    <h5>Minimum Quantity: {minimumQuantity}</h5>
                    <h5>Available Quantity: {quantity}</h5>
                </div>
                {/* <div class="card-actions justify-end">
                    <button class="btn btn-primary">Listen</button>
                </div> */}
            </div>
        </div>
    );
};

export default PurchaseItem;
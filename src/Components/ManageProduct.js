import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

const ManageProduct = () => {
    const [products, setProducts] = useState([]);

    useEffect(
        () => {
            fetch("https://damp-shelf-41309.herokuapp.com/manufacturerParts",
                { method: "GET" }
            )
                .then(res => res.json())
                .then(data => setProducts(data))
        },
        []

    )
    const deleteProduct = (id) =>{
        fetch(`https://damp-shelf-41309.herokuapp.com/manufacturerParts/${id}`,
                { method: "DELETE",
                headers:{
                "content-type": "application/json"
            } }
            )
            .then(res => res.json())
            .then(data => setProducts(data))

    }

    console.log("products:", products)
    return (

        products?.map(product =>
        (<div key={product._id}

            className='flex p-4 m-4 border-2'>
            <div className='flex-1'>
                <div className="avatar ">
                    <div className="w-16 h-16 rounded-full">
                        <img src={product.picture} />
                    </div>
                </div>
            </div>
            <div className='flex-1'>
                {product.name}
            </div>
            <div className='flex-1'>
                <button onClick={() =>{deleteProduct(product._id)}} className="btn btn-primary ">Delete</button>
            </div>

        </div>



        )
        )

    );
};

export default ManageProduct;
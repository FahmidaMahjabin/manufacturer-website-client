import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PurchaseForm from './PurchaseForm';
import PurchaseItem from './PurchaseItem';

const Purchase = () => {
    const {id} = useParams();
    // function = get the item from database and show in browser
    // step1:
    const [item, setItem] = useState({});
    useEffect(
        () =>{
            axios.get(`http://localhost:5000/manufacturerParts/${id}`)
            .then(result => setItem(result.data))

        },
        [id]
    )
    
    return (
        <div className='mx-auto'>
            <PurchaseItem item = {item}></PurchaseItem>
            <PurchaseForm item = {item}></PurchaseForm>
        </div>
    );
};

export default Purchase;
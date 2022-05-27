import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
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
        []
    )
    // const {data: item, loading, refetch} = useQuery('item', () => fetch(`http://localhost:5000/manufacturerParts/${id}`)
    // .then(res => res.json()))
    // if(loading){
    //     return <p>Loading......</p>
    // }
    
    return (
        <div className='mx-auto'>
            <PurchaseItem item = {item}></PurchaseItem>
            <PurchaseForm item = {item} ></PurchaseForm>
        </div>
    );
};

export default Purchase;
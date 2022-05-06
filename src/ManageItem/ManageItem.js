import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ManageItem.css';

const ManageItem = () => {
    const {_id} = useParams();
    const [item, setItem] = useState({});

    const { name, picture, price, quantity, supplierName, desc }=item;

    useEffect(()=>{
        const url = `http://localhost:5000/items/${_id}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setItem(data))
    },[_id]);
    return (
        <div className='my-md-5'>
            <h2 className='mb-3'>Manage {name}</h2>
            <div className='row m-0 justify-content-center p-2 p-md-0'>
                <div className='col-12 col-md-4 bg-light p-2 m-2 border rounded'>
                    <img src={picture} alt="" className='item-img'/>
                    <h3>product name: {name}</h3>
                    <p>product id: {item._id}</p>
                    <p>price: {price}</p>
                    <p>quantity: {quantity}</p>
                    <p>supplierName: {supplierName}</p>
                    <button>Delivered</button>
                </div>
                <div className='col-12 col-md-3 bg-light p-2 m-2 border rounded d-flex flex-column justify-content-center align-items-center'>
                    <form className='mt-3'>
                        <label>Restock Quantity</label><br />
                        <input className='my-1' type="number" name="restock" id="" placeholder='Input Restock Quantity'/><br />
                        <input type="submit" value="RESTOCK" />
                    </form>
                </div>
            </div>
                <button className='my-3 mt-md-3'>Manage Inventories</button>
        </div>
    );
};

export default ManageItem;
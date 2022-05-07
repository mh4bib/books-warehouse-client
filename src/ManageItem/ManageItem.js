import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ManageItem.css';

const ManageItem = () => {
    const {_id} = useParams();
    const [item, setItem] = useState({});
    const [update, setUpdate] = useState(true);

    const { name, picture, price, quantity, supplierName, desc }=item;

    useEffect(()=>{
        const url = `http://localhost:5000/items/${_id}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setItem(data))
    },[update, _id]);

    const handleDeliveredButton = id =>{
        const newQuantity = quantity - 1;
        let UpdatedQuantity = {newQuantity};
        const url = `http://localhost:5000/items/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(UpdatedQuantity)
        })
        .then(res=>res.json())
        .then(data=>setUpdate(!update))
    }
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
                    <button onClick={()=>handleDeliveredButton(item._id)}>DELIVERED</button>
                </div>
                <div className='col-12 col-md-3 bg-light p-2 m-2 border rounded d-flex flex-column justify-content-center align-items-center'>
                    <form className='mt-3'>
                        <label><h5>Restock Quantity</h5></label><br />
                        <input className='my-1' type="number" name="restock" id="" placeholder='Input Restock Quantity'/><br />
                        <input type="submit" value="RESTOCK" />
                    </form>
                </div>
            </div>
            <Link to={'/manage-inventories'}><button className='mt-3'>Manage Inventories</button></Link>
        </div>
    );
};

export default ManageItem;
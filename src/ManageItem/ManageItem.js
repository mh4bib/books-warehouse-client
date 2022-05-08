import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ManageItem.css';

const ManageItem = () => {
    const { _id } = useParams();
    const [item, setItem] = useState({});
    const [update, setUpdate] = useState(true);
    const restockRef = useRef(0);

    const { name, picture, price, quantity, supplierName, desc } = item;

    useEffect(() => {
        const url = `https://calm-sea-17054.herokuapp.com/items/${_id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [update, _id]);

    const handleUpdateButton = (id, isAdd) => {
        let UpdatedQuantity;
        if (isAdd) {
            const restockQuantityStr = restockRef.current.value;
            const restockQuantity = parseInt(restockQuantityStr);
            const newQuantity = quantity + restockQuantity;
            UpdatedQuantity = { newQuantity };
        }
        else {
            const newQuantity = quantity - 1;
            UpdatedQuantity = { newQuantity };
        }
        const url = `https://calm-sea-17054.herokuapp.com/items/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(UpdatedQuantity)
        })
            .then(res => res.json())
            .then(data => setUpdate(!update))
    }
    return (
        <div className='my-md-5'>
            <h2  style={{color:'#b98632'}} className='mb-3'>Manage {name}</h2>
            <div className='row m-0 justify-content-center p-2 p-md-0'>
                <div className='col-12 col-md-4 p-2 m-2 border rounded my-form'>
                    <img src={picture} alt="" className='item-img' />
                    <h3>product name: {name}</h3>
                    <p>product id: {item._id}</p>
                    <p>price: {price}</p>
                    <p>quantity: {quantity}</p>
                    <p>supplierName: {supplierName}</p>
                    <button className='my-small-button' onClick={() => handleUpdateButton(item._id, false)}>DELIVERED</button>
                </div>
                <div className='col-12 col-md-3 p-2 m-2 border rounded d-flex flex-column justify-content-center align-items-center my-form'>
                    <form className='mt-3'>
                        <label><h5>Restock Quantity</h5></label><br />
                        <input className='my-1' type="number" ref={restockRef} id="" placeholder='Input Restock Quantity' /><br />
                        <button className='my-small-button' type="button" onClick={() => handleUpdateButton(item._id, true)}>RESTOCK</button>
                    </form>
                </div>
            </div>
            <Link to={'/manage-inventories'}><button className='mt-3  border-0 px-3 py-2 rounded text-white bg-warning'>Manage Inventories</button></Link>
        </div>
    );
};

export default ManageItem;
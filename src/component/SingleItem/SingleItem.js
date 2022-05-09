import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SingleItem.css';


const SingleItem = (item) => {
    const { _id, name, picture, price, quantity, supplierName, desc } = item.item;

    const navigate = useNavigate();

    const handleManageItem = _id =>{
        navigate(`/manage-item/${_id}`)
    }
    return (
        <div className='my-card'>
            <img className='w-100 px-5' src={picture} alt="" />
            <h2>{name}</h2>
            <p><small>{desc.slice(0, 130)}...</small></p>
            <div className='row'>
                <p className='col-6'>Price: ${price}</p>
                <p className='col-6'>quantity: {quantity}</p>
            </div>
            <p>Supplier: {supplierName}</p>
            <button className='mx-auto mb-1 my-small-button' onClick={()=>handleManageItem(_id)}>manage</button>
        </div>
    );
};

export default SingleItem;
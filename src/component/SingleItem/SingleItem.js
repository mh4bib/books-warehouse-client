import React from 'react';


const SingleItem = (item) => {
    const { _id, name, picture, price, quantity, supplierName, desc } = item.item;
    console.log(item.item);
    return (
        <div className='card'>
            <img className='w-100 px-5' src={picture} alt="" />
            <h2>{name}</h2>
            <p><small>{desc.slice(0, 130)}...</small></p>
            <div className='row'>
                <p className='col-6'>Price: ${price}</p>
                <p className='col-6'>quantity: {quantity}</p>
            </div>
            <p>Supplier: {supplierName}</p>
            <button className='w-25 mx-auto'>button</button>
        </div>
    );
};

export default SingleItem;
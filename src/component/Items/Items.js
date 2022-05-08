import React, { useEffect, useState } from 'react';
import './Items.css';
// import { CardGroup } from 'react-bootstrap';
import CardGroup from 'react-bootstrap/CardGroup';
import SingleItem from '../SingleItem/SingleItem';
import useAllItems from '../hooks/useAllItems';
import { Link } from 'react-router-dom';

const Items = () => {
    const {items} = useAllItems();
    
    return (
        <div className='container my-5'>
            <h2 className='my-5' style={{color:'#b98632'}}>ITEMS</h2>
            <div className='card-container mx-auto'>
                {
                    items.slice(0,6).map(item => <SingleItem
                    key={item._id}
                    item={item}
                    ></SingleItem>)
                }
            </div>
            <Link to={'/manage-inventories'}><button className='mt-3  border-0 px-3 py-2 rounded text-white bg-warning'>Manage Inventories</button></Link>
        </div>
    );
};

export default Items;
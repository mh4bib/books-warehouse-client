import React, { useEffect, useState } from 'react';
import './Items.css';
// import { CardGroup } from 'react-bootstrap';
import CardGroup from 'react-bootstrap/CardGroup';
import SingleItem from '../SingleItem/SingleItem';

const Items = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div className='container my-4'>
            <h2>Items</h2>
            <div className='card-container mx-auto'>
                {
                    items.slice(0,6).map(item => <SingleItem
                    key={item._id}
                    item={item}
                    ></SingleItem>)
                }
            </div>
            <button className='mt-3'>Manage Inventories</button>
        </div>
    );
};

export default Items;
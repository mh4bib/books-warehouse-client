import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddItem = () => {
    const [user] = useAuthState(auth);
    var email = user?.email;
    
    const handleAddItem = (event) =>{
        event.preventDefault();
        const name = event.target.itemName.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const supplierName = event.target.supplierName.value;
        const picture = event.target.url.value;
        const desc = event.target.description.value;
        const item = {name, picture, price, quantity, supplierName, desc, email};
        
        const url = 'http://localhost:5000/items';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(item)
        })
        .then(res=>res.json())
        .then(result=>{
            console.log(result);
        })
        
    }
    return (
        <div className='my-form login mx-auto my-3 p-3 p-md-5 rounded'>
            <h2>Add New Item</h2>
            <form onSubmit={handleAddItem} className='text-start'>
                <label>Item Name</label><br />
                <input className='w-100 mb-2' type="text" name="itemName" id="" placeholder='Item Name' /><br />
                <label>Price</label><br />
                <input className='w-100 mb-2' type="number" name="price" id="" placeholder='Individual Price' /><br />
                <label>Quantity</label><br />
                <input className='w-100 mb-2' type="number" name="quantity" id="" placeholder='Quantity' /><br />
                <label>Supplier Name</label><br />
                <input className='w-100 mb-2' type="text" name="supplierName" id="" placeholder='Supplier Name' /><br />
                <label>Image URL</label><br />
                <input className='w-100 mb-2' type="text" name="url" id="" placeholder='URL' /><br />
                <label>Description</label><br />
                <textarea name="description" id="" cols="40" rows="3"></textarea>
                <input className='mb-2 my-small-button' type="submit" value="ADD" />
            </form>
        </div>
    );
};

export default AddItem;
import React from 'react';

const AddItem = () => {
    return (
        <div className='bg-light login mx-auto my-3 p-3 p-md-5 rounded'>
            <h2>Add New Item</h2>
            <form className='text-start'>
                <label>Item Name</label><br />
                <input className='w-100 mb-2' type="text" name="ItemName" id="" placeholder='Item Name' /><br />
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
                <input className='mb-2' type="submit" value="ADD" />
            </form>
        </div>
    );
};

export default AddItem;
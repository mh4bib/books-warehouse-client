import React from 'react';
import { Table } from 'react-bootstrap';
import useAllItems from '../hooks/useAllItems';

const MyItem = () => {
    const {items} = useAllItems();
    return (
            <div className='container'>
                <h2 className='my-3'>My Items</h2>
            <Table striped bordered hover>
  <thead>
    <tr>
      <th style={{width:'200px'}}> Book Name</th>
      <th>Price</th>
      <th>Quantity</th>
      <th className='d-none d-md-block'>Supplier</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {
        items.map(item=><>
        <tr>
      <td className='text-start'><img src={item.picture} alt="" style={{width:'18px'}}/> {item.name}</td>
      <td>{item.price}</td>
      <td>{item.quantity}</td>
      <td className='d-none d-md-block' style={{paddingBottom:'14px'}}>{item.supplierName}</td>
      <td><button>Delete</button></td>
    </tr>
        </>)
    }
  </tbody>
</Table>
        </div>
    );
};

export default MyItem;
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Order from './Order';

const Orders = () => {
    const orders = useLoaderData();

    return (
        <div className='w-[96%] mx-auto'>
            <div className='font-medium text-center my-5'>
                <h1 className='text-2xl'>Total orders: {orders.length}</h1>
                <p><small>Admin page</small></p>
            </div>

            <div className="overflow-x-auto no-scrollbar">
                <table className="table table-xs">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Customer Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Address</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <Order key={order._id} order={order}></Order>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;
import React, { useContext, useEffect, useState } from 'react';
import { AuthProvider } from '../../context/AuthContext/AuthContext';
import CartTable from './CartTable';
import toast from 'react-hot-toast';

const Cart = () => {
    const { user } = useContext(AuthProvider);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => { setOrders(data); })

    }, [user?.email])

    const handleCalcelOrder = (order) => {
        const agree = window.confirm(`Are you sure, you want to delete ${order.productName}`);
        if (agree) {
            fetch(`http://localhost:5000/orders/${order._id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    toast.success(`${order.productName} - order cancel successfull`);
                })
        }
    }

    return (
        <div className='w-[96%] mx-auto'>
            <h1 className='text-xl font-bold text-center my-5'>Total Orders: {orders.length}</h1>

            <div className="overflow-x-auto no-scrollbar">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <CartTable key={order._id} order={order} handleCalcelOrder={handleCalcelOrder}></CartTable>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cart;
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const Order = ({ order }) => {
    const { customerName, email, number, address, productName, quantity, price, status } = order;
    console.log(status)
    const [approve, setApprove] = useState(false);

    const handleApprove = (id) => {
        fetch(`http://localhost:5000/orders/${order._id}`, {
            method: "PATCH",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ status: "Approved" })
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success(`${order.productName} Approved successfully`);
                    setApprove(true);
                }
            });
    }

    return (
        <tr>
            <th></th>
            <td>{productName}</td>
            <td>{quantity}</td>
            <td>${parseInt(quantity) * parseInt(price)}</td>
            <td>{customerName}</td>
            <td>{email}</td>
            <td>{number}</td>
            <td>{address}</td>
            <td>
                <button onClick={() => handleApprove(order)} className={`border  rounded px-3 py-1 border-green-800 text-green-700  hover:text-white ${(approve || status) ? 'bg-slate-300' : 'hover:bg-green-500'}`} disabled={approve || status}>
                    {
                        !approve && !status ?
                            <span>Approve</span>
                            :
                            <span>Approved</span>
                    }
                </button>
            </td>
            <td><button disabled={approve || status} className='border border-rose-800 text-red-600 rounded px-2 py-1 hover:bg-red-500 hover:text-white'>X</button></td>
        </tr>
    );
};

export default Order;
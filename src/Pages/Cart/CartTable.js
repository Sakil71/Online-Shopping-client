import React from 'react';

const CartTable = ({ order , handleCalcelOrder}) => {
    const { photo, productName, quantity, price, status, _id } = order;

    return (
        <tr>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={photo} alt="" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{productName}</div>
                        <div className="text-sm opacity-50">{_id}</div>
                    </div>
                </div>
            </td>
            <td>
                <span className="badge badge-ghost badge-sm">{quantity}</span>
            </td>
            <td>
                ${parseInt(quantity) * parseInt(price)}
            </td>
            <th>
                <div className="btn btn-ghost btn-xs cursor-default">
                    {status ?
                        <span className='text-green-700'>Approved</span>
                        :
                        <span className='text-rose-600'>Pending</span>
                    }
                </div>
            </th>
            <th>
                <button onClick={() => handleCalcelOrder(order)} className={`${status && 'hidden'} btn btn-ghost btn-xs border border-red-700 rounded`}><span className='text-rose-600'>Cancel</span></button>
            </th>
        </tr>
    );
};

export default CartTable;
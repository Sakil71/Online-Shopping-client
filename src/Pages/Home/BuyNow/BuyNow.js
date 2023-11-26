import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthProvider } from '../../../context/AuthContext/AuthContext';
import toast from 'react-hot-toast';

const BuyNow = () => {
    const { name, photo, price, _id, details } = useLoaderData();
    const { user } = useContext(AuthProvider);

    const navigate = useNavigate();


    const handleCustomerData = (event) => {
        event.preventDefault();
        const form = event.target;
        const quantity = form.quantity.value;
        const customerName = form.name.value;
        const email = form.email.value;
        const number = form.number.value;
        const address = form.address.value;
        
        const orders = {
            service: _id,
            photo,
            quantity,
            price,
            productName:name,
            customerName,
            email,
            number,
            address,
        }

        fetch('https://online-shopping-server.vercel.app/orders', {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(orders)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    form.reset();
                    toast.success(`${name} order placed successfully`);
                    navigate('/');
                }
            })
    }

    return (
        <div className='w-[96%] mx-auto my-10'>
            <h1 className=' font-medium mb-10 text-4xl'>Order Your Product</h1>
            <div className='flex flex-col md:flex-row justify-around items-center gap-10'>
                <img className='md:w-1/2 rounded' src={photo} alt="" />
                <div className='w-full font-medium'>
                    <h1 className='text-4xl'>{name}</h1>
                    <p className='font-medium'>Price: ${price}</p>
                    <p className='font-medium'>{details}</p>
                    < button className="px-10 py-1 border rounded border-red-700 mt-10" onClick={() => document.getElementById('my_modal_1').showModal()}>Buy Now</button >
                </div>
            </div>


            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_1" className="modal rounded">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{name}</h3>

                    <form onSubmit={handleCustomerData}>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input name='quantity' type="number" min="1" defaultValue={1} placeholder="How many products do you buy?" className="input input-bordered rounded w-full" required />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name='name' type="text" defaultValue={user?.displayName} placeholder="name" className="input input-bordered rounded w-full" required />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' defaultValue={user?.email} readOnly type="email" className="input input-bordered rounded w-full" required />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input name='number' type="number" placeholder='01xxxxxx' className="input input-bordered rounded w-full" required />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <input name='address' type="text" placeholder='road-no / house-no / post-office / sub-district / district' className="input input-bordered rounded w-full" required />
                        </div>

                        <div className="modal-action">

                            <button type='submit' className="px-4 py-1 bg-gray-600 rounded text-white">Submit</button>

                            <form method="dialog">
                                <button className="px-4 py-1 bg-gray-600 rounded text-red-500">Cancel</button>
                            </form>
                        </div>
                    </form>



                </div>
            </dialog>
        </div>
    );
};

export default BuyNow;
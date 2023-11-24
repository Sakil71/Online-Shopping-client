import React from 'react';
import toast from 'react-hot-toast';

const AddServices = () => {

    const handleProductsData = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const price = form.price.value;
        const details = form.details.value;

        const products = {
            name: name,
            photo: photo,
            price: price,
            details: details
        };

        fetch('http://localhost:5000/products', {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(products)
        })
            .then(res => res.json())
            .then(data => {
                if(data.acknowledged){
                    toast.success(`${name} addeded successfully`)
                    form.reset();
                }
            })
    }
    return (
        <div className="hero">
            <div className="hero-content w-3/4 mx-auto">
                <div className="card shrink-0 w-full shadow-2xl bg-base-100">
                    <form onSubmit={handleProductsData} className="card-body w-full">
                        <p><small>Admin page</small></p>
                        <h1 className='text-2xl font-medium'>Add products for your online shopping</h1>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Products Name</span>
                            </label>
                            <input name='name' type="text" placeholder="name" className="input input-bordered rounded w-full" required />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Products Photo</span>
                            </label>
                            <input name='photo' type="url" placeholder="photo" className="input input-bordered rounded w-full" required />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Products Price</span>
                            </label>
                            <input name='price' type="number" placeholder="price" className="input input-bordered rounded w-full" required />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Products Details</span>
                            </label>
                            <input name='details' type="text" placeholder="product details" className="input input-bordered rounded w-full" required />
                        </div>

                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Add</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddServices;
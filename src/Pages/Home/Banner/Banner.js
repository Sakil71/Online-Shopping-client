import React from 'react';
import BannerItems from './BannerItems';

const Banner = () => {

    const bannerImages = [
        {
            img: 'https://i.ibb.co/7zqFT29/attractive-stylish-smiling-woman-choosing-apparel-clothing-store.jpg',
            name: "World class clothes are here",
            details: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla ipsum doloribus ratione beatae possimus minima veritatis recusandae iure placeat omnis.",
            prev : 3,
            id: 1,
            next: 2
        },
        {
            img: "https://i.ibb.co/k0tYztd/young-teen-woman-sunglasses-hat.jpg",
            name: "All winter jackets & sweater",
            details: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla ipsum doloribus ratione beatae possimus minima veritatis recusandae iure placeat omnis.",
            prev : 1,
            id: 2,
            next: 3
        },
        {
            img: "https://i.ibb.co/b7Rrsnf/young-woman-pinup-style.jpg",
            name: "Beauty and fashion",
            details: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla ipsum doloribus ratione beatae possimus minima veritatis recusandae iure placeat omnis.",
            prev : 2,
            id: 3,
            next: 1
        },
    ]

    return (
        <div className="carousel w-full">

            {
                bannerImages.map(banner => <BannerItems key={banner.id} banner={banner}></BannerItems>)
            }
        </div>
    );
};

export default Banner;
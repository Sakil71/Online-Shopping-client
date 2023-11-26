import React from 'react';
import { FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer items-center p-4 bg-neutral text-neutral-content mt-32">
            <aside className="items-center grid-flow-col">
                <p>Copyright © 2023 - All right reserved by Online Shopping</p>
            </aside>
            <nav className="grid-flow-col text-2xl gap-4 md:place-self-center md:justify-self-end">
               <FaFacebook></FaFacebook>
               <FaTwitter></FaTwitter>
            </nav>
        </footer>
    );
};

export default Footer;
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Services from "../Pages/Home/Services/Services";
import Orders from "../Pages/Orders/Orders";
import Login from "../Pages/Authentication/Login/Login";
import Register from "../Pages/Authentication/Register/Register";
import PrivateRours from "./PrivateRours";
import AddServices from "../Pages/AddServices/AddServices";
import BuyNow from "../Pages/Home/BuyNow/BuyNow";
import Cart from "../Pages/Cart/Cart";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: ()=> fetch('http://localhost:5000/products'),
                element: <Home></Home>
            },
            {
                path: 'services',
                element: <Services></Services>
            },
            {
                path: 'orders',
                loader: ()=> fetch('http://localhost:5000/orders'),
                element: <PrivateRours><Orders></Orders></PrivateRours>
            },
            {
                path: 'cart',
                element: <PrivateRours><Cart></Cart></PrivateRours>
            },
            {
                path: 'add',
                element: <PrivateRours><AddServices></AddServices></PrivateRours>
            },
            {
                path: 'buy/:id',
                loader: ({params})=> fetch(`http://localhost:5000/products/${params.id}`),
                element: <PrivateRours><BuyNow></BuyNow></PrivateRours>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
        ]
    }
])
import { Navigate } from "react-router-dom"
import DefaultLayout from "../layouts/DefaultLayout"
import OutLayout from "../layouts/OutLayout"
import Baskat from "../pages/Basket"
import Delivery from "../pages/Delivery"
import Favorites from "../pages/Favorites"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Shops from "../pages/Shops"
import Stocks from "../pages/Stocks"
import ProductDetale from "../pages/ProductDetale"

const routesConfig = [
    {
        element:<DefaultLayout />,
        children:[
        ]
    },
    {
        element:<OutLayout />,
        children:[
            {
                element: <Home />,
                path: '/'
            },
            {
                element: <Baskat />,
                path: '/basket'
            },
            {
                element: <Delivery />,
                path: '/delivery'
            },
            {
                element: <Favorites />,
                path: '/favorites'
            },
            {
                element: <Login />,
                path: '/login'
            },
            {
                element: <Shops />,
                path: '/shops'
            },
            {
                element: <Stocks />,
                path: '/stocks'
            },
            {
                element: <ProductDetale />,
                path: '/productDetale/:id'
            }
        ]
    },
    // {
    //     element: <PrivateRoutes />,  // Protect this route with PrivateRoutes
    //     children: [
    //         // Example of protected routes
    //         {
    //             element: <SomeProtectedPage />,  // Replace with your actual protected pages
    //             path: '/protected'
    //         },
    //         // Add more protected routes here as needed
    //     ]
    // },
    {
        path: "*",
        element: <Navigate to="/" replace />
    }
    
]

export default routesConfig
import { createBrowserRouter } from "react-router-dom";
import ProductList from "../src/pages/Booking/ProductList"
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import App from "./App";
import Error from "./shared/Error";
import ProductInfo from "./pages/Booking/components/ProductInfo";
import SeatConfirmationSuccess from "./pages/Booking/components/SeatConfirmationSuccess";
import LoginPage from "./pages/Login/LoginPage";
import RegisterPage from "./pages/Register/RegisterPage";
import AdminHome from "./pagesAdmin/AdminHome";
import AddTheatre from "./pagesAdmin/AddTheatre";
import ProductInfoUpdate from "./pagesAdmin/PtoductInfoUpdate";
import UpdateFood from "./pagesAdmin/UpdateFood";
export const router = createBrowserRouter([
    {
        path: "/",
        element:<App/>,
        children: [
            {
                path: "/",
                element: <ProductList/>
              },
              {
                  path: "/about",
                  element: <About/>
                },
                {
                    path:"/productinfo/:id",
                    element:< ProductInfo />
                },
                {
                  path: "/contact",
                  element: <Contact/>
                },
                {
                  path: '/seat-confirmation-success/:id',
                  element: <SeatConfirmationSuccess />,
                },
                {
                  path: '/home-admin',
                  element: <AdminHome/>,
                },
                {
                  path: '/add-theatre',
                  element: <AddTheatre/>,
                },
                {
                  path: '/update-product/:id',
                  element: <ProductInfoUpdate/>,
                },
                {
                  path: '/update-Food',
                  element: <UpdateFood/>,
                },
                {
                    path:"*",
                    element:<Error/>
                },
                
        ]
        
      },
      {
        path: "/login",
        element: <LoginPage/>,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
   
    
])
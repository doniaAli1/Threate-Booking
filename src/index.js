import { RouterProvider } from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom/client';
import {router} from "./Router";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router}/>);

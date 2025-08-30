import { createBrowserRouter } from "react-router";

import App from "../../App";
import Documents from "../../pages/Documents/document";
import Home from "../../pages/Home/home"

export const router = createBrowserRouter([
    {
        path: "/", 
        element: <App />,
        children: [
            {path: "/", element: <Home />},
            {path: "tai-lieu", element: <Documents />},
        ]       
    }
])
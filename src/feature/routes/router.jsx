import { createBrowserRouter } from "react-router";

import App from "../../App";
import Documents from "../../pages/Documents/document";
import Home from "../../pages/Home/home"
import Forum from "../../pages/Forum/forum";

export const router = createBrowserRouter([
    {
        path: "/", 
        element: <App />,
        children: [
            {
                index: true, 
                element: <Home />,
                children: [
                    {path: "tai-lieu", element: <Documents/>},
                ]
            },
        ]       
    }
])
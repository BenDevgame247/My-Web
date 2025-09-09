import { createBrowserRouter } from "react-router";

import App from "../../App";
import Documents from "../../pages/Documents/document";
import Home from "../../pages/Home/home"
import Forum from "../../pages/Forum/forum";
import ProgrammingConcepts from "../../pages/Documents/contents/concepts/programming/programming";

export const router = createBrowserRouter([
    {
        path: "/", 
        element: <App />,
        children: [
            {index: true, element: <Home/>},
            {
                path: "tai-lieu", 
                element: <Documents/>,
                children: [
                    {path: "khai-niem-lap-trinh", element: <ProgrammingConcepts/>}
                ]
            },
            {path: "dien-dan", element: <Forum/>},
        ]       
    }
])
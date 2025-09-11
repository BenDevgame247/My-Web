import { createBrowserRouter } from "react-router";

import App from "../../App";
import Documents from "../../pages/Documents/document";
import Home from "../../pages/Home/home"
import Forum from "../../pages/Forum/forum";
import Intro from "../../pages/Documents/contents/intro/intro";
import ProgrammingIntro from "../../pages/Documents/contents/intro/programming/programmingIntro";


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
                    {path: "gioi-thieu", element: <Intro/>},
                    {
                        path: "programming", 
                        element: <ProgrammingIntro/>,
                        children: [
                            {},
                        ]
                    }
                ]
            },
            {path: "dien-dan", element: <Forum/>},
        ]       
    }
])
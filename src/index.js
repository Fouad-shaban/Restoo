import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";

import AllServices from "./Services/AllServices";
import Allabout from "./About/Allabout";
import Allcontact from "./Contact/Allcontact";
import AllBreak from "./Menu/Breakfast/AllBreak";
import AllLunch from "./Menu/Lunch/AllLunch";
import AllDinner from "./Menu/Dinner/AllDinner";
import AllOrder from "./Order/AllOrder";
import { CartProvider } from "react-use-cart";
import ScrollToTop from "react-scroll-to-top";


const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>
  },
  {
    path: "service",
    element:<AllServices/>
  },
  {
    path: "about",
    element:<Allabout/>
  },
  {
    path: "contact",
    element:<Allcontact/>
  },
  {
    path: "break",
    element:<AllBreak/>
  },
  {
    path: "lunch",
    element:<AllLunch/>
  },
  {
    path: "dinner",
    element:<AllDinner/>
  },
  {
    path: "order",
    element:<AllOrder/>
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartProvider>
  <React.StrictMode>
    <RouterProvider router={router} />
    <ScrollToTop smooth 
            style={{borderBlockColor:"blue"}}
            viewBox="0 0 448 512"
            color="#1374be"
            svgPath="M246.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 109.3 361.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160zm160 352l-160-160c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 301.3 361.4 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3z"
            />
  </React.StrictMode>
  
  </CartProvider>
);

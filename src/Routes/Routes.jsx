import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import NewsDetails from "../Pages/NewsDetails/NewsDetails";
import PrivateRoutes from "./PrivteRoutes/PrivateRoutes";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader: ()=>fetch('/news.json')
        },

        {  
          path: '/news/:id',
          element: <PrivateRoutes><NewsDetails></NewsDetails></PrivateRoutes>,
          loader: ()=>fetch('/news.json')

        },
        
        {
              path:'/login',
              element:<Login></Login>
        }, 
        {
          path:'/register',
          element: <Register></Register>
        }
      ]
    },
  ]);

  export default router;
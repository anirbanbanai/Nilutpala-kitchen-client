
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Components/Main';
import Home from './Components/Home';
import ShopByCatagory from './Components/ShopByCatagory';
import Login from './Accunt/Login';
import Register from './Accunt/Register';
import AuthProvider from './Auth/AuthProvider';
import DashBoard from './DashBoard/DashBoard';
import AddClass from './DashBoard/Admin/AddClass';
import UpdateItem from './DashBoard/Admin/UpdateItem';
import AllItem from './DashBoard/Admin/AllItem';
import MyShop from './Components/MyShop';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:"/shopbycatagory",
        element:<ShopByCatagory></ShopByCatagory>,
        loader: ()=> fetch("https://my-kitchen-server-anirbanbanai.vercel.app/nilufood")
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/myshop",
        element:<MyShop></MyShop>
      },
      {
        path:"/dash/update",
        element:<UpdateItem></UpdateItem>
      }
    ]
  },
  {
    path:"/dash",
    element:<DashBoard></DashBoard>,
    children:[
      {
        path:"/dash/addclass",
        element:<AddClass></AddClass>
      },
      {
        path:'/dash/allitem',
        element:<AllItem></AllItem>
      }
      
    ]
  }
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
)

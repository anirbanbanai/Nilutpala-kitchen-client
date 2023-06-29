
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
        loader: ()=> fetch("http://localhost:5000/nilufood")
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
      
    ]
  }
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
)

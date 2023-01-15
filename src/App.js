import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './Componets/Home/Home';
import { Toaster } from 'react-hot-toast';
import Login from './Componets/Login/Login';
import SignUp from './Componets/SignUp/SignUp';
import InformationSet from './Componets/InformationSet/InformationSet';
import UserInfo from './Componets/User-info/UserInfo';
import Edit from './Componets/Edit/Edit';
import Products from './Componets/Products/Products';
import AddProducts from './Componets/AddProducts/AddProducts';
import ProductEdit from './Componets/ProductEdit/ProductEdit';
import CategoryAdd from './Componets/CategoryAdd/CategoryAdd';
import CategoryEdit from './Componets/Categories/CategoryEdit';

function App() {

const router = createBrowserRouter([
  {
    path: '/',
    element:<Main></Main>,
    children:[
      {
        path:'/',
       element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/signUp',
        element:<SignUp></SignUp>
      },
      {
        path:'/information',
        element:<InformationSet></InformationSet>
      },
      {
        path:'/userInfo',
        element:<UserInfo></UserInfo>
      },
      {
        path:'/addProducts',
        element:<AddProducts></AddProducts>
      },
      {
        path:'/addCategory',
        element:<CategoryAdd></CategoryAdd>
      },
      {
        path:'/information/:id',
          element:<Edit></Edit>,
          loader:async ({params}) =>{
          return fetch(`http://localhost:5000/information/${params.id}`)
          }
      },
      {
        path:'/products/:id',
          element:<Products></Products>,
          loader:async ({params}) =>{
          return fetch(`http://localhost:5000/products/${params.id}`)
          }
      },
      {
        path:'/categories/:id',
          element:<CategoryEdit></CategoryEdit>,
          loader:async ({params}) =>{
          return fetch(`http://localhost:5000/categories/${params.id}`)
          }
      },
      {
        path:'/products/:id/:id',
          element:<ProductEdit></ProductEdit>,
          loader:async ({params}) =>{
          return fetch(`http://localhost:5000/products/${params.id}/${params.id}`)
          }
      },
    ]
  }
])
  return (
    
    <div >
    <RouterProvider router={router}>

    </RouterProvider>
    <Toaster></Toaster>
    </div>
  );
}

export default App;

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

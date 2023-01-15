import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBookReader, FaHome, FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../Context/AuthProvider';
import logo from '../images/pngwing.com.png'
const Header = () => {
    const {logOut, user} = useContext(AuthContext)
    const navigate = useNavigate()
    const handleLogOut = () => {
        logOut()
          .then(() => {})
          .catch(error => console.error(error))
        navigate('/')
      }
      const [info, setInfo] = useState([])
      useEffect(() => {
        fetch(`https://digital-comp-server.vercel.app/information?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setInfo(data))

    }, [user?.email])
    const headItems = <>
           <li><Link to='/'><a>home</a></Link></li>
           <li><Link to='/addCategory'> <a>Add-Category</a></Link></li>

            <li><Link to='/addProducts'> <a>Add-product</a></Link></li>
           {
            user?.uid &&  <li><Link to='/userInfo'> <a>User-info</a></Link></li>
           }
           
           {
            user?.uid && <>
            {
              info[0]?.age ? <></> : <li><Link to='/information'> <a>Set-info</a></Link></li>
            }
            </>
           } 
          
           
       </>
    return (
        <div className=''>
        <div className="navbar bg-base-100 shadow-2xl rounded-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {headItems}
                    </ul>
                </div>
             <Link to='/home'><a className="btn bg-transparent border-none text-xl text-black hover:text-white flex"><img src={logo} alt='' className='w-10'/><span className='hidden lg:block'>igital</span><span className='text-sm lg:text-xl'>-Comp</span> </a></Link>   
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {headItems}
                </ul>
            </div>
            <div className="navbar-end">

            {
            user?.uid ? <p className='mr-3 font-bold text-sm hidden lg:block'>'{ user.displayName}'</p> : <p className='font-bold text-sm mr-3 hidden lg:block'>'user not login'</p>
          } 
          {
            user?.photoURL  ? <img src={user?.photoURL} alt=""  className='rounded-full h-10 mr-3' /> : <span className='mr-1'><FaUserCircle className='text-3xl'></FaUserCircle></span>
          }
                    {
                        user?.uid ? <a className="btn" onClick={handleLogOut}>Log-out</a> :
                           <Link to='/logIn'><a className="btn">Log in</a></Link> 
                    }
                
                
            </div>
        </div>
    </div>
    );
};

export default Header;
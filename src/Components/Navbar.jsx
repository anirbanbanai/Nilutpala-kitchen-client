import { Link } from 'react-router-dom';
import logo from '../assets/logo/Hing.jpg'
import { HiMenuAlt1 } from 'react-icons/hi';
import { useContext } from 'react';
import { AuthContext } from '../Auth/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    const HandleLogOut = () => {
        logOut()
    }

    const navItem = <>
        <li><Link t='/' className="text-2xl font-semibold text-red-500">Home</Link></li>
        <li><Link to='/shopbycatagory' className="text-2xl font-semibold text-red-500">Shop</Link></li>
        <li><Link  to="/dash/addclass" className="text-2xl font-semibold text-red-500">Dashboard</Link></li>
        <li><Link to="/myshop"  className="text-2xl font-semibold text-red-500">Favorite</Link></li>
        <li><Link  to="/myshop" className="text-2xl font-semibold text-red-500">My Shop</Link></li>
   

    </>
    return (
        <div className=' w-full fixed nnn z-20 mt-0'>
            <div className="navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="lg:hidden">
                            <button>
                                <HiMenuAlt1 className="text-5xl mr-6" />
                            </button>

                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navItem}
                        </ul>
                    </div>
                    <a className="">
                        <img className='w-20 rounded-full' src={logo} alt="" />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItem}
                    </ul>
                </div>
                <div className="navbar-end">

                    {!user ? <Link to="/login">
                        <button className="btn2" type="button">
                            <strong>Login</strong>
                            <div id="container-stars">
                                <div id="stars"></div>
                            </div>

                            <div id="glow">
                                <div className="circle"></div>
                                <div className="circle"></div>
                            </div>
                        </button>
                    </Link> :

                        <button onClick={HandleLogOut} className="btn2" type="button">
                            <strong>LogOut</strong>
                            <div id="container-stars">
                                <div id="stars"></div>
                            </div>

                            <div id="glow">
                                <div className="circle"></div>
                                <div className="circle"></div>
                            </div>
                        </button>
                    }
                    <Link className='hidden md:flex' to="/register">
                        <button className="btn2  " type="button">
                            <strong>Register</strong>
                            <div id="container-stars">
                                <div id="stars"></div>
                            </div>

                            <div id="glow">
                                <div className="circle"></div>
                                <div className="circle"></div>
                            </div>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
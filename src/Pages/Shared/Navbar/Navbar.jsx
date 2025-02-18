import { Link, NavLink } from "react-router-dom";
import defaultUser from '../../../assets/user.png'
import { useContext } from "react";
import { AuthContext } from "../../../Providers/Provider";



const Navbar = () => {

  const  {user, logOut}= useContext(AuthContext);
  console.log(user)


  const handleLogOut = () =>{
           logOut()
           .then()
           .catch()
  }
    return (
        <div className="mt-[40px]">
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><NavLink to='/'>Home</NavLink></li>
        
        <li ><NavLink to='/about' >About</NavLink></li>
        <li><NavLink to='/carrer'>Carrer</NavLink></li>
      </ul>
    </div>
    {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><NavLink to='/'>Home</NavLink></li>
        
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/carrer'>Carrer</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end">

  <div className="w-10 rounded-lg">
          <img alt="Tailwind CSS Navbar component" className="rounded-full" src={defaultUser} />
        </div>
  <div className="dropdown dropdown-end">


     {
      user?  <button onClick={handleLogOut} className="btn bg-[#403F3F] text-white text-xl font-semibold">LogOut</button>: <Link to='/login'>
      <button className="btn bg-[#403F3F] text-white text-xl font-semibold">Login</button>
      
      </Link>
    
     }
  
   
  </div>
</div>
        </div>

        </div>
    );
};

export default Navbar;


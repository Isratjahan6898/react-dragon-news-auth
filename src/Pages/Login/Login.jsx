import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/Provider";



const Login = () => {
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();

    const {signIn} = useContext(AuthContext);
    console.log(signIn)
    const handleLogin= e =>{
        e.preventDefault();
        const form = new FormData (e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email,password)
        signIn (email, password)
        .then( result =>{
            console.log(result.user)
            navigate (location?.state? location.state : '/');
        })
        .catch(error =>{
            console.error(error)
        })
        
    }
    return (
        <div>
            <Navbar></Navbar>
             <h1 className="text-3xl text-center my-10 font-bold">Please Login</h1>

             <div>
             <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
  
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <p className="mt-[20px]">Don't have a account? please <Link to='/register' className="text-secondary">Register</Link></p>
      </form>
    </div>
  </div>
</div>
             </div>
        </div>
    );
};

export default Login;
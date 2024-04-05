import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/Provider";


const Register = () => {
    const { createUser} = useContext(AuthContext)
    // console.log(createUser)

    const handleRegister= e =>{
        e.preventDefault();
        const form = new FormData (e.currentTarget);
        const name = form.get('name');
        const photo = form.get ('photo')  
        const email = form.get('email');
        const password = form.get('password');
        //console.log(name, photo, email,password)

        createUser (email, password)
        .then (result =>{
            console.log(result.user)
        })
        .catch (error =>{
            console.error(error)
        })


    }
    return (
        <div>

            <Navbar></Navbar>
            <h1 className="text-center font-bold text-3xl my-[20px]">Register Please</h1>

            <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
   
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleRegister} className="card-body">

      <div className="form-control">

            
<label className="label">
  <span className="label-text">Your Name</span>
</label>
<input type="text" placeholder="enter name" name="name" className="input input-bordered" required />
</div>

<div className="form-control">

            
<label className="label">
  <span className="label-text">Photo Url</span>
</label>
<input type="text" placeholder="enter url" name="photo" className="input input-bordered" required />
</div>
        
          

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
        <button className="btn btn-primary">Register</button>
        </div>
        <p>Already Account? please <Link to='/login' className="text-secondary">Login</Link> </p>
      </form>
    </div>
  </div>
</div>
            </div>
            
        </div>
    );
};

export default Register;
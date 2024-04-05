import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import qzone1 from '../../../assets/qZone1.png'
import qzone2 from '../../../assets/qZone2.png'
import qzone3 from '../../../assets/qZone3.png'

const RightSide = () => {
    return (
       <div>
         <div className="p-4 space-y-3 mb-6">
           <h1 className="text-3xl font-bold">Login With</h1> 

           <button className="btn w-full">  <FaGoogle />Login with Google</button>
           <br></br>

           <button className="btn w-full pt-[ 20px]">  <FaGithub /> Login With Github</button>
        </div>

         {/* find us section */}

         <div className="p-4  mb-6">
           <h1 className="text-3xl font-bold mb-[16px]">Find Us On</h1> 

           <a href="" className= "p-4 flex text-lg items-center border rounded-t-lg w-full"> <FaFacebookF />Facebook</a>
           <br></br>

           <a href=''
            className=" p-4 flex text-lg items-center border rounded-t-lg  w-full ">  <FaTwitter /> Twitter </a>

           <br></br>

           <a href=""
           
           className=" p-4 flex text-lg items-center border rounded-t-lg  w-full"> <FaInstagram /> InstaGram</a>
        </div>
               

               {/* Q-zone section */}

               <div className="p-4  mb-6">
           <h1 className="text-3xl font-bold mb-[16px]">Q Zone</h1>

           <img src={qzone1} alt="" />
           <img src={qzone2} alt="" />
           <img src={qzone3} alt="" />
           </div>
       </div>
    );
};

export default RightSide;
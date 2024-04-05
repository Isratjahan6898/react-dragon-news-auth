
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import moment from 'moment';
import { CiCalendarDate } from "react-icons/ci";

import photo1 from '../../../assets/1.png'
import photo2 from '../../../assets/2.png'
import photo3 from '../../../assets/3.png'

const LeftSide = () => {

    const [categories , setCategories] = useState([]);

    useEffect(()=>{

        fetch('categories.json')
        .then(res=> res.json())
        .then (data => setCategories(data))
    },[])
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold ">All Categories</h1>
            {
                categories.map (category => <NavLink key={category.id} className="block ml-4 text-xl font-semibold" to={`/category/${category.id}`}>
                    {category.name}
                </NavLink>)
            }


                    <div>
                    <div className="card  bg-base-100 shadow-xl">
  <figure><img src={photo1} alt="Shoes" /></figure>
  <div className="">
    <h2 className=" mt-[16px] mb-[16px] mx-[10px] card-title">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
   
   
  </div>
<div className="flex gap-[80px] mb-[40px]">

    <p className="ml-[10px]">sports</p>
   <p className="flex items-center"> <CiCalendarDate /> {moment().format(" MMMM D, YYYY")}</p>
    </div>
    
    </div>
                    </div>


                    <div>
                    <div className="card  bg-base-100 shadow-xl">
  <figure><img src={photo2} alt="Shoes" /></figure>
  <div className="">
    <h2 className=" mt-[16px] mb-[16px] mx-[10px] card-title">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
   
   
  </div>
<div className="flex gap-[80px] mb-[40px]">

    <p className="ml-[10px]">sports</p>
   <p className="flex items-center"> <CiCalendarDate /> {moment().format(" MMMM D, YYYY")}</p>
    </div>
    
    </div>
                    </div>


                    <div>
                    <div className="card  bg-base-100 shadow-xl">
  <figure><img src={photo3} alt="Shoes" /></figure>
  <div className="">
    <h2 className=" mt-[16px] mb-[16px] mx-[10px] card-title">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
   
   
  </div>
<div className="flex gap-[80px] mb-[40px]">

    <p className="ml-[10px]">sports</p>
   <p className="flex items-center"> <CiCalendarDate /> {moment().format(" MMMM D, YYYY")}</p>
    </div>
    
    </div>
                    </div>
        </div>
    );
};

export default LeftSide;
import { useLoaderData, useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSide from "../Shared/RightSide/RightSide";
import Navbar from "../Shared/Navbar/Navbar";
import { FaArrowLeft } from "react-icons/fa";

const NewsDetails = () => {
    const news = useLoaderData();
    console.log(news)
    const {id} =useParams();
    console.log(id)

    const anews = news.find ((anews)=>anews._id ===id)
    console.log(anews)
    
    

    return (
        <div>
            {/* <h1>news details</h1> */}
            <Header></Header>
            <Navbar></Navbar>

            <div className="grid grid-cols-1 lg:grid-cols-4">
               <div className="col-span-3">
                  <h2 className="text-3xl font-bold">
                    news details
                  </h2>

                  <div>
                  <div className="card w-full bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={anews.image_url} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body ">
    <h2 className="card-title">{anews.title}</h2>
    <p>{anews.details}</p>
    <button className="bg-[#D72050] flex items-center gap-[16px] w-[300px] h-[48] p-[10px] text-white mt-[16px]"><FaArrowLeft />all this in category</button>
     

  </div>

  
</div>


                  </div>

                   
               </div>

               <div>
                  <RightSide></RightSide>
               </div>
            </div>
        </div>
    );
};

export default NewsDetails;
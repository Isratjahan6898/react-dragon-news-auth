import { IoStar } from "react-icons/io5";
import { IoEye } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";
import { Link } from "react-router-dom";
const NewsCard = ({news}) => {
    console.log(news)
    return (
        <div>
           <div className="mb-[40px]">
           <div className="card  px-[20px] border w-full bg-base-100 shadow-xl">
  <div className="">

   <div className="flex justify-between mt-[40px] p-[10px] bg-[#F3F3F3] ">


   <div className=" flex gap-[20px]">
        <div><img className="w-[40px] h-[40px] rounded-full" src={news. author.img} alt="" /></div>
        <div>
        <h1 className="font-semibold">{news.author.name}</h1>
        <p>{news.author.published_date}</p>
        </div>
    </div>

    <div className="flex items-centers gap-[20px]">
         <p><CiBookmark  className="text-2xl"/></p>
         <p><CiShare2 className="text-2xl" /></p>
    </div>
   </div>
    
    <h2 className="text-xl font-bold mb-[16px] mt-[10px]">{news.title}</h2>
    
  </div>
  <figure><img className="mb-[20px]" src={news.image_url} alt="Shoes" /></figure>

  {
  news.details.length >200 ?

  <p>{news.details.slice (0,200)} <Link to={`/news/${news._id}`} className="text-blue-600">Read More...</Link> </p>:<p>{news.details}</p>
  }
  <hr></hr>

  <div className="mt-[16px] flex justify-between mb-[30px]">
    <p className="flex items-center"> <IoStar className="text-yellow-500"/><IoStar className="text-yellow-500" /><IoStar className="text-yellow-500"/><IoStar className="text-yellow-500"/><IoStar className="text-yellow-500" />{news.rating.number}</p>

    <p className="flex items-center"><IoEye />{news.total_view}</p>
  </div>
</div>
           </div>
        </div>
    );
};

export default NewsCard;
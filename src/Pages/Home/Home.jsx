import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSide from "../Shared/LeftSide/LeftSide";
import Navbar from "../Shared/Navbar/Navbar";
import RightSide from "../Shared/RightSide/RightSide";
import BreakingNews from "./BrakingNews/BreakingNews";
import NewsCard from "../NewsCard/NewsCard";

const Home = () => {
    const news = useLoaderData();
    console.log(news)
    return (
        <div>
            <Header></Header>

            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            

            <div className=" grid grid-cols-1 mt-[40px] lg:grid-cols-4 gap-6">
                <div className="border">
                    
                    <LeftSide></LeftSide>
                    
                    
                    </div>
             <div className="col-span-2 border"> 
             <h1 className="text-center text-bold text-2xl mb-[30px]">Dragon News Home</h1>
                   {
                    news.map (anews => <NewsCard key ={anews._id} news={anews} ></NewsCard>)
                   }
                  
                    </div>
                <div className="border">

                    <RightSide></RightSide>
                </div>
            </div>
        </div>
    );
};

export default Home;
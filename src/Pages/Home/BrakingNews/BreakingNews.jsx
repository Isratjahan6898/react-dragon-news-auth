import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div className="flex bg-[#F3F3F3] p-[10px] mt-[40px]">
            <button className="btn bg-[#D72050] text-white font-medium text-xl">Latest</button>

            <Marquee>
  I can be a React component, multiple React components, or just some text.
</Marquee>
        </div>
    );
};

export default BreakingNews;
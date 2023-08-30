import bannerImage from "../../../assets/Group-1/Image/bannerImage.png";
import bgDesignImage from "../../../assets/Group-1/Design/Ellipse.png";

const Banner = () => {
  return (
    <div className=" mx-2 my-auto">
     <div className="flex justify-around my-10">
     <div className="md:ms-5 flex flex-col justify-center">
        <p className="border border-dashed p-2 w-fit border-amber-950">
          IT IS A GOOD TIME FOR THE GREAT TASTE OF BURGER
        </p>
        <h1 className="my-2 md:text-8xl text-2xl font-bold">BURGER</h1>
        <h3 className="md:text-6xl text-xl font-bold">WEEK</h3>
      </div>
      <div className=" relative">
        <img className="md:w-[820px] w-96" src={bannerImage} alt="" />
        <div className="absolute bottom-10 left-4 md:bottom-48 md:left-52">
          <div className="relative">
            <img className="w-12 md:w-auto" src={bgDesignImage} alt="" />
            <p className="absolute bottom-1 md:bottom-4 left-1 md:left-3 text-xs md:text-4xl w-10 h-10 md:h-auto md:w-auto text-white border-2 border-dashed rounded-full p-1 md:p-7">
              $5.49 <br /> <span>only</span>
            </p>
          </div>
        </div>
      </div>
     </div>
    </div>
  );
};

export default Banner;

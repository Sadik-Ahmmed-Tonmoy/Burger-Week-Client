import bgImg from "../../../assets/Group-1/Design/Rectangle.png";
import bannerImage from "../../../assets/Group-1/Image/bannerImage.png";
import bgDesignImage from "../../../assets/Group-1/Design/Ellipse.png";
import { Slide } from "react-awesome-reveal";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Banner = () => {
  return (
    <div
      id="home"
      className="my-auto pt-32 md:pt-0"
      style={{ backgroundImage: `url('${bgImg}')` }}
    >
      <div className="md:flex md:justify-evenly">
        <div className="p-4 md:ms-10 flex flex-col justify-center">
          <Slide>
            <p className="border border-dashed p-2 w-fit border-amber-950">
              IT IS A GOOD TIME FOR THE GREAT TASTE OF BURGER
            </p>
            <h1 className="my-2 md:text-8xl text-5xl font-bold">BURGER</h1>
            <h3 className="md:text-6xl text-2xl font-bold">WEEK</h3>
          </Slide>
        </div>
        <div data-aos="fade-left" className=" relative">
          <img className="md:w-full w-96" src={bannerImage} alt="" />
          <div className="absolute bottom-24 left-28 md:bottom-56 md:left-64">
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

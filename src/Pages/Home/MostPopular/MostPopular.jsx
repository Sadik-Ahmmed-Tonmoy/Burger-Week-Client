import burgerImage from "../../../assets/Group-2/Image/BurgerImage.png";
import burgerImage1 from "../../../assets/Group-2/Image/Image.png";
import burgerImage2 from "../../../assets/Group-2/Image/mostPopularBG.jpg";

import "./MostPopular.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const MostPopular = () => {
  return (
    <div className="grid md:grid-rows-2 md:grid-flow-col gap-2 md:gap-4 mt-5 md:mt-14 mx-2">
      <div
        data-aos="fade-right"
        className="bg-cover w-full h-[200px] md:h-[500px] bg-no-repeat rounded-xl row-span-2"
        style={{ backgroundImage: `url('${burgerImage}')` }}
      >
        <div className="p-4 md:p-8">
          <p className="text-xl md:text-2xl text-white">TRY IT TODAY</p>
          <h3 className="text-3xl md:text-6xl text-white">
            MOST POPULAR <br /> BURGER
          </h3>
        </div>
      </div>
      <div
       data-aos="fade-down-left"
        className="bg-cover w-full h-full bg-no-repeat rounded-xl"
        style={{ backgroundImage: `url('${burgerImage1}')` }}
      >
        <div className="p-4 md:p-8">
          <p className="text-xl md:text-2xl text-white">TRY IT TODAY</p>
          <h3 className="text-4xl md:text-4xl text-white">
            MOST POPULAR <br /> BURGER
          </h3>
        </div>
      </div>
      <div
    
        className="bg-cover bg-fixed w-full h-full bg-no-repeat rounded-xl bg-center md:bg-left"
        style={{ backgroundImage: `url('${burgerImage2}')` }}
      >
        <div data-aos="fade-up-left" className="p-4 md:p-8">
          <p className="text-xl md:text-2xl text-white">TRY IT TODAY</p>
          <h3 className="text-3xl md:text-4xl text-white">
            MOST POPULAR <br /> BURGER
          </h3>
        </div>
      </div>
    </div>
  );
};

export default MostPopular;

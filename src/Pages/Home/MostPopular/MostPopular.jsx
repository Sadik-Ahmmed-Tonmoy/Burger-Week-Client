import burgerImage from "../../../assets/Group-2/Image/BurgerImage.png";
import burgerImage1 from "../../../assets/Group-2/Image/Image.png";
import burgerImage2 from "../../../assets/Group-2/Image/-2.png";

import "./MostPopular.css";

const MostPopular = () => {
  return (
   <div className="md:flex gap-7 py-10">
     <section className="md:w-6/12 h-[200px] bottom-0">
      <div className="bg-cover w-full h-full md:h-[520px] bg-no-repeat rounded-xl" style={{backgroundImage: `url('${burgerImage}')`}}>
        <div className="p-8">
          <p className="text-3xl text-white">
            TRY IT TODAY
          </p>
          <h3 className="text-5xl text-white">MOST POPULAR BURGER</h3>
        </div>
      </div>
    </section>


    <section className="md:w-6/12">
    <div className=" h-[200px] w-full bg-no-repeat  my-10" style={{backgroundImage: `url('${burgerImage1}')`}}>
    <div className="p-8">
        <p className="text-2xl text-white">
          TRY IT TODAY
          </p>
          <h3 className="text-4xl text-white">MORE FUN <br /> MORE TASTE</h3>
        </div>
      </div>  
        <div className=" w-full h-[200px] bg-no-repeat my-8" style={{backgroundImage: `url('${burgerImage2}')`}}>
        <div className="p-8">
        <p className="text-2xl text-white">
          TRY IT TODAY
          </p>
          <h3 className="text-3xl text-white">FRESH & CHILI</h3>
        </div>
      </div>
    </section>
   </div>
  );
};

export default MostPopular;

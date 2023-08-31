import burgerImage from "../../../assets/Group-2/Image/BurgerImage.png";
import burgerImage1 from "../../../assets/Group-2/Image/Image.png";
import burgerImage2 from "../../../assets/Group-2/Image/-2.png";

import "./MostPopular.css";

const MostPopular = () => {
  return (
    // <div className="md:flex gap-7 m-2 md:mt-8">
    //   <section className="md:w-6/12">
    //     <div
    //       className="bg-cover w-full h-full md:h-[520px] bg-no-repeat rounded-xl"
    //       style={{ backgroundImage: `url('${burgerImage}')` }}
    //     >
    //       <div className="p-4 md:p-8">
    //         <p className="text-xl md:text-2xl text-white">TRY IT TODAY</p>
    //         <h3 className="text-3xl md:text-6xl text-white">
    //           MOST POPULAR BURGER
    //         </h3>
    //       </div>
    //     </div>
    //   </section>

    //   <section className="md:w-6/12 bg-red-500">
    //     <div
    //       className=" h-[200px] w-auto rounded-md bg-no-repeat mt-2 md:my-10"
    //       style={{ backgroundImage: `url('${burgerImage1}')` }}
    //     >
    //       <div className="p-4 md:p-8">
    //         <p className="text-xl md:text-2xl text-white">TRY IT TODAY</p>
    //         <h3 className="text-4xl text-white">
    //           MORE FUN <br /> MORE TASTE
    //         </h3>
    //       </div>
    //     </div>
    //     <div
    //       className=" h-[200px] w-auto rounded-md bg-no-repeat md:my-9"
    //       style={{ backgroundImage: `url('${burgerImage2}')` }}
    //     >
    //       <div className="p-4 md:p-8">
    //         <p className="text-xl md:text-2xl text-white">TRY IT TODAY</p>
    //         <h3 className="text-4xl text-white">
    //           MORE FUN <br /> MORE TASTE
    //         </h3>
    //       </div>
    //     </div>
    //   </section>
    // </div>
    <div className="grid md:grid-rows-2 md:grid-flow-col gap-2 md:gap-4 mt-5 md:mt-14 mx-2">
       <div
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
          className="bg-cover w-full h-full bg-no-repeat rounded-xl"
          style={{ backgroundImage: `url('${burgerImage2}')` }}
        >
          <div className="p-4 md:p-8">
            <p className="text-xl md:text-2xl text-white">TRY IT TODAY</p>
            <h3 className="text-3xl md:text-4xl text-white">
              MOST POPULAR <br /> BURGER
            </h3>
          </div>
        </div>
    </div >
  );
};

export default MostPopular;

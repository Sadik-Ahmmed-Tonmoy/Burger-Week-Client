import { Slide } from "react-awesome-reveal";

const Reservation = () => {
  return (
    <div id="contactUs" className="text-center">
      <h5 data-aos="zoom-in" data-aos-duration="2000" className="pt-36 text-3xl">RESERVATION</h5>
      <p data-aos="zoom-in" data-aos-duration="2000">+880123-456789</p>
      <h2 data-aos="fade-up"
     data-aos-duration="2000" className="text-5xl font-extrabold mt-10 mb-20">BOOK YOUR TABLE</h2>
      <form action="" className=" md:w-6/12 px-2 mx-auto my-5">
        <div className="mx-auto grid grid-cols-2 gap-6">
          <Slide>
            {" "}
            <div className="form-control w-full md:max-w-xs mx-auto">
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered w-full md:max-w-xs text-white"
              />
            </div>
          </Slide>
          <Slide direction="right">
          <div className="form-control w-full md:max-w-xs mx-auto">
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered w-full md:max-w-xs text-white"
            />
          </div>
          </Slide>
          <Slide duration={2000} >
            {" "}
            <div className="form-control w-full md:max-w-xs mx-auto">
              <input
                type="text"
                placeholder="Date"
                className="input input-bordered w-full md:max-w-xs text-white"
              />
            </div>
          </Slide>
          <Slide duration={2000}  direction="right">
            {" "}
            <div className="form-control w-full md:max-w-xs mx-auto">
              <input
                type="text"
                placeholder="Time"
                className="input input-bordered w-full md:max-w-xs text-white"
              />
            </div>
          </Slide>
          <Slide duration={2500} >
            {" "}
            <div className="form-control w-full md:max-w-xs mx-auto">
              <input
                type="text"
                placeholder="People"
                className="input input-bordered w-full md:max-w-xs text-white"
              />
            </div>
          </Slide>
        <Slide duration={2500} direction="right">
        <input
            type="submit"
            className="mb-10 md:mb-56 btn max-w-xs mx-auto w-full bg-orange-500 text-black hover:text-white"
            value="FIND A TABLE"
          />
        </Slide>
        </div>
      </form>
    </div>
  );
};

export default Reservation;

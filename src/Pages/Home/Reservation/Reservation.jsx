
import bgReservation from "..//../../assets/Group-5/Image/Group5.png";

const Reservation = () => {
  return (
    <div id="contactUs" className="text-center bg-no-repeat w-full h-full bg-cover bg-fixed" style={{backgroundImage: `url('${bgReservation}')`}}>
      <h5 className="pt-36 text-3xl">RESERVATION</h5>
      <h2 className="text-5xl font-extrabold mt-10 mb-20">BOOK YOUR TABLE</h2>
      <form action="" className=" md:w-6/12 px-2 mx-auto my-5">
       <div className="mx-auto grid grid-cols-2 gap-6">
       <div className="form-control w-full md:max-w-xs mx-auto">
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered w-full md:max-w-xs text-white"
          />
        </div>
        <div className="form-control w-full md:max-w-xs mx-auto">
          <input
            type="text"
            placeholder="Email"
            className="input input-bordered w-full md:max-w-xs text-white"
          />
        </div>
        <div className="form-control w-full md:max-w-xs mx-auto">
          <input
            type="text"
            placeholder="Date"
            className="input input-bordered w-full md:max-w-xs text-white"
          />
        </div>
        <div className="form-control w-full md:max-w-xs mx-auto">
          <input
            type="text"
            placeholder="Time"
            className="input input-bordered w-full md:max-w-xs text-white"
          />
        </div>
        <div className="form-control w-full md:max-w-xs mx-auto">
          <input
            type="text"
            placeholder="People"
            className="input input-bordered w-full md:max-w-xs text-white"
          />
        </div>
        <input type="submit" className="btn max-w-xs mx-auto w-full bg-red-500 text-black hover:text-white" value="FIND A TABLE" />
       </div>
      </form>
    </div>
  );
};

export default Reservation;

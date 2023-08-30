const Reservation = () => {
  return (
    <div className="text-center">
      <h5 className="pt-36 text-3xl">RESERVATION</h5>
      <h2 className="text-5xl font-extrabold mt-10 mb-20">BOOK YOUR TABLE</h2>
      <form action="" className="grid grid-cols-2 gap-6 md:w-6/12 px-2 mx-auto my-5 g">
        <div className="form-control w-full md:max-w-xs">
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered w-full md:max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <input
            type="text"
            placeholder="Email"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <input
            type="text"
            placeholder="Date"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <input
            type="text"
            placeholder="Time"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <input
            type="text"
            placeholder="People"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <input type="submit" className="btn max-w-xs bg-red-500 text-black hover:text-white" value="FIND A TABLE" />
      </form>
    </div>
  );
};

export default Reservation;

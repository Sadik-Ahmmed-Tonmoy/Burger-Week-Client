import eventImage from "../../../assets/Group-4/Image/Group 4.png";

const UpcomingEvents = () => {
  return (
    <div className="md:flex border rounded-md shadow-2xl ">
      <section className="p-4 md:p-16">
        <h5 className="text-xl md:text-3xl">DISCOVER</h5>
        <h3 className="text-3xl md:text-6xl font-extrabold my-5">UPCOMING EVENTS</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. At nam rerum
          neque sapiente nemo adipisci nihil, ipsum minus reprehenderit
          molestias?
        </p>
      </section>
      <section className="p-4">
        <img className="rounded-md" src={eventImage} alt="" />
      </section>
    </div>
  );
};

export default UpcomingEvents;

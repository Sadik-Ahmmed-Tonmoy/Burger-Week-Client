import bgImg from "../../assets/Group-1/Design/Rectangle.png";
import bgReservation from "../../assets/Group-5/Image/Group5.png";
import Navbar from "../../Shared/Navbar/Navbar";
import Banner from "../../Pages/Home/Banner/Banner";
import MostPopular from "../../Pages/Home/MostPopular/MostPopular";
import UpcomingEvents from "../../Pages/Home/UpcomingEvents/UpcomingEvents";
import Menu from "../../Pages/Home/Menu/Menu";
import Reservation from "../../Pages/Home/Reservation/Reservation";

import './Main.css'

const Main = () => {
  return (
    <div className="bg-white text-amber-950 font-serif">
      <div
        className="bg-cover h-96 md:h-screen"
        style={{ backgroundImage: `url('${bgImg}')` }}
      >
        <div className="container mx-auto">
          <Navbar />
          <Banner />
        </div>
      </div>
      <div className="container mx-auto">
        <MostPopular />
        <Menu />
        <UpcomingEvents />
      </div>

        <div className="bg" style={{backgroundImage: `url('${bgReservation}')`}}>
        <div className="container mx-auto "> 
          <Reservation />
        </div>
        </div>
    </div>
  );
};

export default Main;

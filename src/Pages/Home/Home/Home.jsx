import Banner from "../Banner/Banner";
import Menu from "../Menu/Menu";
import MostPopular from "../MostPopular/MostPopular";
import Reservation from "../Reservation/Reservation";
import UpcomingEvents from "../UpcomingEvents/UpcomingEvents";

import bgReservation from "../../../assets/Group-5/Image/Group5.png";
import { ScrollRestoration } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Banner />
        <div className="container mx-auto">
        <MostPopular />
        <Menu/>
      
        </div>
        <div className="text-center bg-no-repeat w-full h-full bg-cover bg-fixed" style={{backgroundImage: `url('${bgReservation}')`}}>
        <UpcomingEvents/>
        <Reservation/>
        </div>
      <ScrollRestoration/>
    </div>
  );
};

export default Home;

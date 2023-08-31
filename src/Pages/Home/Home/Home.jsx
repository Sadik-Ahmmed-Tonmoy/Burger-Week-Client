import Banner from "../Banner/Banner";
import Menu from "../Menu/Menu";
import MostPopular from "../MostPopular/MostPopular";
import Reservation from "../Reservation/Reservation";
import UpcomingEvents from "../UpcomingEvents/UpcomingEvents";

const Home = () => {
  return (
    <div>
      <Banner />
        <div className="container mx-auto">
        <MostPopular />
        <Menu/>
        <UpcomingEvents/>
        </div>
        <Reservation/>
    </div>
  );
};

export default Home;

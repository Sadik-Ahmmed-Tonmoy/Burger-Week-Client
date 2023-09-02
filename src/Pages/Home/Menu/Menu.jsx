import axios from "axios";
import Item from "../../../Components/Item/Item";
import { useEffect, useState } from "react";

const Menu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    axios
    .get("https://burger-week-server.vercel.app/burgers")
    .then((response) => {
      setMenu(response.data);
    });
  },[])
  return (
    <div id="menu" className="text-center">
      <section>
        <div className="p-5 md:p-14"></div>
        <h5 className="bg-orange-500 p-4 m-6 w-fit mx-auto rounded-md">
          ALWAYS TASTE BURGER
        </h5>
        <h2 className="text-6xl font-bold my-2">CHOOSE & ENJOY</h2>
        <p className="mx-2">
          Crafted with the finest ingredients and bursting with flavor, our
          burgers are a symphony of taste and texture that will leave you
          wanting more. From classic favorites that evoke nostalgia to
          innovative creations that push the boundaries of culinary imagination,
          our menu is a celebration of the beloved burger. Each burger is a
          masterpiece, meticulously prepared to ensure a sensational dining
          experience.
        </p>
      </section>
      <section className=" my-8">
        <div className="grid md:grid-cols-3 gap-14">
          {menu.map((item) => (
            <Item
              key={item._id} 
              item={item}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Menu;

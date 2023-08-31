import axios from "axios";
import Item from "../../../Components/Item/Item";
import { useState } from "react";


const Menu = () => {
  const [menu, setMenu] = useState([])
  axios.get("https://burger-week-server.vercel.app/burgers").then((response) => {
setMenu(response.data);
  })
  return (
    <div id="menu" className="text-center">
     <section>
     <div className="p-5 md:p-14"></div>
     <h5 className="bg-orange-500 p-4 m-6 w-fit mx-auto rounded-md">ALWAYS TASTE BURGER</h5>
      <h2 className="text-6xl font-bold my-2">CHOOSE & ENJOY</h2>
      <p className="mx-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, modi in
        est, quibusdam dignissimos necessitatibus eaque, officia quas dicta
        minima alias repellat quidem numquam blanditiis consectetur quaerat
        saepe! Quod ipsa perferendis vero numquam pariatur error, eveniet
        corrupti praesentium voluptatum cum placeat aspernatur itaque,
        explicabo, temporibus ad qui veniam ratione rerum?
      </p>
     </section>
     <section className=" my-8">
     <div  className="grid md:grid-cols-3 gap-14">
      {
        menu.map((item)=><Item key={item._id} name={item.name} details={item.description} price={item.price} image={item.image}/>)
      }
      </div>
     </section>
    </div>
  );
};

export default Menu;

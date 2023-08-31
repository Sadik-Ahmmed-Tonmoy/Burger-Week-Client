import Item from "../../../Components/Item/Item";


const Menu = () => {
  return (
    <div id="menu" className="text-center">
     <section>
     <div className="p-5 md:p-14"></div>
     <h5 className="bg-orange-500 p-4 m-6 w-fit mx-auto rounded-md">ALWAYS TASTE BURGER</h5>
      <h2 className="text-6xl font-bold my-2">CHOOSE & ENJOY</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, modi in
        est, quibusdam dignissimos necessitatibus eaque, officia quas dicta
        minima alias repellat quidem numquam blanditiis consectetur quaerat
        saepe! Quod ipsa perferendis vero numquam pariatur error, eveniet
        corrupti praesentium voluptatum cum placeat aspernatur itaque,
        explicabo, temporibus ad qui veniam ratione rerum?
      </p>
     </section>
     <section className="flex my-8">
       <Item/>
       <Item/>
       <Item/>
     </section>
    </div>
  );
};

export default Menu;

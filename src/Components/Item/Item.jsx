import shadow from "../../assets/Group-1/Image/Shadow.png"

const Item = ({name, details, price, image}) => {
  return (
    <div className='text-center p-4'>
      <img className='h-56 mx-auto ' src={image} alt="Burger Image" />
      <img className="border-black mx-auto -mt-10" src={shadow} alt="" />
      <h3>{name}</h3>
      <p>{details}</p>
      <p>{price}</p>

      <button className="btn ">ORDER NOW</button>
      <div className="divider w-10/12 mx-auto"></div>
    </div>
  );
};

export default Item;

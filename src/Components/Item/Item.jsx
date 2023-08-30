import burger1 from '../../assets/Group-3/Image/Image.png'

const Item = () => {
  return (
    <div className='text-center'>
      <img src={burger1} alt="Burger Image" />
      <h3>BEEF BURGER</h3>
      <p>Lorem ipsum dolor sit amet.</p>
      <button className="btn ">ORDER NOW</button>
    </div>
  );
};

export default Item;

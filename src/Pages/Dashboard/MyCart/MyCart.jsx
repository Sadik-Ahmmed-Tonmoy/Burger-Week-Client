import axios from "axios";
import CartItemList from "../../../Components/CartItemList/CartItemList";
import useCart from "../../../hooks/useCart/useCart";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider/AuthProvider";

const MyCart = () => {
  const [cart] = useCart();
  const { user } = useContext(AuthContext)
  const parseTotal = cart.reduce((sum, item) => sum + parseFloat(item.price), 0);
  const total = parseTotal.toFixed(2)
  const paymentDetails = { total, name:user?.displayName, email: user?.email }
  const handlePayment = () => {
    axios.post("https://burger-week-server.vercel.app/order", paymentDetails).then((result) => {
      console.log(result.data);
      window.location.replace(result.data.url)
    });
  };

  return (
    <>
      <div className="flex justify-around w-full">
        {" "}
        <h3 className="text-3xl">Total Items: {cart?.length}</h3>
        <h3 className="text-3xl">
          Total Price: <span className="text-orange-500"> ${total}</span>
        </h3>
      </div>
      <button
        onClick={() => handlePayment()}
        className="btn text-center btn-primary my-6"
      >
        Pay Now
      </button>
      {cart.map((item) => (
        <CartItemList key={item._id} item={item} />
      ))}
    </>
  );
};

export default MyCart;

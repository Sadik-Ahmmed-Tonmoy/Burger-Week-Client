import axios from "axios";
import CartItemList from "../../../Components/CartItemList/CartItemList";
import useCart from "../../../hooks/useCart/useCart";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider/AuthProvider";

const MyCart = () => {
  const [cart] = useCart();
  const { user } = useContext(AuthContext)
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const paymentDetails = { total, name:user.displayName, email: user.email }
  const handlePayment = () => {
    axios.post("http://localhost:5000/order", paymentDetails).then((result) => {
      console.log(result.data);
      window.location.replace(result.data.url)
    });
  };

  return (
    <>
      <div className="flex justify-around w-full">
        {" "}
        <h3 className="text-3xl">Total Items: {cart.length}</h3>
        <h3 className="text-3xl">
          Total Price: <span className="text-orange-500"> ${total}</span>
        </h3>
      </div>
      {cart.map((item) => (
        <CartItemList key={item._id} item={item} />
      ))}
      <button
        onClick={() => handlePayment()}
        className="btn text-center btn-primary"
      >
        Pay Now
      </button>
    </>
  );
};

export default MyCart;

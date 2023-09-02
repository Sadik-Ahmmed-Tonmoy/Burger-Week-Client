import CartItemList from "../../../Components/CartItemList/CartItemList";
import useCart from "../../../hooks/useCart/useCart";



const MyCart = () => {
    const [cart] = useCart();
const total = cart.reduce((sum, item) => sum + item.price, 0)

    return (
        <>
       <div className="flex justify-around w-full"> <h3 className="text-3xl">Total Items: {cart.length}</h3>
        <h3 className="text-3xl">Total Price: <span className="text-orange-500"> ${total}</span></h3></div>
            {
                cart.map((item) => <CartItemList key={item._id} item={item}/>)
            }
        </>
    );
};

export default MyCart;
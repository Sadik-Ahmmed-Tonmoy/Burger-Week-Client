import CartItemList from "../../../Components/CartItemList/CartItemList";
import useCart from "../../../hooks/useCart/useCart";



const MyCart = () => {
    const [cart] = useCart();
console.log(cart);

    return (
        <>
            {
                cart.map((item) => <CartItemList key={item._id} item={item}/>)
            }
        </>
    );
};

export default MyCart;
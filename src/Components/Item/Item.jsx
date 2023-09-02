import { useContext } from "react";
import shadow from "../../assets/Group-1/Image/Shadow.png"
import { AuthContext } from './../../providers/AuthProvider/AuthProvider';
import axios from "axios";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart/useCart";

const Item = ({item}) => {
  const {name, description, price, image, _id} = item;
 const {user} = useContext(AuthContext)

 const [, refetch ] = useCart()

 const navigate = useNavigate();
 const location = useLocation()
 
  const handleAddToCart = () => {

if(user){
  const orderItem = {
    name, description, price, image, itemId: _id, email: user?.email
  }
axios.post('http://localhost:5000/carts', orderItem).then((response) => {
  if(response.data.insertedId){
    refetch()
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Item Added',
      showConfirmButton: false,
      timer: 1500
    })
  }
  
})
}
else{
  Swal.fire({
    title: 'Please login to add to cart',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Login'
  }).then((result) => {
    if (result.isConfirmed) {
      navigate("/login", {state: {from: location}})
    }
  })
}
  }
  return (
    <div className='text-center p-4'>
      <img className='h-56 mx-auto ' src={image} alt="Burger Image" />
      <img className="border-black mx-auto -mt-10" src={shadow} alt="" />
      <h3 className="font-semibold text-xl">{name}</h3>
      <p>{description}</p>
      <p className="text-3xl mb-2 text-orange-600">${price}</p>

      <button onClick={() => handleAddToCart()} className="btn ">ORDER NOW</button>
      <div className="divider w-10/12 mx-auto"></div>
    </div>
  );
};

export default Item;

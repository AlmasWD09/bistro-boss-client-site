import PropTypes from 'prop-types';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2'
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useCart from '../../hooks/useCart';




const FoodCurd = ({item}) => { 
    const{user} = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const axiosSecure = useAxiosSecure()
    const [, refetch] = useCart();
    const{_id,image,name,price,description} = item || {}


    const handleAddToCurd = () =>{
       if(user && user.email){
        const cartItem = {
            menuId: _id,
            email: user.email,
            name,
            image,
            price
        }

        axiosSecure.post('/carts/api/create', cartItem)
        .then(res => {
            console.log(res.data)
            if (res.data.insertedId) {
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: `${name} added to your cart`,
                    showConfirmButton: false,
                    timer: 1500
                });
                // refetch cart to update the cart items count
                refetch();
            }

        })
}
      else{
        Swal.fire({
            title: "You are not logged in?",
            text: "please login and to cart add!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, login!"
          }).then((result) => {
            if (result.isConfirmed) {
                navigate('/login', { state: { from: location } })
            }
          });
      }
    }
    return (
        <div>
        <div className="h-[420px] overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <div className="relative">
            <img className="object-cover w-full h-60" src={image} alt={name}/>
            <p className="bg-black text-white w-max px-3 absolute z-20 top-3 right-3 ">${price}</p>
            </div>
                <div className="py-5 text-center">
                    <h3 className="block text-xl font-bold text-gray-800 dark:text-white">{name}</h3>
                    <span className="text-sm text-gray-700 dark:text-gray-200">{description}</span>
                </div>
                <div className='flex justify-center mb-4'>
                    <button 
                    onClick={()=>handleAddToCurd(item)}
                    className='btn'>Add to curd</button>
                </div>
        </div>
    </div>
    );
};
// props-type validation
FoodCurd.propTypes = {
    item: PropTypes.object,
};
export default FoodCurd;
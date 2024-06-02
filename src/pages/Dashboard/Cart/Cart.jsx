import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const Cart = () => {
    const [cart, refetch] = useCart();
    const axiosSecure = useAxiosSecure()

    const totalPrice = cart.reduce((total,item)=>{
        return total+item.price
    },0)


    // delete cart
    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/carts/api/delete/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (
        <div>
        <div className="bg-gray-400 mx-8 px-6">
         <SectionTitle subheading={'My Cart'} heading={'Wanna And More?'}/>
        </div>
        <div className="overflow-x-auto bg-gray-300 mx-8 p-6">
           <div className="flex items-center lg:gap-20 my-4">
           <h1 className="uppercase text-xl font-semibold">Total Orders:{cart.length}</h1>
            <h1 className="uppercase text-xl font-semibold">Total Price: ${totalPrice}</h1>
            <button className="btn">pay</button>
           </div>

            <table className="table  w-full">
                {/* head */}
                <thead>
                    <tr className="bg-red-300  text-lg text-white">
                        <th>
                         
                        </th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map((item, index) => <tr key={item._id}>
                            <th>
                                {index + 1}
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {item.name}
                            </td>
                            <td>${item.price}</td>
                            <th>
                                <button
                                    onClick={() => handleDelete(item._id)}
                                    className="btn btn-ghost btn-lg">
                                    <FaTrashAlt className="text-red-600"></FaTrashAlt>
                                </button>
                            </th>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default Cart;
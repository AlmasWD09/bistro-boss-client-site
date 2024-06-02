import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import useAxiosPublic from "../../hooks/useAxiosPublic";
// import { FaGithub } from "react-icons/fa";



const SocialLogin = () => {
    const {googleLogin} = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";


    const handleSocialLogin = async(media) =>{
         try {
            await media()
            .then(result=>{
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName
                }
                axiosPublic.post('/user/api/create', userInfo)
                .then(res =>{
                    console.log(res.data);
                    toast.success(' login successfull')
                    navigate(from, { replace: true });
                })
            })

        } catch (error) {
            toast.error("Login failed:", error)
        }
    }
    return (
        <>
        <div>
             <div className="divider">OR</div>
            <div className="space-y-3">

            <div className="flex items-center">
            <button
            onClick={()=>handleSocialLogin(googleLogin)}
            className="btn w-full ">
                <span className="text-2xl"><FcGoogle /></span>
                 Continue with Google
                 </button>
            </div>

            {/* <div className="flex items-center">
            <button
            onClick={()=>handleSocialLogin(githubLogin)}
            className="btn w-full ">
                <span className="text-2xl"><FaGithub /></span>
                 Continue with Github
                 </button>
            </div> */}
            </div>
        </div>
        </>
    );
};

export default SocialLogin;
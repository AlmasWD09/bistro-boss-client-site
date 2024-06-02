import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import useAuth from "../../hooks/useAuth";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import SocialLogin from "../SocialLogin/SocialLogin";


const Login = () => {
    const { logIn } = useAuth()
    // const [captchaValue, setCaptchaValue] = useState("");
    // const [disabled, setDisabled] = useState(true)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

console.log(location.state);


    // useEffect(() => {
    //     loadCaptchaEnginge(6);
    // })

    // handle login form value
    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        const userInfo = { email, password }

        logIn(email, password)
            .then(result => {
                console.log(result.user);
                toast.success('Login successfull')
                navigate(from, { replace: true });
            })
            .then(err => {
                console.log(err);
            })}


    // valided capthch
    // const handleCaptchaBlur = (e) => {
    //     const captchar_value = e.target.value;
    //     setCaptchaValue(captchar_value);

    //     if (captchar_value.length === 6 && validateCaptcha(captchar_value)) {
    //         setDisabled(false);
    //     } else {
    //         setDisabled(true);
    //     }
    // };

    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Login</title>
            </Helmet>
            <section className="bg-white dark:bg-gray-900">
                <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">

                    <form onSubmit={handleLogin} className="w-full max-w-md shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-8 rounded-lg">
                        <div className="">
                            <h2 className=" pb-4 font-medium text-center text-gray-800 capitalize border-blue-500 dark:border-blue-400 dark:text-white">Please Login</h2>
                        </div>
                        <div className="relative flex items-center mt-6">
                            <span className="absolute">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </span>

                            <input type="email" name="email" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email address" />
                        </div>

                        <div className="relative flex items-center mt-4">
                            <span className="absolute">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </span>

                            <input type="password" name="password" className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Password" />
                        </div>

                        {/* react captcha */}
                        {/* <div className="mt-4">
                            <p><LoadCanvasTemplate /></p>
                            <input onBlur={handleCaptchaBlur} type="text" name="captcha" className="w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Type the captcha above" />
                        </div> */}

                        <div className="mt-6">
                            {/* <button disabled={disabled} type="submit" className="disabled:bg-gray-200 w-full disabled:cursor-not-allowed px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg ">
                                Login
                            </button> */}
                            <button  type="submit" className="disabled:bg-gray-200 w-full disabled:cursor-not-allowed px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg ">
                                Login
                            </button>

                            <div className="mt-6 text-center ">
                                <p className="text-sm ">Already have an account?
                                    <Link to='/signUp' className="text-blue-500 font-semibold dark:text-blue-400"> SignUp</Link> </p>
                            </div>
                        </div>
                <SocialLogin />
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Login;
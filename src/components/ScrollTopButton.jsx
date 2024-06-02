import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

const ScrollTopButton = () => {
    const [backTopBtn,setBackTopBtn] = useState(false);

    useEffect(()=>{
       const btnControl = ()=>{
        if(window.scrollY> 200){
            setBackTopBtn(true)
        }else{
            setBackTopBtn(false)

        }
        
       }
       window.addEventListener('scroll', btnControl)

       return ()=>{
        window.removeEventListener('scroll', btnControl)
       }

    },[])

    const top = () =>{
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }
    return (     <>
        {
            backTopBtn && <div onClick={top} className="animate-bounce w-[50px] h-[50px] rounded-full  bg-primary flex justify-center items-center text-center text-white fixed right-[5px] md:right-[40px] bottom-[40px]">
            <IoIosArrowUp className="text-3xl flex justify-center items-center text-center"/></div>
   
        }
        </>
        
    );
};

export default ScrollTopButton;
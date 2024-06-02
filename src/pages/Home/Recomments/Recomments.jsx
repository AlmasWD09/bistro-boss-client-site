import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import RecommentsItems from "./RecommentsItems";



const Recomments = () => {
    const[categorys,setCategorys] = useState([])

    useEffect(()=>{
        fetch('./recomments.json')
        .then(res=>res.json())
        .then(data=>setCategorys(data))
    },[])
    return (
        <div>
            <SectionTitle 
            subheading={'Should Try'}
            heading={'CHEF RECOMMENDS'}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {
                categorys.map((category,idx)=><RecommentsItems
                key={idx}
                category={category}
                ></RecommentsItems>)
              }
            </div>
        </div>
    );
};

export default Recomments;
import axios from "axios";
import { useState } from "react";
import SubFvrt from "./SubFvrt";


const MyShop = () => {
    const [data, setData]=useState([])
    axios.get("https://my-kitchen-server-zeta.vercel.app/addcart")
    .then(data=>{
        // console.log(data);
        setData(data.data)
    })
    // console.log("jhcj", data);
    return (
        <div className="pt-24">
           <h3 className="text-red-500 text-3xl text-center mb-5">My Cart</h3>
           <div>
            {
                data?.map((m,i)=><SubFvrt key={m._id} main={m} i={i}></SubFvrt>)
            }
            </div> 
        </div>
    );
};

export default MyShop;
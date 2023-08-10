import axios from "axios"
import { useState } from "react";
import SubFvrt from "./SubFvrt";

const MyFavorite = () => {
    const [data, setData]= useState([]);
    axios.get("https://my-kitchen-server-zeta.vercel.app/fvr")
    .then(data=>{
        // console.log("dd", data.data);
        setData(data?.data)
    })
    return (
        <div className="pt-20">
            <h2 className="text-3xl font-semibold text-center mt-4">My Favorite item</h2>
            <div>
                {
                    data?.map((m,i)=><SubFvrt key={m._id} main={m} i={i}></SubFvrt>)
                }
            </div>
        </div>
    );
};

export default MyFavorite;
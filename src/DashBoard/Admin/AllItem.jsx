import { useEffect, useState } from "react";
import SubCollection from "../../Home/SubCollection";


const AllItem = () => {
    const [data, setData] = useState()
    useEffect(()=>{
        fetch("https://my-kitchen-server-anirbanbanai.vercel.app/nilufood")
        .then(res=>res.json())
        .then(data=>{
            setData(data)
        })
    },[])
    console.log(data);
    return (
        <div>
            <div className=" grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 p-10 ">
           {
                data?.map(m=><SubCollection key={m.img} m={m}></SubCollection>
                )
            }
           </div>
        </div>
    );
};

export default AllItem;
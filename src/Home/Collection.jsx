import { useEffect, useState } from "react";
import SubCollection from "./SubCollection";

const Collection = () => {
    const [collection, setCollection] = useState()
    useEffect(()=>{
        fetch("http://localhost:5000/nilufood")
        .then(res=> res.json())
        .then(data=>
            setCollection(data)
            )
    },[])
    // console.log(collection);
    return (
        <div className="nnn pt-10">
            <h3 className="text-4xl font-semibold text-center">This is collection</h3>
           <div className=" grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 p-10 ">
           {
                collection?.slice(0,8).map(m=><SubCollection key={m.img} m={m}></SubCollection>
                )
            }
           </div>
        </div>
    );
};

export default Collection;
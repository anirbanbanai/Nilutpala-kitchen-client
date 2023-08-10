import { useEffect, useState } from "react";
import SubAllItem from "./SubAllItem";


const AllItem = () => {
    const [data, setData] = useState()
    useEffect(() => {
        fetch("https://my-kitchen-server-anirbanbanai.vercel.app/nilufood")
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
    }, [])
    // console.log(data);
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Condition</th>
                        </tr>
                    </thead>
            
                        {
                            data?.map((m, i) => <SubAllItem key={m.id} main={m} i={i}></SubAllItem>)
                        }
                    
                </table>
            </div>

        </div>
    );
};

export default AllItem;
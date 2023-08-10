// import axios from "axios"

const SubAllItem = ({ main, i }) => {
    // const handleDelete = (id) => {
    //     axios.delete("https://my-kitchen-server-zeta.vercel.app/niludelete", id)
    //         .then(res => {
    //             console.log(res);
    //         })
    // }

    return (
        <>
            <tbody>
                <tr>
                    <th>
                        {i + 1}
                    </th>

                    <td>
                        {main.description}
                    </td>

                    <td>
                        <img className="w-28" src={main.img} alt="" />
                    </td>

                    <td>
                        ${main.price}
                    </td>
                    <th>
                        {/* <button onClick={() => handleDelete(main.id)} className="btn bg-red-500"> Delete</button> */}
                    </th>
                </tr>
            </tbody>
        </>
    );
};

export default SubAllItem;
import { useForm } from "react-hook-form";
import Bttnn from "../../Components/Bttnn";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../Auth/AuthProvider";


const AddClass = () => {
    const { user } = useContext(AuthContext)

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post("https://my-kitchen-server-anirbanbanai.vercel.app/nilufood", data)
            .then(res => {
                console.log(res);
            })
    };
    return (
        <div className=" pt-5">
            <form onSubmit={handleSubmit(onSubmit)} className="w-3/4 mx-auto nnn5 p-10">
                <h1 className="text-4xl font-bold text-center text-red-500">Add Item</h1>
                <div className="md:flex gap-5">
                    <div className="form-control w-full  ">
                        <label className="label">
                            <span className="label-text text-2xl font-semibold">Name</span>
                        </label>
                        <input

                            {...register("name", { required: true })}

                            type="text" placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full  ">
                        <label className="label">
                            <span className="label-text text-2xl font-semibold">Catagory</span>
                        </label>
                        <input
                            {...register("catagory", { required: true })}
                            type="text" placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                </div>
                <div className="form-control w-full  ">
                    <label className="label">
                        <span className="label-text text-2xl font-semibold">Price</span>
                    </label>
                    <input
                        {...register("price", { required: true })}
                        type="number" placeholder="Type here" className="input input-bordered w-full max-w-sm " />
                </div>
                <div className="form-control w-full  ">
                    <label className="label">
                        <span className="label-text text-2xl font-semibold">Img</span>
                    </label>
                    <input
                        {...register("img", { required: true })}
                        type="text" placeholder="Type here" className="input input-bordered w-full max-w-sm " />
                </div>
                <div className="form-control w-full  ">
                    <label className="label">
                        <span className="label-text text-2xl font-semibold">Description</span>
                    </label>
                    <input
                        {...register("description", { required: true })}
                        type="text" placeholder="Type here" className="input input-bordered w-full " />
                </div>
                <div className="mt-5 flex justify-center">
                    <input type="file" className="file-input file-input-bordered file-input-warning w-full max-w-xs" />
                </div>
                <div className="flex justify-center">
                    {user ? <Bttnn>Add Item</Bttnn> : <div>
                        <button className="btn btn-warning mt-3" disabled="disabled">Add Item</button>
                        {!user && <h2 className="text-red-500 text-center font-bold"> Login First for add item !!</h2>}
                    </div>
                    }
                </div>
            </form>
        </div>
    );
};

export default AddClass;
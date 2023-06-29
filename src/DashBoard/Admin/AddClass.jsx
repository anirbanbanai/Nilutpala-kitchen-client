import Bttnn from "../../Components/Bttnn";


const AddClass = () => {
    return (
        <div className=" pt-5">
            <form className="w-3/4 mx-auto nnn5 p-10">
                <h1 className="text-4xl font-bold text-center text-red-500">Add Item</h1>
               <div className="flex gap-5">
               <div className="form-control w-full  ">
                    <label className="label">
                        <span className="label-text text-2xl font-semibold">Name</span>
                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full  ">
                    <label className="label">
                        <span className="label-text text-2xl font-semibold">Catagory</span>
                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full " />
                </div>
               </div>
                <div className="form-control w-full  ">
                    <label className="label">
                        <span className="label-text text-2xl font-semibold">Price</span>
                    </label>
                    <input type="number" placeholder="Type here" className="input input-bordered w-full max-w-sm " />
                </div>
                <div className="form-control w-full  ">
                    <label className="label">
                        <span className="label-text text-2xl font-semibold">Description</span>
                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full " />
                </div>
                <div className="mt-5 flex justify-center">
                <input type="file" className="file-input file-input-bordered file-input-warning w-full max-w-xs" />
                </div>
                <div className="flex justify-center">
                <Bttnn>Add</Bttnn>
                </div>
            </form>
        </div>
    );
};

export default AddClass;
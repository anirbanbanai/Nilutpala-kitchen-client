import { Link, Outlet } from "react-router-dom";


const DashBoard = () => {
    return (
        <div>
        <h3 className="text-4xl font-semibold text-center mb-5 mt-5">This is dashboard</h3>

        <div className="flex w-full">
            <div className="flex justify-center  flex-grow card bg-yellow-300 rounded-box place-items-center p-3">

                        <Link className="text-2xl mr-5 mb-2 font-semibold" to="/dash/addclass" >Add Item</Link>
                        <Link className="text-2xl mr-5 mb-2 font-semibold" to="/dash/allitem" >All Item</Link> 

            </div>
            <div className="divider divider-horizontal">And</div>
            <div className="flex flex-grow card bg-base-300 rounded-box place-items-center">
                <Link to='/' className="text-xl font-semibold mb-2">Home</Link>
                <Link className="text-xl font-semibold" to='/shopbycatagory'>Shop</Link>
            </div>
        </div>
        <div>


            <div>
                <Outlet></Outlet>
            </div>


            <div className="divider divide-x-8"></div>



        </div>
    </div>
    );
};

export default DashBoard;
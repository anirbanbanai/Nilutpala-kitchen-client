import { Link } from "react-router-dom";
import Bttnn from "../Components/Bttnn";
import { useContext, useState } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import { useForm } from "react-hook-form";


const Login = () => {
    const [success, setSuccess] = useState(" ")
    const {loginUser, } = useContext(AuthContext)
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        loginUser(data.email, data.password)
            .then(data => {
                console.log(data);
                setSuccess('User login successfull')
            })
    };
    return (
        <div className="pt-24">
             <h2 className="text-5xl font-bold text-center">Login Now</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="w-2/4 mx-auto nnn3 p-10">
              
               <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text text-xl font-semibold">Email</span>
                       
                    </label>
                    <input  {...register("email", { required: true })} type="email" placeholder="Your Email" className="input input-bordered w-full " />
                </div>
               <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text text-xl font-semibold">Confirm Password</span>
                       
                    </label>
                    <input  {...register("password", { required: true })} type="password" placeholder=" Password" className="input input-bordered w-full " />
                </div>
               

                <div className="flex items-center justify-center">
                <Bttnn className="mx-auto">Submir</Bttnn>
                </div>
               <h3 className="text-green-500 text-center">{success}</h3>
            <h3 className="text-center">Already have an accunt? <Link to='/register'>Register</Link></h3>
            </form>
        </div>
    );
};

export default Login;
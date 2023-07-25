
import { FcLike, FcLikePlaceholder, FcShop, FcSynchronize, } from 'react-icons/fc';
import Bttnn from '../Components/Bttnn';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from "axios"

const SubCollection = ({ m }) => {
    const { description, img, price } = m;
    const [fal, setFal] = useState(false);

    const makeFv= ()=>{
        axios.post('http://localhost:5000/fv',m)
        .then(res=>{
            console.log(res);
        })
    }
    const removeFv= ()=>{

    }

    return (
        <div>
            <div className="nnn5 p-8 text-center">
                <div>
                    <img className="rounded-2xl w-full  h-52 sm:h-44 md:h-32" src={img} alt="" />
                    <h3 className="mt-3 font-semibold">{description}</h3>
                    <p>${price}</p>

                    <div className='flex mt-3'>

                        <div onClick={makeFv}>
                            {fal && <FcLike onClick={() => setFal(!fal)} className='text-5xl fontbold mx-auto' />}
                        </div>

                        <div onClick={removeFv}>
                            {!fal && <FcLikePlaceholder onClick={() => setFal(!fal)} className='text-5xl fontbold mx-auto' />}
                        </div>

                        <FcShop className='text-5xl fontbold mx-auto' />
                        <button>
                            <Link to='/dash/update'>   <FcSynchronize className='text-5xl fontbold mx-auto' /></Link>
                        </button>
                    </div>
                    <Bttnn>
                       Add to Cart
                    </Bttnn>

                </div>
            </div>
        </div>

    );
};

export default SubCollection;
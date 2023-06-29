
import { FcLike, FcLikePlaceholder, FcShop, FcSynchronize, } from 'react-icons/fc';
import Bttnn from '../Components/Bttnn';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const SubCollection = ({ m }) => {
    const { description, img, price } = m;
    const [fal, setFal] = useState(false);
    
    return (

        // <div className="book mx-auto">
        //     <div>

        //         <Bttnn className="mx-auto">Order Now</Bttnn>
        //     </div>
        //     <FcShop className='text-5xl' />
        //     <div className="cover p-8 text-center">
        //         <div>
        //             <img className="rounded-2xl w-full" src={img} alt="" />
        //             <h3 className="mt-3 font-semibold">{description}</h3>
        //             <p>{price}</p>


        //             <Bttnn>
        //              Buy Now
        //             </Bttnn>
        //             <FcRight className='text-5xl fontbold mx-auto' />
        //         </div>
        //     </div>
        // </div>

        <div>
            <div className="nnn5 p-8 text-center">
                <div>
                    <img className="rounded-2xl w-full" src={img} alt="" />
                    <h3 className="mt-3 font-semibold">{description}</h3>
                    <p>${price}</p>

                    <div className='flex mt-3'>
                       {fal && <FcLike onClick={()=>setFal(!fal)} className='text-5xl fontbold mx-auto' />}
                       {!fal && <FcLikePlaceholder onClick={()=>setFal(!fal)} className='text-5xl fontbold mx-auto' />}

                       {/* {!fal && <FcLikePlaceholder onClick={remove1} className='text-5xl fontbold mx-auto' />} */}

                        <FcShop className='text-5xl fontbold mx-auto' />
                        <button>
                            <Link to='/dash/update'>   <FcSynchronize className='text-5xl fontbold mx-auto' /></Link>
                        </button>
                    </div>
                    <Bttnn>
                        Buy Now
                    </Bttnn>
                  
                </div>
            </div>
        </div>

    );
};

export default SubCollection;
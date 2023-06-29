
import { FcShop,  } from 'react-icons/fc';
import Bttnn from '../Components/Bttnn';

const SubCollection = ({ m }) => {
    const { description, img, price } = m;
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


                    <Bttnn>
                     Buy Now
                    </Bttnn>
                    <FcShop className='text-5xl fontbold mx-auto' />
                </div>
            </div>
        </div>

    );
};

export default SubCollection;
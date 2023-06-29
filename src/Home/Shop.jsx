import { FcShipped, FcSynchronize, FcPrivacy, FcApproval } from 'react-icons/fc';
import { Element } from 'react-scroll';
// import { MdSecurity } from 'react-icons/md';
// import { GiReturnArrow } from 'react-icons/gi';

const Shop = () => {
    return (
        <Element  id='foot' name="foot">
            <div className="grid md:grid-cols-2 gap-10 mx-auto nnn p-10 ">
                <div className='book mx-auto'>
                    <FcApproval className='text-6xl' />
                    <div className='cover'>
                        <div>
                            <FcApproval className='text-6xl' />
                        </div>
                        <h2>100% Quality</h2>
                    </div>
                </div>
                <div className='book mx-auto'>
                    <FcShipped className='text-6xl ' />
                    <div className='cover'>
                        <div className=''>
                            <FcShipped className='text-6xl ' />
                        </div>
                        <h2>Free Delivery</h2>
                    </div>
                </div>
                <div className='book mx-auto'>
                    <FcSynchronize className='text-6xl' />
                    <div className='cover'>
                        <div>
                            <FcSynchronize className='text-6xl' />
                        </div>
                        <h2>Easy Return</h2>
                    </div>
                </div>
                <div className='book mx-auto'>
                    <FcPrivacy className='text-6xl' />
                    <div className='cover'>
                        <div>
                            <FcPrivacy className='text-6xl' />
                        </div>
                        <h2>Securuty Payment</h2>
                    </div>
                </div>
            </div>
        </Element>
    );
};

export default Shop;
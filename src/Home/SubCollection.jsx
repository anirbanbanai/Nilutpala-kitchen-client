
import { FcLike, FcLikePlaceholder, FcSynchronize, } from 'react-icons/fc';
// import Bttnn from '../Components/Bttnn';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from "axios"
import Swal from 'sweetalert2';

const SubCollection = ({ m }) => {
    
    const { description, img, price } = m;
    const [fal, setFal] = useState(false);

    const removeFv= (id)=>{
     console.log(id);
     axios.delete(`http://localhost:5000/fvdel/${id}`)
     .then(data=>{
        console.log(data);
        if(data.data.acknowledged === true){
            Swal.fire({
                position: 'top',
                icon: 'success',
                title: 'removed!!',
                showConfirmButton: false,
                timer: 1500
              })
        }
     })
        
    }
    const makeFv= ()=>{
        axios.post('http://localhost:5000/fv',m)
        .then(res=>{
            console.log(res);
            if(res.data.acknowledged === true){
                Swal.fire({
                    position: 'top',
                    icon: 'success',
                    title: 'Favorite!!',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
       
    }

    const handleSwal =()=>{
      
        Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'This item has been saved',
            showConfirmButton: false,
            timer: 1500
          })
    }

    return (
        <div>
            <div className="nnn5 p-8 text-center">
                <div>
                    <img className="rounded-2xl w-full  h-52 sm:h-44 md:h-32" src={img} alt="" />
                    <h3 className="mt-3 font-semibold">{description}</h3>
                    <p>${price} g</p>

                    <div className='flex justify-between mt-3'>

                        <div onClick={()=>removeFv(m._id)}>
                            {fal && <FcLike onClick={() => setFal(!fal)} className='text-5xl fontbold mx-auto' />}
                        </div>

                        <div onClick={makeFv}>
                            {!fal && <FcLikePlaceholder onClick={() => setFal(!fal)} className='text-5xl fontbold mx-auto' />}
                        </div>
                        <button>
                            <Link to='/dash/update'>   <FcSynchronize className='text-5xl fontbold mx-auto' /></Link>
                        </button>
                    </div>
                    <button className='btn btn-warning mt-3' onClick={handleSwal}>Add To Cart</button>

                    {/* <Bttnn onClick={handleSwals}>
                       Add to Cart
                    </Bttnn> */}

                </div>
            </div>
        </div>

    );
};

export default SubCollection;
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import img1 from '../assets/img/IMG-20230418-WA0001.jpg'
import img2 from '../assets/img/IMG-20230418-WA0003.jpg'
import img3 from '../assets/img/IMG-20230418-WA0004.jpg'
import img4 from '../assets/img/IMG-20230418-WA0005.jpg'
import img5 from '../assets/img/IMG-20230418-WA0006.jpg'
import { Pagination } from "swiper";

const Section = () => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      };
    return (
        <div>
            <>
                <Swiper
                    pagination={pagination}
                    modules={[Pagination]}
                    className="mySwiper nnn3 m-8"
                >
                    <SwiperSlide className="p-10 ">
                        <img className="h-[400px] mt-5 mx-auto rounded-2xl" src={img1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="p-10 ">
                        <img className="h-[400px] mt-5 mx-auto rounded-2xl" src={img2} alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="p-10 ">
                        <img className="h-[400px] mt-5 mx-auto rounded-2xl" src={img3} alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="p-10 ">
                        <img className="h-[400px] mt-5 mx-auto rounded-2xl" src={img4} alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="p-10 ">
                        <img className="h-[400px] mt-5 mx-auto rounded-2xl" src={img5} alt="" />
                    </SwiperSlide>
                </Swiper>
            </>
        </div>
    );
};

export default Section;
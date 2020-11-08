import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore , { Navigation } from 'swiper';
SwiperCore.use([Navigation])
// row galery 
const RowGalery = ()=>{
    return <Swiper slidesPerView={4} breakpoints={{
      1000: {
        slidesPerView: 4,
      
      },
      768: {
        slidesPerView: 3,
      },
      360: {
        slidesPerView: 1,
      },
    }}  loop className="inline_galery space_top">
        <SwiperSlide className="item_galery">
          <img src="/img/galery/1.JPG" alt="" />
        </SwiperSlide>
        <SwiperSlide className="item_galery">
          <img src="/img/galery/2.JPG" alt="" />
        </SwiperSlide>
        <SwiperSlide className="item_galery">
          <img src="/img/galery/3.JPG" alt="" />
        </SwiperSlide>
        <SwiperSlide className="item_galery">
          <img src="/img/galery/4.JPG" alt="" />
        </SwiperSlide>
    </Swiper>
}


export default RowGalery;
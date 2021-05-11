import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from 'swiper';
import 'swiper/swiper-bundle.css';
import './styles.css';
import {motion} from 'framer-motion';
import {SlideData} from './../../data/SlideData';


SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);

function Slider() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [controlledSwiper, setControlledSwiper] = useState(null);


  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  const Slider2 =  SlideData.map((data) => (
    <>
     <SwiperSlide key={data.id} tag="li">
       <img
          src={data.path}
          style={{ listStyle: 'none' }}
          alt={`Slide ${data.id}`}
        />
      </SwiperSlide>
    </>
  ))


  return (
    <>
      <motion.div
       initial="hidden"
       animate="visible"
       variants={variants}
       transition={{ duration: 1.3 }}
       >
      <Swiper
        id="main"
        thumbs={{ swiper: thumbsSwiper }}
        controller={{ control: controlledSwiper }}
        tag="section"
        wrapperTag="ul"
        navigation
        pagination
        spaceBetween={0}
        slidesPerView={1}
        onInit={(swiper) => console.log('Swiper initialized!', swiper)}
        onSlideChange={(swiper) => {
          console.log('Slide index changed to: ', swiper.activeIndex);
        }}
        onReachEnd={() => console.log('Swiper end reached')}
        autoplay={true}
      >
        {/* <Slides/> */}
        {Slider2}
      </Swiper>

      <Swiper
        id="thumbs"
        spaceBetween={5}
        slidesPerView={3}
        onSwiper={setThumbsSwiper}
      >
      </Swiper>
      </motion.div>
    </>
  );
}

export default Slider;
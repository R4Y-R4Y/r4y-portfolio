// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion, useInView } from "framer-motion"
import ReactCardFlip from "react-card-flip";
// Import Swiper styles
import 'swiper/css';
import { jobs, skills } from '@/ts/skills';
import { Suspense, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';

const Carousel = () => {
  const [current, setCurrent] = useState(1)
  // create array of refs for each slide
  const refs = Array(jobs.length).fill(0).map((_, i) => useRef(null))
  // inView hook for each slide
  const inViews = refs.map((ref) => useInView(ref))
  return (
    <Swiper
      className='w-screen'
      spaceBetween={50}
      slidesPerView={1}
      navigation={true}
      breakpoints={{
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
      onSlideChange={(cur) => setCurrent(cur.activeIndex)}
    >
      {
        jobs.map((job,i) => 
        <SwiperSlide key={i}>
          <motion.div
            ref={refs[i]}
            className='h-96 flex justify-center'
          >
            <motion.div
              className='cursor-pointer border-b-4 rounded-md bg-gradient-to-t from-white/20 text-center px-3 py-7 self-end'
              >
              <h3>{job.name}</h3>
              <div className='w-80 h-36'>
                {inViews[i] ? <Canvas>
                  <Suspense fallback={null}>
                    <job.scene/>
                  </Suspense>
                </Canvas>: null}
              </div>
              <p className='mt-3'></p>
            </motion.div>
          </motion.div>
        </SwiperSlide>
        )
      }
      
    </Swiper>
  );
};

export default Carousel
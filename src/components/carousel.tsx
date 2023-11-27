// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion, useInView } from "framer-motion"
// Import Swiper styles
import 'swiper/css';
import { Job, jobs} from '@/ts/skills';
import { Suspense, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { IconContext } from "react-icons"
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper as SwiperType } from 'swiper/types';

const Carousel = () => {
  const swiperRef = useRef<SwiperType>();
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar]}
        className='w-screen mt-10'
        spaceBetween={50}
        slidesPerView={1}
        onBeforeInit={(swiper) => { swiperRef.current = swiper; }}
        pagination={{
          enabled: true,
          clickable: true,
        }}
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
        
      >
        {
          jobs.map((job,i) => 
          <SwiperSlide key={i}>
            <motion.div className='h-96 flex justify-center'>
              <Slide job={job}/>
            </motion.div>
          </SwiperSlide>
          )
        }
        <div onClick={() => swiperRef.current?.slideNext()} 
          className="swiper-button-next after:[display:none]">
          <IconContext.Provider value={{color: "#ec13e8", size:'70px'}}>
            <div>
              <IoIosArrowDroprightCircle />
            </div>
          </IconContext.Provider>
        </div>
        <div onClick={() => swiperRef.current?.slidePrev()} 
          className="swiper-button-prev after:[display:none]">
          <IconContext.Provider value={{color: "#ec13e8", size:'70px'}}>
            <div>
              <IoIosArrowDropleftCircle />
            </div>
          </IconContext.Provider>
        </div>
      </Swiper>
    </>
  );
};

function Slide({job}: {job: Job}){
  // ref and inView hook for each slide
  const [clicked, setClicked] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref)
  return(
    <motion.div onClick={() => setClicked(!clicked)} ref={ref} className='cursor-pointer border-b-4 border-secondary-600 rounded-md bg-gradient-to-t from-primary-700/20 text-center px-3 py-7 self-end items-center' >
      <h3>{job.name}</h3>
      <div className='w-80 h-36 contents'>
        {inView ? <Canvas>
          <Suspense fallback={null}>
            <job.scene/>
          </Suspense>
        </Canvas>: null}
      </div>
      <ul className='mt-3 list-disc list-inside'>
        {job.description.map((desc, i) => 
          <li key={i}>{desc}</li>
        )}
      </ul>      
    </motion.div>
  )
}



export default Carousel
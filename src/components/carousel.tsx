// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { skills } from '@/ts/skills';

export default () => {
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
      onSlideChange={() => console.log('slide change')}
    >
      {
        skills.map((skill,i) => 
          <SwiperSlide key={i}>
            <div className='h-96 flex justify-center'>
              <div className='w-72 h-60 cursor-pointer border-b-4 rounded-md bg-gradient-to-t from-white/20 text-center px-3 py-7 self-end'>
                <div className='text-5xl mt-2 max-w-[5rem] mx-auto min-w-[5rem] min-h-[5rem] rounded-full grid place-items-center'>
                  A
                </div>
                <h3>{skill.name}</h3>
                <p className='mt-3'>
                  {skill.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        )
      }
      <SwiperSlide>
        <div className='h-96 flex justify-center'>
          <div className='w-72 h-60 cursor-pointer border-b-4 rounded-md bg-gradient-to-t from-white/20 text-center px-3 py-7 self-end'>
            <div className='text-5xl mt-2 max-w-[5rem] mx-auto min-w-[5rem] min-h-[5rem] rounded-full grid place-items-center'>
              A
            </div>
            <h2>Text Text</h2>
            <p className='mt-3'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit vero reprehenderit nostrum quidem voluptate ut excepturi maiores totam, ad deleniti quos hic cum nulla velit eveniet sunt. Vitae, praesentium optio!
            </p>
          </div>
        </div>
      </SwiperSlide>
      
    </Swiper>
  );
};
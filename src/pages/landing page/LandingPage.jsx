import React, {useEffect, useState} from 'react'
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// import { Swiper, SwiperSlide} from 'swiper/react'

// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';


// import { Search} from '@mui/icons-material';

import Header from '../../layouts/header/Header'
import slider1 from '../../assets/images/Slider1.png'
import slider2 from '../../assets/images/slider2.jpg'
import slider3 from '../../assets/images/slider3.jpg'
import slider4 from '../../assets/images/slider4.jpg'
import poster from '../../assets/images/poster.jpg'

import winevid from '../../assets/images/wine (2).mp4'
import wine1 from '../../assets/images/wine (1).jpeg'
import wine2 from '../../assets/images/wine (2).jpeg'
import wine3 from '../../assets/images/wine (3).jpeg'
import wine4 from '../../assets/images/wine (4).jpg'
import wine5 from '../../assets/images/wine (5).jpeg'
import wine6 from '../../assets/images/wine (6).jpeg'
import wine7 from '../../assets/images/wine (7).jpeg'
import wine8 from '../../assets/images/wine (8).jpeg'
import wine9 from '../../assets/images/wine (9).jpeg'
import wine10 from '../../assets/images/wine (10).jpeg'
import wine11 from '../../assets/images/wine (11).jpeg'
import wine12 from '../../assets/images/wine (12).jpeg'
import wine13 from '../../assets/images/wine (13).jpeg'
import wine14 from '../../assets/images/wine (14).jpeg'
import wine15 from '../../assets/images/wine (15).jpeg'
import wine16 from '../../assets/images/wine (16).jpeg'
import wine17 from '../../assets/images/wine (17).jpeg'
import wine18 from '../../assets/images/wine (18).jpeg'
import wine19 from '../../assets/images/wine (19).jpeg'
import wine20 from '../../assets/images/wine (20).jpeg'
import wine21 from '../../assets/images/wine (21).jpeg'
import wine22 from '../../assets/images/wine (22).jpeg'
import wine23 from '../../assets/images/wine (23).jpeg'
import wine24 from '../../assets/images/wine (24).jpeg'
import wine25 from '../../assets/images/wine (25).jpeg'
import wine26 from '../../assets/images/wine (26).jpeg'
import wine27 from '../../assets/images/wine (27).jpeg'
import wine28 from '../../assets/images/wine (28).jpeg'
import wine29 from '../../assets/images/wine (29).jpeg'
import wine30 from '../../assets/images/wine (30).jpeg'
import wine31 from '../../assets/images/wine (31).jpeg'
import winebg from '../../assets/images/winebg (1).jpeg'
import Footer from '../../layouts/footer/Footer'
import Description from '../../components/modals/Description'

import { Star, StarBorderOutlined, Cancel } from '@mui/icons-material'

export default function LandingPage() {

     let [openDesc, setopendesc] = useState(false)

    let displayDesc = ()=>{
         setopendesc(!openDesc)
    }

  return (
    <div className='bg-white'>
      <Header/>
      {openDesc && <Description/>}
      {openDesc && <div onClick={displayDesc} className='z-50   fixed top-10 right-10 text-gray-700 cursor-pointer'>
                <Cancel/>
            </div>}
            {/* <section className='space'>
              <Swiper className='mb-10 relative left-0 right-0'
              modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={10}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide> <img src={slider1} alt="" /> </SwiperSlide>
                <SwiperSlide><img src={slider1} alt="" /></SwiperSlide>
                <SwiperSlide><img src={slider1} alt="" /></SwiperSlide>
                <SwiperSlide><img src={slider1} alt="" /></SwiperSlide>
                </Swiper>
            </section> */}
      <h1 className='font-bold p-3 space'>Top selling...</h1>
      <section className='space overflow-hidden gap-2  flex flex-wrap'>
          <div className='flex flex-1 w-max flex-row p-2'>
              <div className='box flex flex-col   justify-between bg-white p-2 rounded shadow-md' >
                <picture ><img className='' src={wine3} alt="" /></picture>
                <div className='content'>
                  <h3 className='text-2 text-black'>Fruit wine </h3>
                  <span className='price'>$150</span>
                  <div className='flex flex-row gap-2'>
                    <button onClick={displayDesc} className='accessbtn '>Description</button>
                    <button className='addbtn'> + </button>
                </div>
                </div>
              </div>
        </div>
        <div className='flex flex-1 w-max flex-row p-2'>
              <div className='box flex flex-col    justify-between bg-white p-2 rounded shadow-md' >
                <picture ><img className='' src={wine2} alt="" /></picture>
                <div className='content'>
                  <h3 className='text-black'>Fruit wine </h3>
                  <span className='price'>$150</span>
                  <div className='flex flex-row gap-2  content-end'>
                    <button onClick={displayDesc} className='accessbtn '>Description</button>
                     <button className='addbtn'> + </button>
                </div>
                </div>
              </div>
        </div>
         <div className='flex flex-1  w-max flex-row p-2'>
              <div className='box flex flex-col    justify-between bg-white p-2 rounded shadow-md' >
                <picture ><img className='' src={wine5} alt="" /></picture>
                <div className='content'>
                  <h3 className='text-black'>Fruit wine </h3>
                  <span className='price'>$150</span>
                  <div className='flex flex-row gap-2  '>
                    <button onClick={displayDesc} className='accessbtn '>Description</button>
                     <button className='addbtn'> + </button>
                </div>
                </div>
              </div>
        </div>
         <div className='flex  flex-1  w-max flex-row p-2'>
              <div className='box flex flex-col    justify-between bg-white p-2 rounded shadow-md' >
                <picture ><img className='' src={wine7} alt="" /></picture>
                <div className='content'>
                  <h3 className='text-black'>Fruit wine </h3>
                  <span className='price'>$150</span>
                  <div className='flex flex-row gap-2 '>
                    <button onClick={displayDesc} className='accessbtn '>Description</button>
                     <button className='addbtn'> + </button>
                </div>
                </div>
              </div>
        </div>
       <div className='flex  flex-1  w-max flex-row p-2'>
              <div className='box flex flex-col    justify-between bg-white p-2 rounded shadow-md' >
                <picture ><img className='' src={wine10} alt="" /></picture>
                <div className='content'>
                  <h3 className='text-black'>Fruit wine </h3>
                  <span className='price'>$150</span>
                  <div className='flex flex-row gap-2 '>
                    <button onClick={displayDesc} className='accessbtn '>Description</button>
                     <button className='addbtn'> + </button>
                </div>
                </div>
              </div>
        </div>
        <div className='flex flex-1  w-max flex-row p-2'>
              <div className='box flex flex-col    justify-between bg-white p-2 rounded shadow-md' >
                <picture ><img className='' src={wine3} alt="" /></picture>
                <div className='content'>
                  <h3 className='text-2 text-black'>Fruit wine </h3>
                  <span className='price'>$150</span>
                  <div className='flex flex-row gap-2  content-center'>
                    <button onClick={displayDesc} className='accessbtn '>Description</button>
                    <button className='addbtn'> + </button>
                </div>
                </div>
              </div>
        </div>
        <div className='flex  flex-1  w-max flex-row p-2'>
              <div className='box flex flex-col    justify-between bg-white p-2 rounded shadow-md' >
                <picture ><img className='' src={wine2} alt="" /></picture>
                <div className='content'>
                  <h3 className='text-black'>Fruit wine </h3>
                  <span className='price'>$150</span>
                  <div className='flex flex-row gap-2  content-end'>
                    <button onClick={displayDesc} className='accessbtn '>Description</button>
                     <button className='addbtn'> + </button>
                </div>
                </div>
              </div>
        </div>
         <div className='flex  flex-1  w-max flex-row p-2'>
              <div className='box flex flex-col    justify-between bg-white p-2 rounded shadow-md' >
                <picture ><img className='' src={wine5} alt="" /></picture>
                <div className='content'>
                  <h3 className='text-black'>Fruit wine </h3>
                  <span className='price'>$150</span>
                  <div className='flex flex-row gap-2  '>
                    <button onClick={displayDesc} className='accessbtn '>Description</button>
                     <button className='addbtn'> + </button>
                </div>
                </div>
              </div>
        </div>
         <div className='flex flex-1  w-max flex-row p-2'>
              <div className='box flex flex-col    justify-between bg-white p-2 rounded shadow-md' >
                <picture ><img className='' src={wine7} alt="" /></picture>
                <div className='content'>
                  <h3 className='text-black'>Fruit wine </h3>
                  <span className='price'>$150</span>
                  <div className='flex flex-row gap-2 '>
                    <button onClick={displayDesc} className='accessbtn '>Description</button>
                     <button className='addbtn'> + </button>
                </div>
                </div>
              </div>
        </div>
       <div className='flex flex-1  w-max flex-row p-2'>
              <div className='box flex flex-col    justify-between bg-white p-2 rounded shadow-md' >
                <picture ><img className='' src={wine10} alt="" /></picture>
                <div className='content'>
                  <h3 className='text-black'>Fruit wine </h3>
                  <span className='price'>$150</span>
                  <div className='flex flex-row gap-2 '>
                    <button onClick={displayDesc} className='accessbtn '>Description</button>
                     <button className='addbtn'> + </button>
                </div>
                </div>
              </div>
        </div>
        <div className='flex flex-1  w-max flex-row p-2'>
              <div className='box flex flex-col    justify-between bg-white p-2 rounded shadow-md' >
                <picture ><img className='' src={wine3} alt="" /></picture>
                <div className='content'>
                  <h3 className='text-black'>Fruit wine </h3>
                  <span className='price'>$150</span>
                  <div className='flex flex-row gap-2 '>
                    <button onClick={displayDesc} className='accessbtn '>Description</button>
                     <button className='addbtn'> + </button>
                </div>
                </div>
              </div>
        </div>
        <div className='flex  flex-1  w-max flex-row p-2'>
              <div className='box flex flex-col    justify-between bg-white p-2 rounded shadow-md' >
                <picture ><img className='' src={wine7} alt="" /></picture>
                <div className='content'>
                  <h3 className='text-black'>Fruit wine </h3>
                  <span className='price'>$150</span>
                  <div className='flex flex-row gap-2 '>
                    <button onClick={displayDesc} className='accessbtn '>Description</button>
                     <button className='addbtn'> + </button>
                </div>
                </div>
              </div>
        </div>            
      </section>

    <section className='my-10'>
       <div className='flex justify-between px-3'>
        <h1 className='font-bold px-3'>Family Size</h1>
         <a href='/family'>see more</a>
     </div>
      <section className=' scroll flex overflow-scroll projects'>
        <div className='flex flex-row min-w-max p-2 gap-2'>
              <div className='flex flex-col w-40 overflow-hidden items-start justify-between bg-white p-2 rounded shadow-md'>
                <picture><img className='max-w-14 flex-1' src={wine24} alt="" /></picture>
                <h4 className='font-normal'>Pine wine</h4>
                <small className='text-gray-400'>Pine grinded with pepper</small>
                <div className='flex flex-col gap-2 items-start'>
                  <span className='price'>$150</span> 
                  <div className='flex flex-row gap-2 items-center'>
                    <button onClick={displayDesc} className='accessbtn '>Description</button>
                     <button className='addbtn'> + </button>
                </div>
                </div>
              </div>
        </div>
        <div className='flex flex-row min-w-max p-2 gap-2'>
              <div className='flex flex-col w-40 overflow-hidden items-start justify-between bg-white p-2 rounded shadow-md'>
                <picture><img className='max-w-14 flex-1' src={wine28} alt="" /></picture>
                <h4 className='font-normal'>Pine wine</h4>
                <small className='text-gray-400'>Pine grinded with pepper</small>
                <div className='flex flex-col gap-2 items-start'>
                  <span className='price'>$150</span>  
                  <div className='flex flex-row gap-2 items-center'>
                    <button onClick={displayDesc} className='accessbtn '>Description</button>
                     <button className='addbtn'> + </button>
                </div>
                </div>
              </div>
        </div>
        <div className='flex flex-row min-w-max p-2 gap-2'>
              <div className='flex flex-col w-40 overflow-hidden items-start justify-between bg-white p-2 rounded shadow-md'>
                <picture><img className='max-w-14 flex-1' src={wine1} alt="" /></picture>
                <h4 className='font-normal'>Pine wine</h4>
                <small className='text-gray-400'>Pine grinded with pepper</small>
                <div className='flex flex-col gap-2 items-start'>
                  <span className='price'>$150</span> 
                  <div className='flex flex-row gap-2 items-center'>
                    <button onClick={displayDesc} className='accessbtn '>Description</button>
                     <button className='addbtn'> + </button>
                </div>
                </div>
              </div>
        </div>
        <div className='flex flex-row min-w-max p-2 gap-2'>
              <div className='flex flex-col w-40 overflow-hidden items-start justify-between bg-white p-2 rounded shadow-md'>
                <picture><img className='max-w-14 flex-1' src={wine24} alt="" /></picture>
                <h4 className='font-normal'>Pine wine</h4>
                <small className='text-gray-400'>Pine grinded with pepper</small>
                <div className='flex flex-col gap-2 items-start'>
                  <span className='price'>$150</span>  
                  <div className='flex flex-row gap-2 items-center'>
                    <button onClick={displayDesc} className='accessbtn '>Description</button>
                     <button className='addbtn'> + </button>
                </div>
                </div>
              </div>
        </div>
        <div className='flex flex-row min-w-max p-2 gap-2'>
              <div className='flex flex-col w-40 overflow-hidden items-start justify-between bg-white p-2 rounded shadow-md'>
                <picture><img className='max-w-14 flex-1' src={wine24} alt="" /></picture>
                <h4 className='font-normal'>Pine wine</h4>
                <small className='text-gray-400'>Pine grinded with pepper</small>
                <div className='flex flex-col gap-2 items-start'>
                  <span className='price'>$150</span> 
                  <div className='flex flex-row gap-2 items-center'>
                    <button onClick={displayDesc} className='accessbtn '>Description</button>
                     <button className='addbtn'> + </button>
                </div>
                </div>
              </div>
        </div>
      </section> 
    </section>``

      <video src={winevid}  controls autoPlay loop poster={slider1}></video>


      <section className='my-10'>
         <div className='flex justify-between px-3'>
        <h1 className='font-bold px-3'>Wholesale</h1>
         <a href='/wholesale'>see more</a>
     </div>
      <section className='scroll flex overflow-scroll projects'>
        <div className='flex flex-row min-w-max p-2 gap-2'>
              <div className='flex flex-col w-40 overflow-hidden items-start justify-between bg-white p-2 rounded shadow-md'>
                <picture><img className='max-w-14 flex-1' src={wine24} alt="" /></picture>
                <h4 className='font-normal'>Pine wine</h4>
                <small className='text-gray-400'>Pine grinded with pepper</small>
                <div className='flex flex-col gap-2 items-start'>
                  <span className='price'>$150</span> 
                  <div className='flex flex-row gap-2 items-center'>
                    <button onClick={displayDesc} className='accessbtn '>Description</button>
                     <button className='addbtn'> + </button>
                </div>
                </div>
              </div>
        </div>
        <div className='flex flex-row min-w-max p-2 gap-2'>
              <div className='flex flex-col w-40 overflow-hidden items-start justify-between bg-white p-2 rounded shadow-md'>
                <picture><img className='max-w-14 flex-1' src={wine28} alt="" /></picture>
                <h4 className='font-normal'>Pine wine</h4>
                <small className='text-gray-400'>Pine grinded with pepper</small>
                <div className='flex flex-col gap-2 items-start'>
                  <span className='price'>$150</span>  
                  <div className='flex flex-row gap-2 items-center'>
                    <button onClick={displayDesc} className='accessbtn '>Description</button>
                     <button className='addbtn'> + </button>
                </div>
                </div>
              </div>
        </div>
        <div className='flex flex-row min-w-max p-2 gap-2'>
              <div className='flex flex-col w-40 overflow-hidden items-start justify-between bg-white p-2 rounded shadow-md'>
                <picture><img className='max-w-14 flex-1' src={wine1} alt="" /></picture>
                <h4 className='font-normal'>Pine wine</h4>
                <small className='text-gray-400'>Pine grinded with pepper</small>
                <div className='flex flex-col gap-2 items-start'>
                  <span className='price'>$150</span> 
                  <div className='flex flex-row gap-2 items-center'>
                    <button onClick={displayDesc} className='accessbtn '>Description</button>
                     <button className='addbtn'> + </button>
                </div>
                </div>
              </div>
        </div>
        <div className='flex flex-row min-w-max p-2 gap-2'>
              <div className='flex flex-col w-40 overflow-hidden items-start justify-between bg-white p-2 rounded shadow-md'>
                <picture><img className='max-w-14 flex-1' src={wine24} alt="" /></picture>
                <h4 className='font-normal'>Pine wine</h4>
                <small className='text-gray-400'>Pine grinded with pepper</small>
                <div className='flex flex-col gap-2 items-start'>
                  <span className='price'>$150</span>  
                  <div className='flex flex-row gap-2 items-center'>
                    <button onClick={displayDesc} className='accessbtn '>Description</button>
                     <button className='addbtn'> + </button>
                </div>
                </div>
              </div>
        </div>
        <div className='flex flex-row min-w-max p-2 gap-2'>
              <div className='flex flex-col w-40 overflow-hidden items-start justify-between bg-white p-2 rounded shadow-md'>
                <picture><img className='max-w-14 flex-1' src={wine24} alt="" /></picture>
                <h4 className='font-normal'>Pine wine</h4>
                <small className='text-gray-400'>Pine grinded with pepper</small>
                <div className='flex flex-col gap-2 items-start'>
                  <span className='price'>$150</span> 
                  <div className='flex flex-row gap-2 items-center'>
                    <button onClick={displayDesc} className='accessbtn '>Description</button>
                     <button className='addbtn'> + </button>
                </div>
                </div>
              </div>
        </div>
      </section> 
      </section>


       <section className='my-10'>
        <div className='flex justify-between px-3'>
        <h1 className='font-bold px-3'>Brands</h1>
         <a href='/brands'>see more</a>
     </div>
      <section className='scroll flex overflow-scroll projects'>
        <div className='flex flex-row min-w-max p-2 gap-2'>
              <div className='flex flex-col w-40 overflow-hidden items-start justify-between bg-white p-2 rounded shadow-md'>
                <picture><img className='max-w-14 flex-1' src={wine24} alt="" /></picture>
                <h4 className='font-normal'>Pine wine</h4>
                <small className='text-gray-400'>Pine grinded with pepper</small>
                <div className='flex flex-col gap-2 items-start'>
                  <span className='price'>$150</span> 
                  <div className='flex flex-row gap-2 items-center'>
                    <button onClick={displayDesc} className='accessbtn '>Description</button>
                     <button className='addbtn'> + </button>
                </div>
                </div>
              </div>
        </div>
        <div className='flex flex-row min-w-max p-2 gap-2'>
              <div className='flex flex-col w-40 overflow-hidden items-start justify-between bg-white p-2 rounded shadow-md'>
                <picture><img className='max-w-14 flex-1' src={wine28} alt="" /></picture>
                <h4 className='font-normal'>Pine wine</h4>
                <small className='text-gray-400'>Pine grinded with pepper</small>
                <div className='flex flex-col gap-2 items-start'>
                  <span className='price'>$150</span>  
                  <div className='flex flex-row gap-2 items-center'>
                    <button onClick={displayDesc} className='accessbtn '>Description</button>
                     <button className='addbtn'> + </button>
                </div>
                </div>
              </div>
        </div>
        <div className='flex flex-row min-w-max p-2 gap-2'>
              <div className='flex flex-col w-40 overflow-hidden items-start justify-between bg-white p-2 rounded shadow-md'>
                <picture><img className='max-w-14 flex-1' src={wine1} alt="" /></picture>
                <h4 className='font-normal'>Pine wine</h4>
                <small className='text-gray-400'>Pine grinded with pepper</small>
                <div className='flex flex-col gap-2 items-start'>
                  <span className='price'>$150</span> 
                  <div className='flex flex-row gap-2 items-center'>
                    <button onClick={displayDesc} className='accessbtn '>Description</button>
                     <button className='addbtn'> + </button>
                </div>
                </div>
              </div>
        </div>
        <div className='flex flex-row min-w-max p-2 gap-2'>
              <div className='flex flex-col w-40 overflow-hidden items-start justify-between bg-white p-2 rounded shadow-md'>
                <picture><img className='max-w-14 flex-1' src={wine24} alt="" /></picture>
                <h4 className='font-normal'>Pine wine</h4>
                <small className='text-gray-400'>Pine grinded with pepper</small>
                <div className='flex flex-col gap-2 items-start'>
                  <span className='price'>$150</span>  
                  <div className='flex flex-row gap-2 items-center'>
                    <button onClick={displayDesc} className='accessbtn '>Description</button>
                     <button className='addbtn'> + </button>
                </div>
                </div>
              </div>
        </div>
        <div className='flex flex-row min-w-max p-2 gap-2'>
              <div className='flex flex-col w-40 overflow-hidden items-start justify-between bg-white p-2 rounded shadow-md'>
                <picture><img className='max-w-14 flex-1' src={wine24} alt="" /></picture>
                <h4 className='font-normal'>Pine wine</h4>
                <small className='text-gray-400'>Pine grinded with pepper</small>
                <div className='flex flex-col gap-2 items-start'>
                  <span className='price'>$150</span> 
                  <div className='flex flex-row gap-2 items-center'>
                    <button onClick={displayDesc} className='accessbtn '>Description</button>
                     <button className='addbtn'> + </button>
                </div>
                </div>
              </div>
        </div>
      </section> 
       </section>

      <section className='my-10'>
         <div className='flex justify-between px-3'>
        <h1 className='font-bold px-3'>Products</h1>
         <a href='/products'>see more</a>
     </div>
      <section className='scroll flex overflow-scroll projects'>
        <div className='flex flex-row min-w-max p-2 gap-2'>
              <div className='flex flex-col w-40 overflow-hidden items-start justify-between bg-white p-2 rounded shadow-md'>
                <picture><img className='max-w-14 flex-1' src={wine24} alt="" /></picture>
                <h4 className='font-normal'>Pine wine</h4>
                <small className='text-gray-400'>Pine grinded with pepper</small>
                <div className='flex flex-col gap-2 items-start'>
                  <span className='price'>$150</span> 
                  <div className='flex flex-row gap-2 items-center'>
                    <button onClick={displayDesc} className='accessbtn '>Description</button>
                     <button className='addbtn'> + </button>
                </div>
                </div>
              </div>
        </div>
        <div className='flex flex-row min-w-max p-2 gap-2'>
              <div className='flex flex-col w-40 overflow-hidden items-start justify-between bg-white p-2 rounded shadow-md'>
                <picture><img className='max-w-14 flex-1' src={wine28} alt="" /></picture>
                <h4 className='font-normal'>Pine wine</h4>
                <small className='text-gray-400'>Pine grinded with pepper</small>
                <div className='flex flex-col gap-2 items-start'>
                  <span className='price'>$150</span>  
                  <div className='flex flex-row gap-2 items-center'>
                    <button onClick={displayDesc} className='accessbtn '>Description</button>
                     <button className='addbtn'> + </button>
                </div>
                </div>
              </div>
        </div>
        <div className='flex flex-row min-w-max p-2 gap-2'>
              <div className='flex flex-col w-40 overflow-hidden items-start justify-between bg-white p-2 rounded shadow-md'>
                <picture><img className='max-w-14 flex-1' src={wine1} alt="" /></picture>
                <h4 className='font-normal'>Pine wine</h4>
                <small className='text-gray-400'>Pine grinded with pepper</small>
                <div className='flex flex-col gap-2 items-start'>
                  <span className='price'>$150</span> 
                  <div className='flex flex-row gap-2 items-center'>
                    <button onClick={displayDesc} className='accessbtn '>Description</button>
                     <button className='addbtn'> + </button>
                </div>
                </div>
              </div>
        </div>
        <div className='flex flex-row min-w-max p-2 gap-2'>
              <div className='flex flex-col w-40 overflow-hidden items-start justify-between bg-white p-2 rounded shadow-md'>
                <picture><img className='max-w-14 flex-1' src={wine24} alt="" /></picture>
                <h4 className='font-normal'>Pine wine</h4>
                <small className='text-gray-400'>Pine grinded with pepper</small>
                <div className='flex flex-col gap-2 items-start'>
                  <span className='price'>$150</span>  
                  <div className='flex flex-row gap-2 items-center'>
                    <button onClick={displayDesc} className='accessbtn '>Description</button>
                     <button className='addbtn'> + </button>
                </div>
                </div>
              </div>
        </div>
        <div className='flex flex-row min-w-max p-2 gap-2'>
              <div className='flex flex-col w-40 overflow-hidden items-start justify-between bg-white p-2 rounded shadow-md'>
                <picture><img className='max-w-14 flex-1' src={wine24} alt="" /></picture>
                <h4 className='font-normal'>Pine wine</h4>
                <small className='text-gray-400'>Pine grinded with pepper</small>
                <div className='flex flex-col gap-2 items-start'>
                  <span className='price'>$150</span> 
                  <div className='flex flex-row gap-2 items-center'>
                    <button onClick={displayDesc} className='accessbtn '>Description</button>
                     <button className='addbtn'> + </button>
                </div>
                </div>
              </div>
        </div>
      </section> 
      </section>

      <p className='p-2'>You might also like</p>
      <section className='scroll flex overflow-scroll'>
            <div className='flex flex-row flex-wrap min-w-max p-2 gap-2'>
              <div className='flex flex-row w-90 items-center  justify-between bg-red-900 p-2 rounded shadow-md' >
                <picture ><img className='w-20' src={wine20} alt="" /></picture>
                <div className='p-2 w-50'>
                  <h3 className='font-normal text-white'>Fruit wine </h3>
                  <span className='price'>$150</span> <br/>
                  <small className='text-gray-300'>red blended with apple</small>
                  <div className='flex flex-row gap-2 items-center'>
                    <button onClick={displayDesc} className='accessbtn '>Description</button>
                     <button className='addbtn'> + </button>
                </div>
                </div>
              </div>
            </div>
            <div className='flex flex-row flex-wrap min-w-max p-2 gap-2'>
              <div className='flex flex-row w-90 items-center  justify-between bg-red-900 p-2 rounded shadow-md' >
                <picture ><img className='w-20' src={wine19} alt="" /></picture>
                <div className='p-2 w-50'>
                  <h3 className='font-normal text-white'>Fruit wine </h3>
                  <span className='price'>$150</span> <br/>
                  <small className='text-gray-300'>red blended with apple</small>
                  <div className='flex flex-row gap-2 items-center'>
                    <button onClick={displayDesc} className='accessbtn '>Description</button>
                     <button className='addbtn'> + </button>
                </div>
                </div>
              </div>
            </div>
            <div className='flex flex-row flex-wrap min-w-max p-2 gap-2'>
              <div className='flex flex-row w-90 items-center  justify-between bg-red-900 p-2 rounded shadow-md' >
                <picture ><img className='w-20' src={wine27} alt="" /></picture>
                <div className='p-2 w-50'>
                  <h3 className='font-normal text-white'>Fruit wine </h3>
                  <span className='price'>$150</span> <br />
                  <small className='text-gray-300'>red blended with apple</small>
                  <div className='flex flex-row gap-2 items-center'>
                    <button onClick={displayDesc} className='accessbtn '>Description</button>
                     <button className='addbtn'> + </button>
                </div>
                </div>
              </div>
            </div>
            <div className='flex flex-row flex-wrap min-w-max p-2 gap-2'>
              <div className='flex flex-row w-90 items-center  justify-between bg-red-900 p-2 rounded shadow-md' >
                <picture ><img className='w-20' src={wine16} alt="" /></picture>
                <div className='p-2 w-50'>
                  <h3 className='font-normal text-white'>Fruit wine </h3>
                  <span className='price'>$150</span> <br />
                  <small className='text-gray-300'>red blended with apple</small>
                 <div className='flex flex-row gap-2 items-center'>
                    <button onClick={displayDesc} className='accessbtn '>Description</button>
                     <button className='addbtn'> + </button>
                </div>
                </div>
              </div>
            </div>
            <div className='flex flex-row flex-wrap min-w-max p-2 gap-2'>
              <div className='flex flex-row w-90 items-center  justify-between bg-red-900 p-2 rounded shadow-md' >
                <picture ><img className='w-20' src={wine15} alt="" /></picture>
                <div className='p-2 w-50'>
                  <h3 className='font-normal text-white'>Fruit wine </h3>
                  <span className='price'>$150</span> <br />
                  <small className='text-gray-300'>red blended with apple</small>
                  <div className='flex flex-row gap-2 items-center'>
                    <button onClick={displayDesc} className='accessbtn '>Description</button>
                     <button className='addbtn'> + </button>
                </div>
                </div>
              </div>
            </div>
      </section>
      <Footer/>
    </div>
  )
}

// import React, {useEffect, useState} from 'react'
import Header from '../../layouts/header/Header'
// import { Search} from '@mui/icons-material';
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


export default function LandingPage() {



  return (
    <div className='sections'>
      <Header/>
      <section className='section1 flex justify-between py-3 max-h-screen'>
          <div className=''>
            <h1 className='text-white headcontent'>Celebrating Love and Life</h1>

          </div>
          <picture className='min-w-lg bgimage'>
            
          </picture>
      </section>
      <h1 className='font-bold px-3'>Recently Ordered</h1>
      <section className=' overflow-hidden topbooks'>
          <div className='flex flex-row flex-wrap min-w-max p-2 gap-2'>
              <div className='box flex flex-row  items-center  justify-between bg-red-900 p-2 rounded shadow-md' >
                <picture ><img className='' src={wine3} alt="" /></picture>
                <div className='p-2 content'>
                  <h3 className='font-normal text-white'>Watermel wine </h3>
                  <small className='text-white'>Watermelon wine mixed with fine ingredients to nourish the skin and keep you hydrated, take it on the go, in the office, or at home.</small>
                  <div className='flex flex-row gap-2 items-center'>
                    <button className='accessbtn '>Order Now</button>
                </div>
                </div>
              </div>
        </div>
        <div className='flex flex-row flex-wrap min-w-max p-2 gap-2'>
              <div className='box flex flex-row  items-center  justify-between bg-red-900 p-2 rounded shadow-md' >
                <picture ><img className='' src={wine2} alt="" /></picture>
                <div className='p-2 content'>
                  <h3 className='font-normal text-white'>Fruit wine </h3>
                  <small className='text-white'>Watermelon wine mixed with fine ingredients to nourish the skin and keep you hydrated, take it on the go, in the office, or at home.</small>
                  <div className='flex flex-row gap-2 items-center'>
                    <button className='accessbtn '>Order Now</button>
                </div>
                </div>
              </div>
        </div>
        <div className='flex flex-row flex-wrap min-w-max p-2 gap-2'>
              <div className='box flex flex-row  items-center  justify-between bg-red-900 p-2 rounded shadow-md' >
                <picture ><img className='' src={wine5} alt="" /></picture>
                <div className='p-2 content'>
                  <h3 className='font-normal text-white'>Fruit wine </h3>
                  <small className='text-white'>Watermelon wine mixed with fine ingredients to nourish the skin and keep you hydrated, take it on the go, in the office, or at home.</small>
                  <div className='flex flex-row gap-2 items-center'>
                    <button className='accessbtn '>Order Now</button>
                </div>
                </div>
              </div>
        </div>
        <div className='flex flex-row flex-wrap min-w-max p-2 gap-2'>
              <div className='box flex flex-row  items-center  justify-between bg-red-900 p-2 rounded shadow-md' >
                <picture ><img className='' src={wine4} alt="" /></picture>
                <div className='p-2 content'>
                  <h3 className='font-normal text-white'>Fruit wine </h3>
                 <small className='text-white'>Watermelon wine mixed with fine ingredients to nourish the skin and keep you hydrated, take it on the go, in the office, or at home.</small>
                  <div className='flex flex-row gap-2 items-center'>
                    <button className='accessbtn '>Order Now</button>
                </div>
                </div>
              </div>
        </div>            
      </section>
      <h1 className='font-bold px-3'>Newly Added</h1>
      <section className='flex overflow-scroll projects'>
            <div className='flex flex-row min-w-max p-2 gap-2'>
              <div className='flex flex-col w-40 overflow-hidden items-start justify-between bg-gray-100 p-2 rounded shadow-md'>
                <picture><img className='max-w-14 flex-1' src={wine1} alt="" /></picture>
                <h4 className='font-normal'>Pine wine</h4>
                <small className='text-gray-400'>Pine grinded with pepper</small>
                <div className='flex flex-row gap-2 items-center'>
                  <button className='accessbtn'>Order Now</button>
                </div>
              </div>
        </div>
        <div className='flex flex-row min-w-max p-2 gap-2'>
              <div className='flex flex-col w-40 overflow-hidden items-start justify-between bg-gray-100 p-2 rounded shadow-md'>
                <picture><img className='max-w-14 flex-1' src={wine17} alt="" /></picture>
                <h4 className='font-normal'>Pine wine</h4>
                <small className='text-gray-400'>Pine grinded with pepper</small>
                <div className='flex flex-row gap-2 items-center'>
                  <button className='accessbtn'>Order Now</button>
                </div>
              </div>
        </div>
        <div className='flex flex-row min-w-max p-2 gap-2'>
              <div className='flex flex-col w-40 overflow-hidden items-start justify-between bg-gray-100 p-2 rounded shadow-md'>
                <picture><img className='max-w-14 flex-1' src={wine24} alt="" /></picture>
                <h4 className='font-normal'>Pine wine</h4>
                <small className='text-gray-400'>Pine grinded with pepper</small>
                <div className='flex flex-row gap-2 items-center'>
                  <button className='accessbtn'>Order Now</button>
                </div>
              </div>
        </div>
        <div className='flex flex-row min-w-max p-2 gap-2'>
              <div className='flex flex-col w-40 overflow-hidden items-start justify-between bg-gray-100 p-2 rounded shadow-md'>
                <picture><img className='max-w-14 flex-1' src={wine28} alt="" /></picture>
                <h4 className='font-normal'>Pine wine</h4>
                <small className='text-gray-400'>Pine grinded with pepper</small>
                <div className='flex flex-row gap-2 items-center'>
                  <button className='accessbtn'>Order Now</button>
                </div>
              </div>
        </div>
        <div className='flex flex-row min-w-max p-2 gap-2'>
              <div className='flex flex-col w-40 overflow-hidden items-start justify-between bg-gray-100 p-2 rounded shadow-md'>
                <picture><img className='max-w-14 flex-1' src={wine1} alt="" /></picture>
                <h4 className='font-normal'>Pine wine</h4>
                <small className='text-gray-400'>Pine grinded with pepper</small>
                <div className='flex flex-row gap-2 items-center'>
                  <button className='accessbtn'>Order Now</button>
                </div>
              </div>
        </div>
        <div className='flex flex-row min-w-max p-2 gap-2'>
              <div className='flex flex-col w-40 overflow-hidden items-start justify-between bg-gray-100 p-2 rounded shadow-md'>
                <picture><img className='max-w-14 flex-1' src={wine17} alt="" /></picture>
                <h4 className='font-normal'>Pine wine</h4>
                <small className='text-gray-400'>Pine grinded with pepper</small>
                <div className='flex flex-row gap-2 items-center'>
                  <button className='accessbtn'>Order Now</button>
                </div>
              </div>
        </div>
        <div className='flex flex-row min-w-max p-2 gap-2'>
              <div className='flex flex-col w-40 overflow-hidden items-start justify-between bg-gray-100 p-2 rounded shadow-md'>
                <picture><img className='flex-1' src={wine24} alt="" /></picture>
                <h4 className='font-normal'>Pine wine</h4>
                <small className='text-gray-400'>Pine grinded with pepper</small>
                <div className='flex flex-row gap-2 items-center'>
                  <button className='accessbtn'>Order Now</button>
                </div>
              </div>
        </div>
      </section>
      <video className='w-50 m-b-10 video' autoPlay loop muted src=''></video>
      <p className='p-2'>You might also like</p>
      <section className='flex overflow-scroll topbooks'>
            <div className='flex flex-row flex-wrap min-w-max p-2 gap-2'>
              <div className='flex flex-row w-90 items-center  justify-between bg-red-900 p-2 rounded shadow-md' >
                <picture ><img className='w-20' src={wine20} alt="" /></picture>
                <div className='p-2 w-50'>
                  <h3 className='font-normal text-white'>Fruit wine </h3>
                  <small className='text-gray-600'>red blended with apple</small>
                  <div className='flex flex-row gap-2 items-center'>
                    <button className='accessbtn '>Order Now</button>
                </div>
                </div>
              </div>
            </div>
            <div className='flex flex-row flex-wrap min-w-max p-2 gap-2'>
              <div className='flex flex-row w-90 items-center  justify-between bg-red-900 p-2 rounded shadow-md' >
                <picture ><img className='w-20' src={wine19} alt="" /></picture>
                <div className='p-2 w-50'>
                  <h3 className='font-normal text-white'>Fruit wine </h3>
                  <small className='text-gray-600'>red blended with apple</small>
                  <div className='flex flex-row gap-2 items-center'>
                    <button className='accessbtn '>Order Now</button>
                </div>
                </div>
              </div>
            </div>
            <div className='flex flex-row flex-wrap min-w-max p-2 gap-2'>
              <div className='flex flex-row w-90 items-center  justify-between bg-red-900 p-2 rounded shadow-md' >
                <picture ><img className='w-20' src={wine27} alt="" /></picture>
                <div className='p-2 w-50'>
                  <h3 className='font-normal text-white'>Fruit wine </h3>
                  <small className='text-gray-600'>red blended with apple</small>
                  <div className='flex flex-row gap-2 items-center'>
                    <button className='accessbtn '>Order Now</button>
                </div>
                </div>
              </div>
            </div>
            <div className='flex flex-row flex-wrap min-w-max p-2 gap-2'>
              <div className='flex flex-row w-90 items-center  justify-between bg-red-900 p-2 rounded shadow-md' >
                <picture ><img className='w-20' src={wine16} alt="" /></picture>
                <div className='p-2 w-50'>
                  <h3 className='font-normal text-white'>Fruit wine </h3>
                  <small className='text-gray-600'>red blended with apple</small>
                  <div className='flex flex-row gap-2 items-center'>
                    <button className='accessbtn '>Order Now</button>
                </div>
                </div>
              </div>
            </div>
            <div className='flex flex-row flex-wrap min-w-max p-2 gap-2'>
              <div className='flex flex-row w-90 items-center  justify-between bg-red-900 p-2 rounded shadow-md' >
                <picture ><img className='w-20' src={wine15} alt="" /></picture>
                <div className='p-2 w-50'>
                  <h3 className='font-normal text-white'>Fruit wine </h3>
                  <small className='text-gray-600'>red blended with apple</small>
                  <div className='flex flex-row gap-2 items-center'>
                    <button className='accessbtn '>Order Now</button>
                </div>
                </div>
              </div>
            </div>
      </section>
    </div>
  )
}

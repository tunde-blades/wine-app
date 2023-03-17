import React from 'react'
import  {useEffect, useState} from 'react'
import Header from '../../layouts/header/Header'
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
import Footer from '../../layouts/footer/Footer'
import Description from '../../components/modals/Description'

import { Cancel } from '@mui/icons-material'


export default function Wholesale() {

      let [openDesc, setopendesc] = useState(false)

    let displayDesc = ()=>{
         setopendesc(!openDesc)
    }



  return (
    <div>
      <Header/>
       {openDesc && <Description/>}
      {openDesc && <div onClick={displayDesc} className='z-50   fixed top-10 right-10 text-gray-700 cursor-pointer'>
                <Cancel/>
            </div>}
      <section className='space'>
        <section className='my-20'>
          <h2 className='bg-orange-500 p-2 my-2'>20 - 99 </h2>
         <section className='overflow-hidden justify-start gap-5  flex flex-wrap topbooks'>
          <div className='flex flex-1 w-max flex-row p-2'>
              <div className='box flex flex-col    justify-between bg-gray-200 p-2 rounded shadow-md' >
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
        <div className='flex flex-1 w-max flex-row p-2'>
              <div className='box flex flex-col    justify-between bg-gray-200 p-2 rounded shadow-md' >
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
         <div className='flex flex-1 w-max flex-row p-2'>
              <div className='box flex flex-col    justify-between bg-gray-200 p-2 rounded shadow-md' >
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
         <div className='flex flex-1 w-max flex-row p-2'>
              <div className='box flex flex-col    justify-between bg-gray-200 p-2 rounded shadow-md' >
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
       <div className='flex flex-1 w-max flex-row p-2'>
              <div className='box flex flex-col    justify-between bg-gray-200 p-2 rounded shadow-md' >
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
        <div className='flex flex-1 w-max flex-row p-2'>
              <div className='box flex flex-col    justify-between bg-gray-200 p-2 rounded shadow-md' >
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
        <div className='flex flex-1 w-max flex-row p-2'>
              <div className='box flex flex-col    justify-between bg-gray-200 p-2 rounded shadow-md' >
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
        <div className='flex flex-1 w-max flex-row p-2'>
              <div className='box flex flex-col    justify-between bg-gray-200 p-2 rounded shadow-md' >
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
         <div className='flex flex-1 w-max flex-row p-2'>
              <div className='box flex flex-col    justify-between bg-gray-200 p-2 rounded shadow-md' >
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
         <div className='flex flex-1 w-max flex-row p-2'>
              <div className='box flex flex-col    justify-between bg-gray-200 p-2 rounded shadow-md' >
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
         <div className='flex flex-1 w-max flex-row p-2'>
              <div className='box flex flex-col    justify-between bg-gray-200 p-2 rounded shadow-md' >
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
       <div className='flex flex-1 w-max flex-row p-2'>
              <div className='box flex flex-col    justify-between bg-gray-200 p-2 rounded shadow-md' >
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
      </section>
        </section>
         <section className='my-20'>
          <h2 className='bg-blue-300 p-2 my-2'> 100 - above</h2>
         <section className='overflow-hidden justify-start gap-5  flex flex-wrap topbooks'>
          <div className='flex flex-1 w-max flex-row p-2'>
              <div className='box flex flex-col    justify-between bg-gray-200 p-2 rounded shadow-md' >
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
        <div className='flex flex-1 w-max flex-row p-2'>
              <div className='box flex flex-col    justify-between bg-gray-200 p-2 rounded shadow-md' >
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
        <div className='flex flex-1 w-max flex-row p-2'>
              <div className='box flex flex-col    justify-between bg-gray-200 p-2 rounded shadow-md' >
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
         <div className='flex flex-1 w-max flex-row p-2'>
              <div className='box flex flex-col    justify-between bg-gray-200 p-2 rounded shadow-md' >
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
         <div className='flex flex-1 w-max flex-row p-2'>
              <div className='box flex flex-col    justify-between bg-gray-200 p-2 rounded shadow-md' >
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
       <div className='flex flex-1 w-max flex-row p-2'>
              <div className='box flex flex-col    justify-between bg-gray-200 p-2 rounded shadow-md' >
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
        <div className='flex flex-1 w-max flex-row p-2'>
              <div className='box flex flex-col    justify-between bg-gray-200 p-2 rounded shadow-md' >
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
        <div className='flex flex-1 w-max flex-row p-2'>
              <div className='box flex flex-col    justify-between bg-gray-200 p-2 rounded shadow-md' >
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
         <div className='flex flex-1 w-max flex-row p-2'>
              <div className='box flex flex-col    justify-between bg-gray-200 p-2 rounded shadow-md' >
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
         <div className='flex flex-1 w-max flex-row p-2'>
              <div className='box flex flex-col    justify-between bg-gray-200 p-2 rounded shadow-md' >
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
         <div className='flex flex-1 w-max flex-row p-2'>
              <div className='box flex flex-col    justify-between bg-gray-200 p-2 rounded shadow-md' >
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
       <div className='flex flex-1 w-max flex-row p-2'>
              <div className='box flex flex-col    justify-between bg-gray-200 p-2 rounded shadow-md' >
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
      </section>
        </section>
      </section>
      <Footer/>
    </div>
  )
}

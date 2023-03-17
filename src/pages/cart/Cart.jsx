import { Cancel , DeleteOutline } from '@mui/icons-material'
import React, {useEffect, useState} from 'react'
import image1 from '../../assets/images/wine (1).jpeg'
import Checkout from '../../components/modals/Checkout'
import Footer from '../../layouts/footer/Footer'
import Header from '../../layouts/header/Header'

export default function Cart() {

     let [openOrder, setopenorder] = useState(false)

    let displayOrder = ()=>{
         setopenorder(!openOrder)
    }


  return (
    <div>
        <Header/>
        {openOrder && <Checkout/>}
        {openOrder && <div onClick={displayOrder} className='z-50   fixed top-10 right-10 text-gray-700 cursor-pointer'>
                <Cancel/>
            </div>}
        <section className='space flex flex-col'>
          <div className='flex justify-between border p-2 rounded-md'>
            <h3>Total</h3>
            <p>$ 320.00</p>
          </div>
         <section className='my-4 p-2 bg-gray-100 rounded-md'>
           <div className='flex  justify-around gap-4'>
            <picture className='flex flex-1'><img className='' src={image1} alt="" /> </picture>
            <div className='flex flex-1 flex-col leading-8'>
              <div className='flex justify-end text-red-600'>
                  <DeleteOutline className='cursor-pointer'/>
              </div>
                <h3>Whiskey Hot</h3>
                <p className='text-xs  text-gray-500'>whiskey mixed with hot spicy cream, best for relaxation, partying or sleeping</p>
                <h1 className='flex justify-end border rounded my-2 px-1'>$150.00</h1>
            </div>
          </div>
         </section>
            <button onClick={displayOrder} className='flex-1 border p-2 justify-center bg-orange-600 text-white cursor-pointer rounded-md'>Check out</button>
        </section>
        <Footer/>
    </div>
  )
}

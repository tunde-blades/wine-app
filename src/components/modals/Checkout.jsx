import { Cancel, Star, StarBorderOutlined } from '@mui/icons-material'
import image1 from '../../assets/images/wine (20).jpeg'
import React from 'react'

export default function Checkout() {
  return (
    <div>
        <section className='modal fixed box-border top-0 bottom-0 left-0 right-0 z-40 rounded-md p-4 flex flex-col justify-center'>
            <section className='bg-white p-4 flex flex-col justify-center gap-4'>
                <div className='flex flex-col justify-center mb-2'>
                    <div>
                        <p className='text-xs'>items:</p>
                        <ol>
                            <li className='flex justify-between'><span>Fruitie wine</span> <span> $150.00</span></li>
                            <li className='flex justify-between'><span>Fruitie wine</span> <span> $150.00</span></li>
                        </ol>
                    </div>
                    <p className='mb-8 mt-4 border-t flex justify-between'> <span>Total:</span> <span>$300.00</span> </p>
                   <form action="" className='flex flex-col gap-2 mb-4'>
                    <h1>Confirm order</h1>
                        <input className=' pl-2 border rounded-sm' type="text" placeholder='items'/>
                        <input className=' pl-2 border rounded-sm' type="text" placeholder='14, Bode thomas road, Lagos.'/>
                        <input className=' pl-2 border rounded-sm' type="tel" name="" id="" placeholder='+234 902 405 ****' />
                   </form>
                    <small className='max-w-xs'>
                        We are about to send your order to a customer care on whatsapp for a faster delivery
                    </small>
                </div>
                <button className='rounded-md bg-orange-600 p-2 text-white'> Send Order</button>
            </section>
        </section>
    </div>
  )
}

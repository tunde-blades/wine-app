import { Cancel, Star, StarBorderOutlined } from '@mui/icons-material'
import image1 from '../../assets/images/wine (20).jpeg'
import React from 'react'

export default function Description() {
  return (
    <div>
        <section className='modal fixed box-border top-0 bottom-0 left-0 right-0 z-40 rounded-md p-4 flex flex-col justify-center'>
            <section className='bg-white p-4 flex flex-col justify-center gap-4'>
                <picture className='flex justify-center bg-orange-100 p-2 rounded-md'>
                    <img src={image1} alt="" />
                </picture>
                <div className=''>
                    <h3 className='text-xl'>Fruitie wine</h3>
                    <p>$150.00</p>
                    <div className='text-xs'>
                        <span className='text-orange-500'> <Star/> <Star/> <Star/></span>
                        <span><StarBorderOutlined/><StarBorderOutlined/> </span>
                    </div>
                    <small>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima excepturi tempore veniam assumenda ullam earum nam iusto, eum, quod, sint consequatur est laborum ipsum labore beatae fugiat alias ipsam asperiores.
                    </small>
                </div>
                <button className='rounded-md bg-orange-600 p-2 text-white'> Add to Cart</button>
            </section>
        </section>
    </div>
  )
}

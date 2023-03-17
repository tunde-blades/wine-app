import React from 'react'
import { useState } from 'react'
import {Liquor,  PeopleAltOutlined, LocalDrinkOutlined, NewReleasesOutlined, SellOutlined, ShoppingBasketOutlined} from '@mui/icons-material';



export default function Header() {

  return (
    <section className=' space flex header justify-center overflow-hidden '>
        <header className='container box-border py-5 px-5'>
        <menu className='flex space-x-10 items-center justify-between'>
                <a href='/' className='winb flex items-center'>
                    <Liquor className=''/>
                    <p className='text-black'>Wine store</p>
                </a> 
                <a href="/cart" className='relative'>
                    <small className='cartnum bg-orange-500 rounded-xl text-white text-xs absolute right-0 top-0'>2</small>
                    <ShoppingBasketOutlined/>
                </a>
            </menu>
             <section className='navbtn flex justify-between py-3 max-h-screen gap-2 text-orange-800'>
                <a href='/family' className='flex-1 border p-1 rounded-md flex flex-col gap-1 items-center justify-center text-xs'>
                    < PeopleAltOutlined/>
                    <p>Family</p>
                </a>
                <a href='/brands' className='flex-1 border p-1 rounded-md flex flex-col  gap-1 items-center justify-center text-xs'>
                    <LocalDrinkOutlined className=''/>
                    <p>Brands</p>
                </a>
                <a href='/wholesale' className='flex-1 border p-1 rounded-md flex flex-col  gap-1 items-center justify-center text-xs'>
                    <SellOutlined className=''/>
                    <p>Wholesale</p>
                </a>
                <a href='products' className=' flex-1 border p-1 rounded-md flex flex-col  gap-1 items-center justify-center text-xs'>
                    <NewReleasesOutlined className='text-xs'/>
                    <p className='text-xs'>Products</p>
                </a>
      </section>
        </header>
        <section>
            <form action="">
                <label htmlFor="searchbox" className=''>
                    <input type="text" />
                </label>
            </form>
        </section>
        
    </section>
  )
}

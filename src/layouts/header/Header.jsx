import React from 'react'
import logo from '../../assets/images/logo.svg'
import Loginbtn from '../../components/buttons/Loginbtn'
import SignUpbtn from '../../components/buttons/SignUpbtn'
import { useState } from 'react'
import {Menu, Cancel, Liquor} from '@mui/icons-material';



export default function Header() {

    let [openNav, setopennav] = useState(false)

    let displayNav = ()=>{
         setopennav(!openNav)
    }


  return (
    <section className=' flex header justify-center overflow-hidden'>
        <header className='container box-border py-5 px-5'>
        <menu className='flex space-x-10 items-center justify-between'>
                <picture className='flex items-center'>
                    <Liquor className='text-white'/>
                    <p className='text-white'>Wine store</p>
                </picture> 
                <picture className='logo'>
                    <span onClick={displayNav}>{openNav ? <Cancel className='text-white'/>:<Menu className='text-white'/>}</span>
                </picture>
                <nav className='flex  text-white navs'>
                    <li className='cursor-pointer'>Catalog</li>
                    <li className='cursor-pointer'>Contact us</li>
                </nav>
                {
                    openNav && <nav className='text-white navsmobile'>
                    <li className='cursor-pointer'>Catalog</li>
                    <li className='cursor-pointer'>Contact us</li>
                </nav>
                }
            </menu>
        </header>
    </section>
  )
}

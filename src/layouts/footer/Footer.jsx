import React from 'react'

export default function Footer() {
  return (
    <div className='bg-black footer'>
        <section className='space text-white py-5'>
            <ul className='flex flex-col'>
                <a href="">Help center </a>
                <a href=""> Contact us</a>
                <a href="">Report a product</a>
                <a href="">Terms and Conditions</a>
            </ul>
            <h4 className='text-gray-400 my-5 border p-2 text-center'>All Right Reserved</h4>
        </section>
    </div>
  )
}

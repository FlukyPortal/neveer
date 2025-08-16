import React from 'react'
import Footer from '../component/Footer'
import Contact from '../component/Contact'
import Product from '../component/Product'

const Shop = () => {
  return (
    <div className="flex flex-col gap-5">
    <div className='w-full h-[500px] bg-[#7322FF] rounded-4xl flex gap-10 items-center justify-center'>
        <div className="txt text-center">
            <p className='text-[200px] text-white'>SHOP</p>
            <p className='text-[30px] text-[white]'>Goodness to your doorstep.</p>
        </div>
        
    </div>
    <Product />
    <Contact />
    <Footer />
    </div>
  )
}

export default Shop
import React from 'react'
import image from './media/Smile.png'
const Footer = () => {
  return (
    <div className='w-full h-[600px] bg-[#7322FF] rounded-4xl mt-5 flex flex-col justify-center items-center gap-25'>
      <div className="image flex flex-col items-center relative mt-20">
        <img className='w-[200px] absolute bottom-20' src={image} alt="" />
        <img src="https://framerusercontent.com/images/XGurtpP64iIvOXNApTLw9to.svg" alt="" />
      </div>
      <div className="links flex gap-7 text-white">
        <a href="/">Home</a>
        <a href="/menu">Menu</a>
        <a href="/shop">Shop</a>
        <a href="/contact">Contact</a>
      </div>
    </div>
  )
}

export default Footer
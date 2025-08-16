import React from 'react'
import image from './media/Smile.png'

const Section2 = () => {
  return (
    <div className='bg-[#EAEDF6] flex justify-center mt-2 rounded-4xl relative'>
              <img src={image} className=' absolute w-[300px] bottom-10' alt="" />

      <div className="title mt-10 text-center">
        <div className="flex justify-center">
        </div>
        <p className='text-[50px] text-[#1D1A40] mt-40'>Roasted goodness to <br /> your doorstep!</p>
      </div>
    </div>
  )
}

export default Section2
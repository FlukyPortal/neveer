import React from 'react'

const Card1 = () => {
  return (
    <div className='bg-[#7322FF] w-full h-[100vh] rounded-4xl flex items-center justify-center relative overflow-hidden'>
    <div className="txt text-[#fff] text-center leading-50">
       <img src="https://framerusercontent.com/images/x8naPHdQLnbzQfjcHvzaPM7fRM.png?scale-down-to=1024" className='absolute w-[350px] left-[40%] top-[40%] z-10 -rotate-10' alt="" />
       <img src="https://framerusercontent.com/images/SBwpe6hdDWEHkEc5yTU0AC50.png?scale-down-to=512" className='absolute w-[350px] left-[35%] top-[10%]' />
       <p className='text-[200px] z-30 relative font-bold '>KOFFE</p>
       <p className='text-[200px] z-30 relative font-bold '>LANE</p>
       <div className="circule bg-[#FE7BFF] w-[200px] h-[200px] rounded-full absolute right-75 bottom-55 z-40 flex items-center justify-center"><p className='rotate-15 leading-8 text-[30px] text-[#7322FF] py-15 px-3 border-4 border-[#7322FF] border-dashed rounded-full'>Roasted <br /> Goodness</p></div>
   </div>       
</div>
  )
}

export default Card1
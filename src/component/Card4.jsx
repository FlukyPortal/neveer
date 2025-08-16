import React from 'react'

const Card4 = () => {
  return (
    <div className='w-[50%] h-[600px] rounded-4xl flex items-center justify-center' style={{ backgroundImage: 'url(https://framerusercontent.com/images/1rBRJtShzcRbMCO7d5Ne8pGro9I.png?scale-down-to=1024)', backgroundPosition: 'center', backgroundSize: 'cover' }}>
      <div className="relative w-[250px] h-[250px] flex items-center justify-center bg-white rounded-full font-sans">
        <div className="dot w-[30px] h-[30px] bg-[#80604A] absolute rounded-full mr-2"></div>
        <svg viewBox="0 0 250 250" className="w-full h-full">
          <defs>
            <path
              id="circlePath"
              d="M125,125
           m-100,0
           a100,100 0 1,1 200,0
           a100,100 0 1,1 -200,0"
            />
          </defs>
          <text fill="#000" fontSize="14" fontWeight="bold" letterSpacing="3">
            <textPath href="#circlePath" startOffset="0%" textLength="628">
              OPEN ・ NY BRANCH ・ NY BRANCH ・ NY BRANCH ・
            </textPath>
          </text>
        </svg>
      </div>

    </div>
  )
}

export default Card4
import React from 'react'
import Card1 from './Card1'
import Card2 from './Card2'
import Card3 from './Card3'
import Card4 from './Card4'
import Card5 from './Card5'

const Hero = () => {
  return (
    <div className="flex flex-col gap-5">
        <Card1 />
        <div className="flex gap-5">
            <Card2 />
            <Card3 />
            </div>

            <div className="flex gap-5">
              <Card4 />
              <Card5 />
            </div>
        
    </div>
  )
}

export default Hero
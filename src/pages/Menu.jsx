import React, { useEffect, useRef } from 'react'
import Footer from '../component/Footer'
import Contact from '../component/Contact'
import MenuCard from '../component/MenuCard'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Menu = () => {
  const containerRef = useRef(null)
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero section animation on load
      gsap.timeline()
        .fromTo('.menu-hero', {
          opacity: 0,
          scale: 0.9
        }, {
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: "power3.out"
        })
        .fromTo('.menu-title', {
          y: -100,
          opacity: 0,
          rotation: -10
        }, {
          y: 0,
          opacity: 1,
          rotation: 0,
          duration: 1.2,
          ease: "back.out(1.7)"
        }, "-=1")
        .fromTo('.menu-image', {
          x: 200,
          opacity: 0,
          rotation: 20
        }, {
          x: 0,
          opacity: 1,
          rotation: 0,
          duration: 1,
          ease: "power3.out"
        }, "-=0.8")

      // Section titles with scroll trigger
      gsap.utils.toArray('.section-title').forEach((title, index) => {
        gsap.fromTo(title, {
          opacity: 0,
          y: 50,
          rotationX: 90
        }, {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: title,
            start: 'top 85%',
            end: 'bottom 15%',
            toggleActions: 'play none none reverse'
          }
        })
      })

      // Menu cards animation
      gsap.utils.toArray('.menu-cards').forEach((card, index) => {
        gsap.fromTo(card, {
          opacity: 0,
          y: 100,
          scale: 0.8
        }, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        })
      })

      // Contact section animation
      gsap.fromTo('.contact-section', {
        opacity: 0,
        y: 80
      }, {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '.contact-section',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      })

      // Footer animation
      gsap.fromTo('.footer-section', {
        opacity: 0,
        y: 60
      }, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: '.footer-section',
          start: 'top 90%',
          end: 'bottom 10%',
          toggleActions: 'play none none reverse'
        }
      })

    }, containerRef)

    return () => ctx.revert()
  }, [])
  
  return (
    <div ref={containerRef} className="flex flex-col gap-5">
      <div className='menu-hero w-full h-[500px] bg-[#7322FF] rounded-4xl flex gap-10 items-center justify-center overflow-hidden'>
        <div className="txt text-center flex flex-col justify-center items-center relative">
            <p className='menu-title text-[200px] text-white'>MENU</p>
            <img src="https://framerusercontent.com/images/SKAZAmQ2u4mWyCY31WhRyFxgKs.png?scale-down-to=1024" className='menu-image w-[300px] absolute top-30  h-[400px]' alt="" />
        </div>
    </div>

    <div className="section-title txt flex flex-col items-center ">
      <p className='text-[50px] text-[#1D1A40] mt-5'>Coffee</p>
      <p className='text-[#A8ABB9] font-sans font-medium'>We have something for everyone</p>
    </div>

    <div className="menu-cards menu-product m-10">
      <MenuCard />
    </div>

    <div className="section-title txt flex flex-col items-center ">
      <p className='text-[50px] text-[#1D1A40]'>Food</p>
      <p className='text-[#A8ABB9] font-sans font-medium'>We have something for everyone</p>
    </div>
    <div className="menu-cards menu-product m-10">
      <MenuCard />
    </div>
    <div className="contact-section">
      <Contact />
    </div>
    <div className="footer-section">
      <Footer />
    </div>
    </div>
  )
}

export default Menu
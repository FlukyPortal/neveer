import React, { useEffect, useRef } from 'react'
import Footer from '../component/Footer'
import Contact from '../component/Contact'
import image from '../component/media/Smile.png'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Contactus = () => {
  const containerRef = useRef(null)
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero section animation
      gsap.timeline()
        .fromTo('.contact-hero', {
          opacity: 0,
          y: 200,
          rotationX: 60
        }, {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 1.5,
          ease: "power3.out"
        })
        .fromTo('.contact-title', {
          scale: 0,
          rotation: -20
        }, {
          scale: 1,
          rotation: 0,
          duration: 1.2,
          ease: "back.out(2)"
        }, "-=1")
        .fromTo('.contact-subtitle', {
          opacity: 0,
          y: 30
        }, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out"
        }, "-=0.5")

      // Smile image animation
      gsap.fromTo('.smile-image', {
        opacity: 0,
        scale: 0,
        rotation: 360
      }, {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 1.5,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: '.smile-image',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      })

      // Form description animation
      gsap.fromTo('.form-description', {
        opacity: 0,
        x: -100
      }, {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: '.form-description',
          start: 'top 85%',
          end: 'bottom 15%',
          toggleActions: 'play none none reverse'
        }
      })

      // Form inputs stagger animation
      gsap.fromTo('.form-input', {
        opacity: 0,
        y: 50,
        scale: 0.9
      }, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.form-container',
          start: 'top 75%',
          end: 'bottom 25%',
          toggleActions: 'play none none reverse'
        }
      })

      // Submit button animation
      gsap.fromTo('.submit-btn', {
        opacity: 0,
        scale: 0.5,
        y: 100
      }, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: '.submit-btn',
          start: 'top 90%',
          end: 'bottom 10%',
          toggleActions: 'play none none reverse'
        }
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
    <div ref={containerRef} className='flex flex-col gap-5'>
         <div className='contact-hero w-full h-[500px] bg-[#7322FF] rounded-4xl flex gap-10 items-center justify-center'>
        <div className="txt text-center">
            <p className='contact-title text-[200px] text-white'>CONTACT</p>
            <p className='contact-subtitle text-[30px]   text-[white]'>We'd love to hear from you!</p>
        </div>
    </div>
    <div className="relative">
      <img src={image} className='smile-image w-[200px] absolute -top-20 left-[43%]' alt="" />
    <div className="form-container grid grid-cols-1 px-5 pb-10 pt-30 gap-10 w-full ml-[25%] items-center justify-center">
    <p className='form-description text-[gray] text-1xl ml-20'>We're always here to make your coffee experience better.</p>
    <input type="text" className='form-input border border-[gray] w-[50%] p-5 rounded-4xl' placeholder='Name' />
    <input type="email" className='form-input border border-[gray] w-[50%] p-5 rounded-4xl' placeholder='Email' />
    <input type="number" className='form-input border border-[gray] w-[50%] p-5 rounded-4xl' placeholder='Phone number' />
    <input type="text" className='form-input border border-[gray] w-[50%] pb-50 pt-3 pl-5 rounded-4xl' placeholder='Message' />

    </div>
    <div className="btn w-full flex mb-10 items-center justify-center"><button className='submit-btn bg-[#7322FF] py-4 px-100 rounded-full text-white text-1xl'>Send</button></div>
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

export default Contactus
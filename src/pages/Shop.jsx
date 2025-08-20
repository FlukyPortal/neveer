import React, { useEffect, useRef } from 'react'
import Footer from '../component/Footer'
import Contact from '../component/Contact'
import Product from '../component/Product'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Shop = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero section entrance animation
      gsap.timeline()
        .fromTo('.shop-hero', {
          opacity: 0,
          y: 150,
          rotationX: 45
        }, {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 1.5,
          ease: "power3.out"
        })
        .fromTo('.shop-title', {
          scale: 0,
          rotation: 180
        }, {
          scale: 1,
          rotation: 0,
          duration: 1.2,
          ease: "back.out(2)",
        }, "-=1")
        .fromTo('.shop-subtitle', {
          opacity: 0,
          y: 50
        }, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out"
        }, "-=0.5")

      // Product section with scroll trigger
      gsap.fromTo('.product-section', {
        opacity: 0,
        scale: 0.7,
        y: 100
      }, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: '.product-section',
          start: 'top 75%',
          end: 'bottom 25%',
          toggleActions: 'play none none reverse',
          scrub: 1
        }
      })

      // Contact section animation
      gsap.fromTo('.contact-section', {
        opacity: 0,
        x: -100,
        rotationY: 45
      }, {
        opacity: 1,
        x: 0,
        rotationY: 0,
        duration: 1.2,
        ease: "power2.out",
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
        y: 80,
        scale: 0.9
      }, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: '.footer-section',
          start: 'top 90%',
          end: 'bottom 10%',
          toggleActions: 'play none none reverse'
        }
      })

      // Parallax effect for hero background
      gsap.to('.shop-hero', {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: '.shop-hero',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      })

    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="flex flex-col gap-5">
    <div className='shop-hero w-full h-[600px] mt-35 bg-[#7322FF] rounded-4xl flex gap-10 items-center justify-center'>
        <div className="txt text-center">
            <p className='shop-title text-[200px] text-white'>SHOP</p>
            <p className='shop-subtitle text-[30px] text-[white]'>Goodness to your doorstep.</p>
        </div>
    </div>
    <div className="product-section">
      <Product />
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

export default Shop
import React, { useEffect, useRef } from 'react'
import Hero from '../component/Hero'
import Section2 from '../component/Section2'
import Product from '../component/Product'
import Contact from '../component/Contact'
import Footer from '../component/Footer'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Home = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial page load animation
      gsap.timeline()
        .fromTo('.hero-section', {
          opacity: 0,
          y: 100
        }, {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out"
        })
        .fromTo('.section2-animate', {
          opacity: 0,
          x: -100
        }, {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.out"
        }, "-=0.5")

      // ScrollTrigger animations for each section
      gsap.fromTo('.section2-animate', {
        opacity: 0,
        y: 80
      }, {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '.section2-animate',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      })

      gsap.fromTo('.product-animate', {
        opacity: 0,
        scale: 0.8
      }, {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: '.product-animate',
          start: 'top 75%',
          end: 'bottom 25%',
          toggleActions: 'play none none reverse'
        }
      })

      gsap.fromTo('.contact-animate', {
        opacity: 0,
        y: 60
      }, {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '.contact-animate',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      })

      gsap.fromTo('.footer-animate', {
        opacity: 0,
        y: 40
      }, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: '.footer-animate',
          start: 'top 90%',
          end: 'bottom 10%',
          toggleActions: 'play none none reverse'
        }
      })

    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef}>
      <div className="hero-section">
        <Hero />
      </div>
      <div className="section2-animate">
        <Section2 />
      </div>
      <div className="product-animate">
        <Product />
      </div>
      <div className="contact-animate">
        <Contact />
      </div>
      <div className="footer-animate">
        <Footer />
      </div>
    </div>
  )
}

export default Home

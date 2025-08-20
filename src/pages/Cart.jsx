import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addItem, removeItem, clearCart } from '../store/cartSlice'
import { FiPlus, FiMinus, FiTrash2 } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { FaCartShopping } from 'react-icons/fa6'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Cart = () => {
  const dispatch = useDispatch()
  const { items, totalQuantity, totalAmount } = useSelector((state) => state.cart)
  const containerRef = useRef(null)

  const handleAddItem = (item) => {
    dispatch(addItem(item))
  }

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id))
  }

  const handleClearCart = () => {
    dispatch(clearCart())
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Page title animation
      gsap.fromTo('.cart-title', {
        opacity: 0,
        y: -50,
        scale: 0.8
      }, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "back.out(1.7)"
      })

      // Cart container animation
      gsap.fromTo('.cart-container', {
        opacity: 0,
        y: 100
      }, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.3
      })

      // Cart items stagger animation
      gsap.fromTo('.cart-item', {
        opacity: 0,
        x: -100,
        scale: 0.9
      }, {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.1
      })

      // Cart summary animation
      gsap.fromTo('.cart-summary', {
        opacity: 0,
        y: 50
      }, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.5
      })

      // Empty cart animation (if applicable)
      gsap.fromTo('.empty-cart', {
        opacity: 0,
        scale: 0.5,
        rotation: -10
      }, {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 1.5,
        ease: "back.out(1.7)"
      })

    }, containerRef)

    return () => ctx.revert()
  }, [items])

  if (items.length === 0) {
    return (
      <div ref={containerRef} className='min-h-screen p-6 flex items-center'>
        <div className='max-w-6xl mx-auto w-full'>
          <h1 className='cart-title text-4xl font-bold text-center text-[#1D1A40] mb-8'>Shopping Cart</h1>
          <div className='cart-container bg-white rounded-lg shadow-md p-6'>
            <div className='empty-cart text-center text-[#1D1A40] py-12'>
              <div className='text-6xl mb-4 flex justify-center'><FaCartShopping /></div>
              <h2 className='text-2xl font-semibold mb-2'>Your cart is empty</h2>
              <p className='text-gray-400 mb-6'>Add some delicious coffee to get started!</p>
              <Link 
                to="/" 
                className='bg-[#7322FF] text-white px-6 py-3 rounded-full hover:bg-[#5a1acc] transition-colors'
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div ref={containerRef} className='min-h-screen p-6'>
      <div className='max-w-6xl mx-auto'>
        <h1 className='cart-title text-4xl font-bold text-center text-[#1D1A40] mb-8'>Shopping Cart</h1>
        
        <div className='cart-container bg-white rounded-lg shadow-md p-6'>
          <div className='flex justify-between items-center mb-6'>
            <h2 className='text-2xl font-semibold text-[#1D1A40]'>Cart Items ({totalQuantity})</h2>
            <button 
              onClick={handleClearCart}
              className='flex items-center gap-2 text-red-500 hover:text-red-700 transition-colors'
            >
              <FiTrash2 />
              Clear Cart
            </button>
          </div>

          <div className='space-y-4'>
            {items.map((item) => (
              <div key={item.id} className='cart-item flex items-center gap-4 p-4 border border-gray-200 rounded-lg'>
                <img 
                  src={item.image} 
                  alt={item.name}
                  className='w-20 h-20 object-cover rounded-lg'
                />
                
                <div className='flex-1'>
                  <h3 className='text-lg font-semibold text-[#1D1A40]'>{item.name}</h3>
                  <p className='text-gray-600'>${item.price}</p>
                </div>

                <div className='flex items-center gap-3'>
                  <button 
                    onClick={() => handleRemoveItem(item.id)}
                    className='w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors'
                  >
                    <FiMinus className='w-4 h-4' />
                  </button>
                  
                  <span className='font-semibold min-w-[2rem] text-center text-[#1D1A40]'>{item.quantity}</span>
                  
                  <button 
                    onClick={() => handleAddItem(item)}
                    className='w-8 h-8 rounded-full bg-[#93F3AA] flex items-center justify-center hover:bg-[#7ee089] transition-colors'
                  >
                    <FiPlus className='w-4 h-4' />
                  </button>
                </div>

                <div className='text-right min-w-[4rem]'>
                  <p className='font-semibold text-[#1D1A40]'>${item.totalPrice.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>

          <div className='cart-summary mt-8 pt-6 border-t border-gray-200'>
            <div className='flex justify-between items-center mb-4'>
              <span className='text-xl font-semibold text-[#1D1A40]'>Total: ${totalAmount.toFixed(2)}</span>
            </div>
            
            <div className='flex gap-4'>
              <Link 
                to="/"
                className='flex-1 bg-gray-200 text-gray-800 py-3 px-6 rounded-full text-center hover:bg-gray-300 transition-colors'
              >
                Continue Shopping
              </Link>
              <button className='flex-1 bg-[#7322FF] text-white py-3 px-6 rounded-full hover:bg-[#5a1acc] transition-colors'>
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { BsCartFill } from 'react-icons/bs'

const Navbar = () => {
    const totalQuantity = useSelector((state) => state.cart.totalQuantity)
    
    return (
        <div className="w-full absolute flex flex-col items-center justify-center">
            <div className='bg-[#93F3AA] w-[70%] rounded-full h-15 flex items-center justify-between p-5 fixed top-8 left-1/2 transform -translate-x-1/2 z-50 shadow-lg'>
                <div className="logo">
                    <Link to="/">
                        <img src="https://framerusercontent.com/images/K2ZYusAMck7jg9gN9jfI2FAslA.svg" alt="" />
                    </Link>
                </div>
                <div className="links flex gap-5 text-[#1D1A40]">
                    <Link to="/" className="hover:text-[#0D0A20] transition-colors">Home</Link>
                    <a href="#" className="hover:text-[#0D0A20] transition-colors">Menu</a>
                    <a href="/shop" className="hover:text-[#0D0A20] transition-colors">Shop</a>
                    <a href="#" className="hover:text-[#0D0A20] transition-colors">Location</a>
                    <a href="#" className="hover:text-[#0D0A20] transition-colors">Contact</a>
                </div>
                <div className="cart relative">
                    <Link to="/cart">
                        <BsCartFill className='text-[#1D1A40] hover:text-[#0D0A20] transition-colors cursor-pointer' />
                        {totalQuantity > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                {totalQuantity}
                            </span>
                        )}
                    </Link>
                </div>
            </div>
            {/* Spacer to prevent content from being hidden behind the fixed navbar */}
            <div className="h-24"></div>
        </div>
    )
}

export default Navbar
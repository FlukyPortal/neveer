import React from 'react'
import { useDispatch } from 'react-redux'
import { FiPlus } from 'react-icons/fi'
import { addItem } from '../store/cartSlice'


const Product = () => {
    const dispatch = useDispatch()
    
    const products = [
        {
            id: 1,
            image: 'https://framerusercontent.com/images/NXttOnsmf4ONyIuiMGkBzv7ECU.jpg?scale-down-to=1024',
            name: 'Premium Arabica Coffee',
            content: 'Ground coffee, medium roast',
            price: 19.99
        },
        {
            id: 2,
            image: 'https://framerusercontent.com/images/NXttOnsmf4ONyIuiMGkBzv7ECU.jpg?scale-down-to=1024',
            name: 'Dark Roast Blend',
            content: 'Ground coffee, dark roast',
            price: 20.99
        },
        {
            id: 3,
            image: 'https://framerusercontent.com/images/NXttOnsmf4ONyIuiMGkBzv7ECU.jpg?scale-down-to=1024',
            name: 'Colombian Single Origin',
            content: 'Ground coffee, medium roast',
            price: 22.99
        },
        {
            id: 4,
            image: 'https://framerusercontent.com/images/NXttOnsmf4ONyIuiMGkBzv7ECU.jpg?scale-down-to=1024',
            name: 'Espresso Blend',
            content: 'Ground coffee, espresso roast',
            price: 24.99
        },
        {
            id: 5,
            image: 'https://framerusercontent.com/images/NXttOnsmf4ONyIuiMGkBzv7ECU.jpg?scale-down-to=1024',
            name: 'Ethiopian Highland',
            content: 'Ground coffee, light roast',
            price: 26.99
        },
        {
            id: 6,
            image: 'https://framerusercontent.com/images/NXttOnsmf4ONyIuiMGkBzv7ECU.jpg?scale-down-to=1024',
            name: 'French Roast Premium',
            content: 'Ground coffee, dark roast',
            price: 23.99
        }
    ]

    const handleAddToCart = (product) => {
        dispatch(addItem({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image
        }))
    }
    return (
        <div className='w-full bg-[#EAEDF6] grid grid-cols-3 gap-3 rounded-4xl mb-4 p-5'>
            {products.map((product) => (
                <div
                    key={product.id}
                    className="card w-[400px] h-[450px] bg-[#EAEDF6] rounded-4xl relative cursor-pointer transition-transform duration-300 ease-out hover:scale-105"
                    style={{
                        backgroundImage: `url(${product.image})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover'
                    }}
                >
                    <div className="cart flex justify-end w-full py-5 px-5">
                        <div 
                            className="plus w-[40px] h-[40px] rounded-full bg-[#EAEDF6] flex justify-center items-center hover:bg-[#93F3AA] transition-colors cursor-pointer"
                            onClick={() => handleAddToCart(product)}
                        >
                            <FiPlus className='w-[20px]'/>
                        </div>
                    </div>
                    <div className="txt font-sans font-bold flex h-full align-text-bottom relative">
                        <p className='absolute top-80 left-5 text-[#7F8498] font-light'>{product.content}</p>
                        <p className='absolute top-80 right-5 bg-[#EAEDF6] text-[#373457] p-2 rounded-full'>${product.price}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Product
import React from 'react'

const MenuCard = () => {
  const menu = [
    {
      id: 1,
      image: 'https://framerusercontent.com/images/Wx09BkY53p7pbwO9DwKOXPEOaQ.jpg',
      dish: 'Mori Salad',
      text: 'A fresh medley of greens and seasonal vegetables with a zesty dressing.',
      price: '52.11'
    },
    {
      id: 2,
      image: 'https://framerusercontent.com/images/rI3B7nUThFup02W3b9kVyfTlKtE.jpg',
      dish: 'Mori Salad',
      text: 'A fresh medley of greens and seasonal vegetables with a zesty dressing.',
      price: '52.11'
    },
    {
      id: 3,
      image: 'https://framerusercontent.com/images/2OLkQWZEHwAeg6FGqrjEUY1x0M.jpg',
      dish: 'Mori Salad',
      text: 'A fresh medley of greens and seasonal vegetables with a zesty dressing.',
      price: '52.11'
    },
    {
      id: 4,
      image: 'https://framerusercontent.com/images/BvucaLeIx9SJxNQ0Qr1HZljzJQ.jpg',
      dish: 'Mori Salad',
      text: 'A fresh medley of greens and seasonal vegetables with a zesty dressing.',
      price: '71.81'
    },
    {
      id: 5,
      image: 'https://framerusercontent.com/images/MUunx5XnPoE5Ccvht8KEAe2YK8.jpg',
      dish: 'Mori Salad',
      text: 'A fresh medley of greens and seasonal vegetables with a zesty dressing.',
      price: '42.11'
    },
    {
      id: 6,
      image: 'https://framerusercontent.com/images/22up5UcV8ol5GmSG2yjGmvstrXM.jpg',
      dish: 'Mori Salad',
      text: 'A fresh medley of greens and seasonal vegetables with a zesty dressing.',
      price: '82.11'
    }
  ]
  return (
    <div className='gap-5 p-5 grid grid-cols-2'>
      {menu.map((menu) => (
        <div key={menu.id}
         className="content flex border-b-[#00000010] border-b-2 w-fit items-center p-5 mb-5">
          <div className="img"><img src={menu.image} className='rounded-full w-[100px] h-[100px] mr-5' alt="" /></div>
          <div className="txt flex items-center gap-10">
            <div className="left">
              <p className='text-[#1D1A40]'>{menu.dish}</p>
              <p className='text-[gray] font-sans font-medium w-[70%]'>{menu.text}</p>
            </div>
            <div className="right text-[#73788F]"><p>${menu.price}</p></div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default MenuCard
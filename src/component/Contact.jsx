import React from 'react'

const Contact = () => {
  return (
    <div className='w-full h-[400px] bg-[#93F3AA] rounded-4xl justify-center items-center flex'>
        <div className="content flex flex-col justify-center items-center h-[200px] gap-5">
            <div className="txt text-center">
                <p className='text-[50px] text-[#1D1A40]'>Stay in touch!</p>
                <p className='font-sans text-[20px] text-[#4C6F6A]'>Latest offers, news, & goodies to your inbox.</p>
            </div>

            <div className="flex items-center bg-white rounded-full px-2 py-2">
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-transparent outline-none px-5 py-3 flex-1"
                />
                <button
                    type="submit"
                    className="ml-2 bg-[#1D1A40] text-white rounded-full px-6 py-3 font-semibold"
                >
                    Submit
                </button>
            </div>
            </div>
    </div>
  )
}

export default Contact
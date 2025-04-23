import React from 'react'

const Subscribe = () => {
    return (
        <div data-aos="zoom-in" className='mb-20 bg-slate-700 dark:bg-gray-800 text-white'>
            <div className='container backdrop-blur-sm py-10'>
                <div className='space-y-6 max-w-2xl w-full mx-auto px-4'>
                    <h1 className='text-xl sm:text-4xl font-semibold text-left'>
                        Get Notified About New Products
                    </h1>
                    <input
                        type="email"
                        data-aos="fade-up"
                        placeholder='Enter your Email'
                        className='bg-white w-full px-4 py-2 rounded-md text-black'
                    />
                </div>
            </div>
        </div>


    )
}

export default Subscribe

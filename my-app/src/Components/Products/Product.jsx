import React from 'react'
import Img1 from '../../assets/women/women.png';
import Img2 from '../../assets/women/women2.jpg';
import Img3 from '../../assets/women/women3.jpg';
import Img4 from '../../assets/women/women4.jpg';
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Women Ethnic",
    rating: 4.4,
    color: "white",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Women western",
    rating: 4.0,
    color: "red",
    aosDelay: "600",
  },
  {
    id: 3,
    img: Img3,
    title: "Goggles",
    rating: 4.2,
    color: "Brown",
    aosDelay: "200",
  },
  {
    id: 4,
    img: Img4,
    title: "Women Ethnic",
    rating: 4.7,
    color: "black",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Women Ethnic",
    rating: 4.7,
    color: "black",
    aosDelay: "400",
  }
]

const Product = () => {
  return (
    <div className='mt-4 mb-12'>
      <div className='container mx-auto px-4'>
        
        <div className='text-center mb-10 max-w-[600px] mx-auto'>
          <p data-aos="fade-up" className='text-sm text-indigo-500 mt-5 mb-3'>
            Top Selling Products for you
          </p>
          <h1 data-aos="fade-up" className='text-3xl font-bold text-white'>
            Products
          </h1>
          <p data-aos="fade-up" className='text-xs text-gray-400'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime vitae quos exercitationem consectetur doloribus!
          </p>
        </div>

        {/* Products Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 place-items-center'>
          {ProductsData.map((data) => (
            <div
              key={data.id}
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              className='bg-[#1a1a2e] p-4 rounded-xl shadow-md hover:shadow-lg hover:shadow-gray-500/30 transition duration-300 ease-in-out transform hover:-translate-y-2 w-[170px]'
            >
              <img
                src={data.img}
                alt={data.title}
                className='h-[220px] w-full object-cover rounded-md mb-3'
              />
              <h3 className='font-semibold text-white'>{data.title}</h3>
              <p className='text-sm text-gray-400'>{data.color}</p>
              <div className='flex items-center gap-2 mt-1'>
                <FaStar className='text-yellow-400' />
                <span className='text-white text-sm'>{data.rating}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className='flex justify-center'>
          <button className='mt-10 bg-indigo-600 hover:bg-indigo-700 transition px-6 py-2 rounded-md text-white font-medium shadow-md'>
            View All
          </button>
        </div>
      </div>
    </div>

  )
}

export default Product

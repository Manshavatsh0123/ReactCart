import React from 'react'
import Img1 from "../../assets/shirt/shirt.png";
import Img2 from "../../assets/shirt/shirt2.png";
import Img3 from "../../assets/shirt/shirt3.png";
import { FaStar } from "react-icons/fa6";

const TopProduct = [
    {
        id: 1,
        img: Img1,
        title: "Casual Wear",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, sint quasi"
    },
    {
        id: 2,
        img: Img2,
        title: "Casual Wear",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, sint quasi"
    },
    {
        id: 3,
        img: Img3,
        title: "Casual Wear",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, sint quasi"
    },
    {
        id: 4,
        img: Img3,
        title: "Casual Wear",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, sint quasi"
    },
    {
        id: 5,
        img: Img3,
        title: "Casual Wear",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, sint quasi"
    },
]
const TopProducts = ({handleOrderPopup}) => {
    return (
        <div className='container mx-auto px-4 py-16 '>
         <div className='text-center mb-10'>
           <p data-aos="fade-up" className='text-sm text-indigo-500 mb-2'> Top Rated Products for you</p>
           <h1 data-aos="fade-up" className="text-3xl font-bold mb-2">Best Products</h1>
           <p data-aos="fade-up" className="text-xs text-gray-400 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime vitae quos exercitationem consectetur doloribus!</p>
           <div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-12 mt-20 place-items-center'>
              {TopProduct.map((data)=>(
                <div data-aos="zoom-in" className='rounded-2xl text-center bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-indigo-500 hover:text-white relative shadow-xl duration-300 group max-w-[300px] p-5'>
                    <div>
                        <img src={data.img} alt="" className='max-w-[160px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md' />
                    </div>
                 <div className='w-full flex items-center justify-center gap-1'>
                  <FaStar className='text-yellow-500'/>
                  <FaStar className='text-yellow-500'/>
                  <FaStar className='text-yellow-500'/>
                  <FaStar className='text-yellow-500'/>
                  </div>
                  <h1 className='text-xl font-bold mb-1 '>{data.title}</h1>
                  <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2 '>{data.description}</p>
                  <button className='bg-indigo-500 hover:scale-105 duratio-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-indigo-500' onClick={handleOrderPopup}>Order Now</button>
                </div>
              ))}
            </div>
           </div>
         </div>
        </div>
    )
}

export default TopProducts

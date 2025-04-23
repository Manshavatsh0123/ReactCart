import React from 'react'
import Image1 from "../../assets/hero/women.png";
import Image2 from "../../assets/hero/shopping.png";
import Image3 from "../../assets/hero/sale.png";
import Slider from "react-slick";



const ImageList = [
    {
        id: 1,
        img: Image1,
        title: "Upto 50% off on all Men's Wear",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, at ipsa itaque voluptate rerum necessitatibus, dignissimos ratione dolore saepe, ad asperiores nulla esse eius illo alias exercitationem voluptates dolores laboriosam",
    },
    {
        id: 2,
        img: Image2,
        title: "Upto 30% off on all Women's Wear",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, at ipsa itaque voluptate rerum necessitatibus, dignissimos ratione dolore saepe, ad asperiores nulla esse eius illo alias exercitationem voluptates dolores laboriosam",
    },
    {
        id: 3,
        img: Image3,
        title: "Upto 80% off on all Product's",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, at ipsa itaque voluptate rerum necessitatibus, dignissimos ratione dolore saepe, ad asperiores nulla esse eius illo alias exercitationem voluptates dolores laboriosam",
    },

]

const Hero = ({ handleOrderPopup }) => {
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true
    };
    return (
        <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-green-100 flex justify-center items-center dark:bg-slate-950 dark:text-white duration-300'>
            <div className='h-[700px] w-[700px] bg-indigo-500/40 absolute -top-1.5 right-0 rounded-3xl rotate-45 -z-10'></div>
            <div className='container pb-8 sm:pb-0'>
                <Slider {...settings}>
                    {ImageList.map((data, index) => {
                        return (
                            <div key={index}>
                                <div className='grid grid-cols-1 sm:grid-cols-2'>
                                    <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'>
                                        <h1 data-aos="zoom-out" data-aos-duration="500" data-aos-once="true" className='text-5xl sm:text-6xl lg:text-6xl font-bold'>
                                            {data.title}
                                        </h1>
                                        <p data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" className='text-sm'>
                                            {data.description}
                                        </p>
                                        <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="300" className='inline-block overflow-visible'>
                                            <button
                                                onClick={() => {
                                                    handleOrderPopup();
                                                }}
                                                className='bg-gradient-to-r from-indigo-500 to-emerald-300 transform hover:scale-105 transition-transform duration-200 text-white py-2 px-6 rounded-full shadow-md ms-2'
                                            >
                                                Order Now
                                            </button>
                                        </div>
                                    </div>
                                    <div className='order-1 sm:order-2'>
                                        <div data-aos="zoom-in" data-aos-once="true" className='relative z-10'>
                                            <img
                                                src={data.img}
                                                alt="slider image"
                                                className='w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 object-contain mx-auto z-20 relative'
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </Slider>
            </div>
        </div>
    )
}

export default Hero

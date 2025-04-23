import React from 'react'
import Slider from "react-slick";

const TestimonialData = [
    {
        id: 1,
        name: "Victor",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        img: "https://picsum.photos/seed/picsum/200/300",
    },
    {
        id: 2,
        name: "Victor",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        img: "https://picsum.photos/seed/picsum/200/300",
    },
    {
        id: 3,
        name: "Victor",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        img: "https://picsum.photos/seed/picsum/200/300",
    },
    {
        id: 4,
        name: "Victor",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        img: "https://picsum.photos/seed/picsum/200/300",
    },
    {
        id: 5,
        name: "Victor",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        img: "https://picsum.photos/seed/picsum/200/300",
    }
];

const Testimonials = () => {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 1 },
            },


        ]
    };
    return (
        <div className='py-16 bg-[#0B0F29] text-white'>
            <div className='container mx-auto px-4'>
                <div className='text-center mb-12 max-w-2xl mx-auto'>
                    <p data-aos="fade-up" className='text-indigo-500 font-medium'>What Customers Say?</p>
                    <h1 data-aos="fade-up" className='text-3xl sm:text-4xl font-bold mb-2'>Testimonials</h1>
                    <p data-aos="fade-up" className='text-gray-400 text-sm'>
                        Hear what our customers have to say about our services and products.
                    </p>
                </div>

                <div data-aos="zoom-in" className="flex justify-center">
                    <Slider {...settings} className='w-full max-w-6xl'>
                        {TestimonialData.map((data) => (
                            <div key={data.id} className='px-3'>
                                <div className='flex flex-col items-center text-center gap-4 bg-white dark:bg-slate-800 text-black dark:text-white shadow-md py-6 px-6 rounded-2xl transition-all duration-300 hover:shadow-xl max-w-sm mx-auto'>

                                    <img
                                        src={data.img}
                                        alt={data.name}
                                        className='w-20 h-20 rounded-full object-cover border-4 border-indigo-500 shadow-md'
                                    />

                                    <p className='text-sm italic text-gray-700 dark:text-gray-300'>
                                        “{data.text}”
                                    </p>

                                    <h2 className='text-lg font-semibold text-gray-900 dark:text-white'>
                                        {data.name}
                                    </h2>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>

    )
}

export default Testimonials

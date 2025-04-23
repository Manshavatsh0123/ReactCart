import React from 'react';
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import DarkMode from "./DarkMode";


const Menu = [
    { id: 1, name: "Home", link: "/#" },
    { id: 2, name: "Top Rated", link: "/#services" },
    { id: 3, name: "Kids Wear", link: "/#" },
    { id: 4, name: "Mens Wear", link: "/#" },
    { id: 5, name: "Electronics", link: "/#" }
];


const DropDownlist = [
    { id: 1, name: "Trending Products", link: "/#" },
    { id: 2, name: "Best Selling", link: "/#" }
];

const Navbar = ({ handleOrderPopup }) => {
    return (
        <div className='shadow-md bg-white dark:bg-white duration-200 relative z-40'>
            <div className='bg-indigo-500/40 py-2'>
                <div className='container flex justify-between items-center'>
                    
                    <div>
                        <a href="#" className='font-bold text-xl items-center flex gap-1'>
                            <FiShoppingBag size="30" />
                            NeuroShop
                        </a>
                    </div>

                    
                    <div className='flex justify-between items-center gap-4'>
                        <div className='relative group hidden sm:block'>
                            <input
                                type="text"
                                placeholder='Search'
                                className='w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-lg border border-gray-300 py-1 px-2 text-sm focus:outline-none focus:border-2 focus:border-indigo-500 dark:border-gray-500 dark:bg-slate-800'
                            />
                            <IoMdSearch className='text-slate-800 group-hover:text-indigo-500 absolute top-1/2 -translate-y-1.5 right-3' />
                        </div>

                        <button
                            onClick={() => { handleOrderPopup() }}
                            className='bg-gradient-to-t from-indigo-500 to-emerald-300 transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group'
                        >
                            <span className='group-hover:block hidden transition-all duration-200'>Order</span>
                            <FaCartShopping className='text-xl text-white drop-shadow-sm cursor-pointer' />
                        </button>

                        <div >
                            <DarkMode />
                        </div>
                    </div>
                </div>
            </div>

            
            <div data-aos="zoom-in" className='flex justify-center'>
                <ul className='sm:flex hidden items-center gap-4'>
                    {Menu.map((data) => (
                        <li key={data.id}>
                            <a href={data.link} className='inline-block px-4 text-black hover:text-indigo-500 duration-200'>
                                {data.name}
                            </a>
                        </li>
                    ))}

                    
                    <li className='group relative cursor-pointer'>
                        <a href="#" className='flex items-center text-black gap-[2px] py-2'>
                            Trending Products
                            <FaCaretDown className='transition-all duration-200 group-hover:rotate-180' />
                        </a>

                        <div className='absolute z-[999999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md'>
                            <ul>
                                {DropDownlist.map((data) => (
                                    <li key={data.id}>
                                        <a href={data.link} className='inline-block w-full text-black rounded-md p-2 hover:bg-indigo-500/40'>
                                            {data.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;


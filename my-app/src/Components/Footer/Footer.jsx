import React from 'react';
import { FiShoppingBag } from "react-icons/fi";
import { FaMapLocation } from "react-icons/fa6";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoCall } from "react-icons/io5";

const FooterLinks = [
  { title: "Home", link: "/#" },
  { title: "About", link: "/#about" },
  { title: "Contact", link: "/#contact" },
  { title: "Blog", link: "/#blog" },
];

const Footer = () => {
  return (
    <div className='text-white bg-[#212529]'>
      <div className='container'>
        <div data-aos="zoom-in" className='grid md:grid-cols-3 gap-6 pb-20 pt-5'>

          
          <div className='py-8 px-4'>
            <h1 className='sm:text-3xl text-xl font-bold flex items-center gap-1 mb-3'>
              <FiShoppingBag size="30" /> NeuroShop
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum eius repellat iusto labore! Ab recusandae numquam officiis.</p>
          </div>

          
          <div className='py-8 px-4'>
            <h1 className='sm:text-xl text-xl font-bold mb-3'>IMPORTANT LINKS</h1>
            <ul className='flex flex-col gap-3'>
              {FooterLinks.map((data) => (
                <li key={data.title} className='cursor-pointer hover:text-indigo-500 duration-300 text-gray-200'>
                  <a href={data.link}>{data.title}</a>
                </li>
              ))}
            </ul>
          </div>

         
          <div className='py-8 px-4'>
            <h1 className='sm:text-xl text-xl font-bold mb-3'>CONTACT INFO</h1>
            <div className='flex items-center gap-3 mt-3'>
              <FaMapLocation />
              <p>Delhi, India</p>
            </div>
            <div className='flex items-center gap-3 mt-2'>
              <IoCall />
              <p>+91 6784 8790</p>
            </div>
            <div className='flex items-center gap-4 mt-6'>
              <a href="#"><FaInstagram className='text-3xl' /></a>
              <a href="#"><FaFacebook className='text-3xl' /></a>
              <a href="#"><FaLinkedin className='text-3xl' /></a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;


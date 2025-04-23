import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Banner from "./Components/Banner/banner";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/hero";
import Products from './Components/Products/Product';
import TopProducts from "./Components/TopProduct/TopProducts";
import Subscribe from "./Components/Subscribe/Subscribe";
import Testimonials from "./Components/Testimonials/Testimonials";
import Footer from "./Components/Footer/Footer";


function App() {
const[orderPopup, setOrderPopup] = useState(false);

const handleOrderPopup =() =>{
  setOrderPopup (!orderPopup);
};

useEffect( () => {
 AOS.init({
   offset: 100,
   duration: 800,
   easing: 'ease-in-sine',
   delay: 100
 });
 AOS.refresh();
}, []);

  return (
    <>
      <div className='bg-white dark:bg-gray-900 dark:text-white duration-200'>
        <Navbar handleOrderPopup={handleOrderPopup}/>
        <Hero handleOrderPopup={handleOrderPopup}/>
        <Products/>
        <TopProducts handleOrderPopup={handleOrderPopup} />
      <Banner />
      <Subscribe/>
      <Testimonials/>
      <Footer/>
      </div>
      
    </>
  )
}

export default App

import React from "react";
import Logo from "../images/logo.png";
function Footer (){
    return  (
    <div> 
  <div className="bg-[url('https://cdn.create.vista.com/api/media/small/84967416/stock-photo-near-space-photography-20km-above-ground-real-photo-elements-of-this-image-furnished-by-nasa')] 
        w-full h-[600px] bg-cover min-h-full relative">
   <div className="overlay absolute left-0 top-0 w-full h-full bg-black/60"></div>
   <div className="container">
   <img src={Logo} alt="Logo" className="w-40 h-14 absolute left-[850px] top-[100px]" />
      <p className="text-white text-3xl absolute left-[830px] top-[240px] ">WE ARE SOCIAL</p>
      <div className="social-icons flex gap-10 absolute left-[740px] top-[280px] ">
       <div className="w-12 h-12 mb-20 mt-14 bg-white rounded-full flex items-center justify-center relative top-[30px] left-[40px]">
         <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 " viewBox="0 0 512 512"> <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg></div>
         <div className="w-12 h-12 mb-20 mt-14 bg-white rounded-full flex items-center justify-center relative top-[30px] left-[40px]">
         <svg xmlns="http://www.w3.org/2000/svg"className="w-10 h-10 " viewBox="0 0 512 512"><path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"/></svg></div>
         <div className="w-12 h-12 mb-20 mt-14 bg-white rounded-full flex items-center justify-center relative top-[30px] left-[40px]">
         <svg xmlns="http://www.w3.org/2000/svg"className="w-10 h-10 " viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg></div>
         <div className="w-12 h-12 mb-20 mt-14 bg-white rounded-full flex items-center justify-center relative top-[30px] left-[40px]">
        <svg xmlns="http://www.w3.org/2000/svg"className="w-9 h-9 " viewBox="0 0 448 512"><path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/></svg></div>
      </div>
      <p className="text-white text-2xl absolute left-[750px] top-[490px] ">&copy; 2021 <span className="text-sky-400">Kasper</span> All Right Reserved</p>
   </div>
 </div>
   </div>
    
);
};
export default Footer;
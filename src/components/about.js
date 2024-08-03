import React from "react";

function About (){
    return  (
    <div>
  <div className="about mt-44">
  <div className="container">
   <div className="main-heading">
         <h2 className=" flex items-center justify-center text-6xl mb-10 capitalize font-semibold relative left-[120px]">ABOUT</h2>
         <p className="flex items-center justify-center leading-relaxed text-gray-400 text-2xl mb-20 relative left-[120px]">Curabitur arcu erat, accumsan id imperdiet et, 
            porttitor at sem. Mauris <br></br>  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; blandit aliquet elit, eget tincidunt.</p>
      </div>
   </div>
    <div className="stats bg-[url('https://png.pngtree.com/background/20210715/original/pngtree-pink-background-abstract-background-picture-image_1275126.jpg')] 
w-full bg-cover min-h-full relative h-[700px] ">
     <div className="overlay absolute left-0 top-0 w-full h-full bg-black/60"></div>
   <div className="container flex bg-cyan-600/50 justify-center gap-24 relative left-[150px] top-[150px] h-[390px] ">
      <div className="box">
     <div className="w-20 h-20 mb-20 mt-14 bg-gray-500 rounded-full flex items-center justify-center relative top-[30px] left-[40px]"><svg xmlns="http://www.w3.org/2000/svg"className="w-12 h-20 " viewBox="0 0 512 512"><path d="M88 0C74.7 0 64 10.7 64 24c0 38.9 23.4 59.4 39.1 73.1l1.1 1C120.5 112.3 128 119.9 128 136c0 13.3 10.7 24 24 24s24-10.7 24-24c0-38.9-23.4-59.4-39.1-73.1l-1.1-1C119.5 47.7 112 40.1 112 24c0-13.3-10.7-24-24-24zM32 192c-17.7 0-32 14.3-32 32L0 416c0 53 43 96 96 96l192 0c53 0 96-43 96-96l16 0c61.9 0 112-50.1 112-112s-50.1-112-112-112l-48 0L32 192zm352 64l16 0c26.5 0 48 21.5 48 48s-21.5 48-48 48l-16 0 0-96zM224 24c0-13.3-10.7-24-24-24s-24 10.7-24 24c0 38.9 23.4 59.4 39.1 73.1l1.1 1C232.5 112.3 240 119.9 240 136c0 13.3 10.7 24 24 24s24-10.7 24-24c0-38.9-23.4-59.4-39.1-73.1l-1.1-1C231.5 47.7 224 40.1 224 24z"/></svg></div>
         <div className="number text-6xl font-bold text-white mb-6 relative right-[10px] ">1.236</div>
         <p className="text-2xl font-semibold text-white relative ">Coffee Drinks</p>
      </div>

      <div className="box">
     <div className="w-20 h-20 mb-20 mt-14 bg-gray-500 rounded-full flex items-center justify-center relative top-[30px] left-[40px]"> <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-20 " viewBox="0 0 512 512"><path d="M0 96C0 60.7 28.7 32 64 32l132.1 0c19.1 0 37.4 7.6 50.9 21.1L289.9 96 448 96c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-256c0-8.8-7.2-16-16-16l-161.4 0c-10.6 0-20.8-4.2-28.3-11.7L213.1 87c-4.5-4.5-10.6-7-17-7L64 80z"/></svg></div>
         <div className="number text-6xl font-bold text-white mb-6 relative left-[36px] ">256</div>
         <p className="text-2xl font-semibold text-white relative right-[15px]">Completed Projects</p>
      </div>

      <div className="box">
     <div className="w-20 h-20 mb-20 mt-14 bg-gray-500 rounded-full flex items-center justify-center relative top-[30px] left-[40px]"><svg xmlns="http://www.w3.org/2000/svg"className="w-12 h-20  " viewBox="0 0 512 512"><path d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z"/></svg></div> 
         <div className="number text-6xl font-bold text-white mb-6 relative left-[10px] ">1,743</div>
         <p className="text-2xl font-semibold text-white relative left-[30px]" >Mail Sent</p>
      </div>

      <div className="box">
     <div className="w-20 h-20 mb-20 mt-14 bg-gray-500 rounded-full flex items-center justify-center relative top-[30px] left-[40px]"> <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-20 " viewBox="0 0 576 512"><path d="M400 0L176 0c-26.5 0-48.1 21.8-47.1 48.2c.2 5.3 .4 10.6 .7 15.8L24 64C10.7 64 0 74.7 0 88c0 92.6 33.5 157 78.5 200.7c44.3 43.1 98.3 64.8 138.1 75.8c23.4 6.5 39.4 26 39.4 45.6c0 20.9-17 37.9-37.9 37.9L192 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l192 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-26.1 0C337 448 320 431 320 410.1c0-19.6 15.9-39.2 39.4-45.6c39.9-11 93.9-32.7 138.2-75.8C542.5 245 576 180.6 576 88c0-13.3-10.7-24-24-24L446.4 64c.3-5.2 .5-10.4 .7-15.8C448.1 21.8 426.5 0 400 0zM48.9 112l84.4 0c9.1 90.1 29.2 150.3 51.9 190.6c-24.9-11-50.8-26.5-73.2-48.3c-32-31.1-58-76-63-142.3zM464.1 254.3c-22.4 21.8-48.3 37.3-73.2 48.3c22.7-40.3 42.8-100.5 51.9-190.6l84.4 0c-5.1 66.3-31.1 111.2-63 142.3z"/></svg></div>
         <div className="number text-6xl font-bold text-white mb-6 relative left-[50px] ">17</div>
         <p className="text-2xl font-semibold text-white relative right-[30px]">Awards Received</p>
      </div>
   </div>
 </div>
 
 </div>
 
    </div>
);
};
export default About;
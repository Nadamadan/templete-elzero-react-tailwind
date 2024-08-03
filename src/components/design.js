import React from "react";
import mobile from "../images/mobile.png";

function Design (){
    return  (
    <div>
  <div class="design bg-[url('https://www.cloudynights.com/uploads/monthly_01_2019/post-227599-0-01461400-1546340127.jpg')] 
w-full h-screen bg-cover min-h-full relative mt-24 flex  ">
   <div class="image relative z-2 flex-1">
   <img className="relative bottom-[-350px] left-72 w-[490px] h-[620px] " src={mobile} alt="Logo" />
   </div>
   <div class="text text-white p-[50px] bg-cyan-400/50 h-[500px] w-[900px]  relative top-[250px] ">
      <h2 className="text-5xl mb-20">OUR DESIGN COMES WITH...</h2>
    <ul>
      <li className="flex text-2xl"> <svg xmlns="http://www.w3.org/2000/svg" className=" w-10 h-10 ml-10 mr-8 mb-8" viewBox="0 0 576 512"><path d="M64 0C28.7 0 0 28.7 0 64L0 352c0 35.3 28.7 64 64 64l176 0-10.7 32L160 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l256 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-69.3 0L336 416l176 0c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L64 0zM512 64l0 224L64 288 64 64l448 0z"/></svg>
        Responsive Design</li>
        <li className="flex text-2xl"> <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 ml-10 mr-8 mb-8" viewBox="0 0 576 512"><path d="M64 0C28.7 0 0 28.7 0 64L0 352c0 35.3 28.7 64 64 64l176 0-10.7 32L160 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l256 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-69.3 0L336 416l176 0c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L64 0zM512 64l0 224L64 288 64 64l448 0z"/></svg>
        Modern And Clean Design</li>
        <li className="flex text-2xl"> <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 ml-10 mr-8 mb-8" viewBox="0 0 576 512"><path d="M64 0C28.7 0 0 28.7 0 64L0 352c0 35.3 28.7 64 64 64l176 0-10.7 32L160 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l256 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-69.3 0L336 416l176 0c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L64 0zM512 64l0 224L64 288 64 64l448 0z"/></svg>
        Clean Code</li>
        <li className="flex text-2xl"> <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 ml-10 mr-8 mb-8" viewBox="0 0 576 512"><path d="M64 0C28.7 0 0 28.7 0 64L0 352c0 35.3 28.7 64 64 64l176 0-10.7 32L160 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l256 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-69.3 0L336 416l176 0c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L64 0zM512 64l0 224L64 288 64 64l448 0z"/></svg>
        Browser Friendly</li>
    </ul>
   </div>
   
 </div>
    </div>
);
};
export default Design;
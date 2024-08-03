import React from "react";

function Qote (){
    return  (
    <div>
  <div className="quote bg-[url('https://t4.ftcdn.net/jpg/06/51/36/51/360_F_651365167_W04PhefXV6zXetrfI0KG9uwWBMjbaYX4.jpg')] 
w-full bg-cover min-h-full relative h-[400px] mb-20 ">
     <div className="overlay absolute left-0 top-0 w-full h-full bg-black/70"></div>
   <div className="container text-white absolute top-[190px]  left-[100px]">
      <q className=" flex items-center justify-center mb-6 text-4xl">accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt.</q>
      <span className=" flex text-2xl items-center justify-center">John Doe</span>
   </div>
 </div>
    </div>
);
};
export default Qote;
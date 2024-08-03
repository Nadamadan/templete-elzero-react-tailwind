import React from "react";
import { useState } from "react";

const Photo = [
    {
      id: 1,
      word: "BASIC",
      price:"19",
    },
    {
      id: 2,
      word: "PREMIUM",
      price:"29",
    },
    {
        id: 3,
        word: "PRO",
        price:"39",
      },
      {
        id: 4,
        word: "PLATINUM",
        price:"49",
      },
  
  ];
function Pricing (){

  const [showmodel,setmodel]=useState(false)

  function HandleSubmit(event){
    event.preventDefault();
    setmodel(true);

}
  function HandleDivClick(){
    if(showmodel){
      setmodel(false);
     }
    }

    return  (
    <div>
 <div class="pricing">
   <div class="container">
   <div className="container">
   <div className="main-heading">
         <h2 className=" mt-20 flex items-center justify-center text-6xl mb-10 capitalize font-semibold relative left-[120px] ">PRICING</h2>
         <p className="flex items-center justify-center leading-relaxed text-gray-400 text-2xl mb-20 relative left-[120px]">Curabitur arcu erat, accumsan id imperdiet et, 
            porttitor at sem. Mauris <br></br>  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; blandit aliquet elit, eget tincidunt.</p>
      </div>
   </div>
      <div class="plans grid grid-cols-4 gap-12 relative left-[150px] mt-44">

         {Photo.map((menu) => (
                  <div class="plan bg-gray-200/20 " key={menu.id} >
                  <div class="head border-solid border-y-2 border-cyan-500/50  ">
                     <h3 className="text-3xl my-10 relative left-[120px] ">{menu.word}</h3>
                    <div className="relative left-[100px] mb-14"> <span className="text-3xl">$</span> <span className="text-7xl font-bold">{menu.price}</span> <span className="text-3xl"> /Mo</span></div>
                  </div>
                  <ul className="border-solid border-b-2 border-cyan-500/50">
                     <li className="text-2xl my-10 relative left-[100px]  ">Feature No 1</li>
                     <li className="text-2xl my-10 relative left-[100px]">Extra Feature</li>
                     <li className="text-2xl my-10 relative left-[100px]">Extra Feature No 2</li>
                     <li className="text-2xl my-10 relative left-[100px]">Feature</li>
                  </ul>
                  <div class="foot flex justify-center items-center text-2xl border-solid border-2 m-10 p-6 w-48 border-cyan-500/50 relative left-[40px] ">
                     <button  onClick={HandleSubmit}
                      href="#">Buy Now</button>
                  </div>
               </div>
                ))}
         <Model isVisable={showmodel}/>
       
      </div>
      <div  onClick={HandleDivClick}>
      <p class="contact-text flex justify-center items-center m-14 text-3xl relative left-[120px]">Contact us if you have special request</p>
      <div className=" text-white text-3xl bg-sky-400 py-5 px-12 h-20 w-[246px] relative left-[800px] mb-16">
    <a  href="http://localhost:3000/contact">Contact Us</a></div>
    </div>
   </div>
 </div>

    </div>
);
};
export default Pricing;

 function Model({isVisable}){
  const [showmodel2,setmodel2]=useState(false)
  function HandleDivClick(){
    if(showmodel2){
      setmodel2(false);
     }
    }

  if(isVisable){
      return(
          <div className=" absolute w-screen h-screen flex justify-center items-center bg-gray-300/40">
         
              <div className=" flex justify-center items-center w-2/3 h-[400px] text-4xl text-blue-500 bg-white">
                  <h2>"if you sure you want buy it enter your card number" </h2> 
              </div>
              <div>
              <form> <input className=" p-[10px] focus:outline-none w-[500px] border-solid border-2 border-gray-300 mb-10 ml-10 text-2xl relative right-[900px] top-[200px]"
                   placeholder="Enter Your Card Number" ></input>
                <button onClick={HandleDivClick}  className=" text-white text-3xl bg-sky-400 my-4 px-6 h-20 w-[180px] mb-16 relative right-[300px] top-[80px]" >Buy</button></form></div>
                   
          </div>
      )  
  }
  else{
   return(<></>)
  }
}
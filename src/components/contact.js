import React from "react";
import { useState } from "react";
import Model from "./model";
function Contact (){
   const [showmodel,setmodel]=useState(false) // to show or hide the error msg
     const [LoanInputs,setLoanInputs]=useState({
   name:"",
   email:"",
        });

        function HandleSubmit(event){
         event.preventDefault();
         setmodel(true);
 
     }
      // function to hide the msg
     function HandleDivClick(){
     if(showmodel){
       setmodel(false);
      }
     }
     const btnDisable = (LoanInputs.name===""
   ||LoanInputs.email==="");



    return  (

 <div>

<div class="contact">
   <div class="container">
   <div className="main-heading ">
         <h2 className="flex items-center justify-center text-6xl mb-10 capitalize font-semibold relative left-[120px] mt-40">CONTACT US</h2>
         <p className="flex items-center justify-center leading-relaxed text-gray-400 text-2xl mb-20 relative left-[120px]">Curabitur arcu erat, accumsan id imperdiet et, 
            porttitor at sem. Mauris <br></br>  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; blandit aliquet elit, eget tincidunt.</p>
      </div>
      <div onClick={HandleDivClick} class="content grid grid-cols-2 gap-10  ">
         <form action="" className="relative left-[150px]  ">
            <input  value={LoanInputs.name}
       onChange={(event)=>{
        setLoanInputs({...LoanInputs,name:event.target.value});
       }}
             class="main-input p-[20px] focus:outline-none w-[800px] border-solid border-2 border-gray-300 m-10 text-2xl" type="text" name="name" placeholder="Your Name"/> 
            <input  value={LoanInputs.email}
       onChange={(event)=>{
        setLoanInputs({...LoanInputs,email:event.target.value});
       }}
             class="main-input p-[20px] focus:outline-none w-[800px] border-solid border-2 border-gray-300 mb-10 ml-10 text-2xl"  type="Email" name="mail" placeholder="Your Email"/>
            <textarea className="p-[20px] focus:outline-none h-[300px] w-[800px] border-solid border-2 border-gray-300 ml-10 text-2xl" name="message " placeholder="Your Message" class="main-input"></textarea>
            <button   onClick={HandleSubmit}
               disabled={btnDisable}
               style={{backgroundColor:btnDisable?"gray":"#00bfff"}}
           
             className=" text-white text-3xl bg-sky-400 my-8 py-5 px-12 h-20 w-[400px] relative left-[300px]  mb-16" >SEND MESSAGE</button>
         </form>
         <div className="info relative left-[350px]">
        <h4 className="text-2xl mb-14 mt-8">GET IN TOUCH</h4>
        <div class="phone text-gray-500 text-2xl mb-5">+00 123.456.789</div>
        <div class="phone text-gray-500 text-2xl">+00 123.456.789</div>
        <h4 className="text-2xl mb-9 mt-20">WHERE WE ARE</h4>
        <address className=" text-gray-500 text-2xl mb-5 leading-relaxed">Awesome Address 17<br></br>
         New York, NYC<br></br>
         123-4567-890<br></br>
         USA</address>
         </div>
         <Model isVisable={showmodel}/>
      </div>
   </div>
 </div>
 
 </div>
    
);
};
export default Contact;
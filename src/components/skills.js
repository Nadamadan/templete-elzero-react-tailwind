import React from "react";
import one from "../images/skills-01.jpg";
import two from "../images/skills-02.jpg";
const Menu = [
    {
      id: 1,
      name: "ADOBE",
      skill: "90%",
    },
    {
      id: 2,
      name: "HTML & CSS",
      skill: "85%",
    },
    {
      id: 3,
      name: "JAVASCRIPT",
      skill: "80%",
    },
    {
      id: 4,
      name: "PHP",
      skill: "90%",
    },
  
  ];

  const Photo = [
    {
      id: 1,
      phn: one,
    
    },
    {
      id: 2,
      phn: two,
    },
   
  
  ];
function Skills (){
    return  (
    <div>
 <div className="our-skills my-24">
   <div className="container grid grid-cols-2 gap-32 ">
      <div className="testmonials">
         <h3 className="flex items-center justify-center text-3xl mb-12">TESTIMONIALS</h3>
     <p className="flex items-center justify-center text-2xl mb-20 ml-10 text-gray-400 relative left-[110px]">Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
     &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Mauris blandit aliquet elit, eget tincidunt.</p>

       {Photo.map((menu) => (
                  <div key={menu.id} className="flex">
                    <img className="rounded-full h-36 w-40 ml-10 mb-6 relative top-[30px] left-[60px]" src={menu.phn}  alt=""/>
                    <div className="text  text-2xl  ml-10 border-b-2 border-solid border-gray-300 leading-relaxed  relative left-[100px] mt-10 ">
                       Curabitur arcu erat, accumsan id imperdiet et,
                        porttitor at sem. Mauris blandit aliquet elit, eget tincidunt.
                    <p className=" mt-8 text-gray-400 relative left-[300px] top-[-14px]">John Doe, CEO</p>
                 </div>
                  </div>
                ))}

       <ul className="bullets">
         <li></li>
         <li className="active"></li>
         <li></li>
      </ul>
      </div>

      <div className="skills">
         <h3 className="flex items-center justify-center text-3xl mb-12">SKILLS</h3>
     <p className="flex items-center justify-center text-2xl mb-20 ml-10 text-gray-400 relative left-[110px]">Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
       Mauris blandit aliquet elit, eget tincidunt.</p>

             {Menu.map((menu) => (
                  <div key={menu.id} className="prog-holder mb-10 relative left-[140px] ">
                    <h4 className=" mb-6 text-2xl ">{menu.name}</h4>
                    <div className="bg-gray-300/70">
                    <div className="block bg-sky-400/80 h-10 w-2/3" style={{width:menu.skill}} data-progress={menu.skill}></div>
                    </div>
                  </div>
                ))}

              </div>
   </div>
 </div>

    </div>
);
};
export default Skills;
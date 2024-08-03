import React from "react";
export function Land(){
  return(
<>
<div className="bg-[url('https://img.pikbest.com/photo/20240617/a-mysterious-owl-perched-on-a-tree-branch-in-the-moonlight_10624926.jpg!f305cw')] 
        w-full h-screen bg-cover min-h-full relative">
   <div className="overlay absolute left-0 top-0 w-full h-full bg-black/30"></div>
   <div className="text absolute left-0 top-1/3 w-1/2 p-20 bg-cyan-500/50 flex justify-end">
      <div className="content text-white">
        <h2 className="text-4xl">Hello World!<br></br>
         We Are Kasper We Make Art.</h2> <br></br>
        <p className="text-xl">Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur aliquet quam.
          Accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt.</p>
      </div>
   </div>
      <div className="bullets absolute left-1/2 flex bottom-10">
      <div className="w-10 h-10 bg-black/20 rounded-full border-solid border-2 border-white mr-6"></div>
      <div className="active w-10 h-10 bg-cyan-500 rounded-full border-3 border-solid border-white mr-6  "></div>
      <div className="w-10 h-10 bg-black/20 rounded-full border-solid border-2 border-white mr-6"></div>
   </div>
 </div>
</>
  );
};
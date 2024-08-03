import React from "react";
export default function Model({isVisable,}){
    if(isVisable){
        return(
            <div className=" absolute w-screen h-screen flex justify-center items-center bg-gray-300/40">
                <div className=" flex justify-center items-center w-2/3 h-72 text-4xl text-green-600 bg-white">
                    <h1>"The Message Has Been Sended Successfilly" </h1>
                </div>
            </div>
        )  
    }
    else{
     return(<></>)
    }
}

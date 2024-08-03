import React from "react";
import one from "../images/shuffle-01.jpg";
import two from "../images/shuffle-02.jpg";
import three from "../images/shuffle-03.jpg";
import four from "../images/shuffle-04.jpg";
import five from "../images/shuffle-05.jpg";
import six from "../images/shuffle-06.jpg";
import seven from "../images/shuffle-07.jpg";
import eight from "../images/shuffle-08.jpg";
const Menu = [
   {
     id: 1,
     photo:one,
   },
   {
     id: 2,
     photo:two ,
   },
   {
     id: 3,
     photo:three ,
   },
   {
     id: 4,
     photo:four ,
   },
   {
     id: 5,
     photo:five ,
   },
   {
     id: 6,
     photo:six ,
   },
   {
      id: 7,
      photo:seven ,
    },
    {
      id: 8,
      photo:eight ,
    },
 ];
function Portfolio (){
    return  (
    <div>
  
  <div class="portfolio pt-36">
   <div class="container">
   <div className="main-heading">
         <h2 className="flex items-center justify-center text-6xl mb-10 capitalize font-semibold relative left-[160px]">PORTFOLIO</h2>
         <p className="flex items-center justify-center leading-relaxed text-gray-400 text-2xl mb-20 relative left-[160px]">Curabitur arcu erat, accumsan id imperdiet et, 
            porttitor at sem. Mauris <br></br>  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; blandit aliquet elit, eget tincidunt.</p>
      </div>
      <ul class="shuffle flex justify-center gap-6 text-2xl pb-10 relative left-[200px] ">
         <li class="active bg-sky-400 text-white px-6 py-4">All</li>
         <li>App</li>
         <li>Photo</li>
         <li>Web</li>
         <li>Print</li>
      </ul>
   </div>
   <div class="imgs-container grid grid-cols-4 mt-7 mb-6 flex-wrap">
          {Menu.map((menu) => (
                  <div key={menu.id} >
                   <img className="max-w-full hover:rotate-3 mb-4  " src={menu.photo} alt=""/>
                  </div>
                ))}
         
  </div>
   <div className=" text-white text-3xl bg-sky-400 py-5 px-12 h-20 w-40 relative left-[800px] mb-20">
   <a href="https://www.google.com/search?sca_esv=a15ff2edb25f5fde&sxsrf=ADLYWIK0BEcuh8cOU0CIAp5PRoPGpCbxZw:1722428728119&q=beautiful+photos.jpg&udm=2&fbs=AEQNm0AVC_jJd_qrmjGRq-GYjl-c7k6o9NR1cGzHPFI7rH7xsKb3AILNs7OTPKzCR6_BywN8A8X7er_Lu4Hmh8sWhGjob5Tsfsho8bBxeV6DYcl9gVvTHWGIrTDntpU9VrfIFc9tkiG6Z94ss9jEhzERZp5V8U-g00wS0TdezTX5c22evYadK_JYoftGATg420IQuQGI3UNy2xTdjpq0f04FzwdlFQgIzEawvjzfcTAYiPUpi1dK02eA0rpdC1OY-pGYLLLHX0ZH&sa=X&ved=2ahUKEwj5__WDo9GHAxWZwQIHHbaCFEIQtKgLegQIDxAB&biw=1280&bih=559&dpr=1.5"
    >More</a>
    </div>
 </div>
    </div>
);
};
export default Portfolio;
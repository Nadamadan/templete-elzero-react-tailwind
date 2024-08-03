import React from "react";
import Navbar  from "./components/header";
import { Land } from "./components/land";
import Services from "./components/services";
import Design from "./components/design";
import Portfolio from "./components/portfolio";
import About from "./components/about";
import Skills from "./components/skills";
import Qote from "./components/qote";
import Pricing from "./components/pricing";
import Contact from "./components/contact";
import Footer from "./components/footer";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import './index.css';


function App (){
    return  (
    <div> 
         <Navbar/>
    <BrowserRouter>
    <Routes>
       <Route path="/" element={<Land/>}/>  
        <Route path="/services" element={<Services/>}/>
        <Route path="/services" element={<Design/>}/>
        <Route path="/Portfolio" element={<Portfolio/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/about" element={<Qote/>}/>
        <Route path="/pricing" element={<Pricing/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/contact" element={<Contact/>}/>
      
    </Routes>
    </BrowserRouter>
<Footer/>
    </div>
);
};
export default App;
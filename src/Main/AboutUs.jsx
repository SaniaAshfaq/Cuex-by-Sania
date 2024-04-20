import { Navbar } from "./Components/01_Navbar";
import Image from './/Images/AllPages.jpg';
import { Link } from "react-router-dom";
import Partners from "./Components/06_Partners";
import { About } from "./Components/04_AboutUs";
import { Services } from "./Components/03_Services";
import Faqs from "./Components/010_Faqs";
import Reviews from "./Components/09_Reviews";
import Footer from "./Components/012_Footer";
function AboutUs()
{
    return(
        <>
        <Navbar/>
        <div className="">
        <div className="w-fll h-80 relative" style={{backgroundImage: `url(${Image})`, backgroundPosition:'center', backgroundSize:'cover'}}>
         <div className="w-full h-full absolute bg-black bg-opacity-80 flex items-center justify-center">

        <div className="">
        <h1 className="text-white text-4xl py-2" style={{fontFamily:'Raleway', fontWeight:800}}>About Us</h1>
         <div className="flex text-white pl-4 font-semibold">
         <Link to='/' className="pr-2">
            Home
         </Link>

        
        <p className="cursor-pointer text-[#00A79D] px-2">About Us</p>
      
         </div>
         
        </div>
         </div>
       
         </div>
        
        </div>
          <div className="pt-20">
           <div className="flex flex-col items-center text-4xl " style={{fontFamily:'Raleway', fontWeight:700}}>
           <h1>Used By  100K+ Business of All </h1>
            <h1>Shapes and sizes</h1>
           </div>
          </div>

          <Partners/>
          <About/>
          <Services/>
          <Faqs/>
           <Reviews/>
           <Footer/>
        
        </>
    )
}
export default AboutUs;